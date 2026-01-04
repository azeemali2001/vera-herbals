import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Extract data from request body
  const {
    fullName,
    companyName,
    email,
    phone,
    requirement,
    message,
  } = req.body;

  // Basic validation
  if (!fullName || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create SMTP transporter for Titan Email
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 587,
      secure: false,
      auth: {
        user: "connect@globalveridian.com",
        pass: process.env.TITAN_EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Global Veridian Website" <connect@globalveridian.com>`,
      to: "connect@globalveridian.com",
      replyTo: email,
      subject: "New Website Enquiry",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company Name:</strong> ${companyName || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Business Requirement:</strong> ${requirement || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "-"}</p>
        <hr />
        <p style="font-size:12px;color:#666;">
          This enquiry was submitted from the Global Veridian website contact form.
        </p>
      `,
    });

    // Success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: "Failed to send enquiry email" });
  }
}
