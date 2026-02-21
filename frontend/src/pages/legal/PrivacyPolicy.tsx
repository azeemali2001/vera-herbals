import { LegalPageTemplate } from "../../components/legal/LegalPageTemplate";

const sections = [
  {
    title: "Overview",
    paragraphs: [
      "This website is operated by Veridian Enterprises and managed under Indian jurisdiction.",
      "Throughout the site, the terms “we”, “us” and “our” refer to Veridian Enterprises.",
      "By visiting our site and/or purchasing something from us, you agree to be bound by these Terms, including additional terms, conditions and policies referenced here or linked elsewhere on the site.",
    ],
  },
  {
    title: "General Conditions",
    bullets: [
      "You confirm that you are at least 18 years of age or are accessing the site under supervision of a legal guardian.",
      "You may not use our products for any illegal or unauthorized purpose.",
    ],
  },
  {
    title: "Product Information",
    paragraphs: [
      "All product descriptions, pricing, and availability are subject to change without notice.",
      "We strive for accuracy but do not guarantee that product descriptions or other content is complete, reliable, or error-free.",
      "Use of Ayurvedic or natural health products should be done in consultation with a registered medical professional, especially for those with pre-existing health conditions or during pregnancy.",
    ],
  },
  {
    title: "Prices and Payment",
    paragraphs: [
      "All prices are in Indian Rupees (INR) and inclusive of GST unless stated otherwise.",
      "We accept payments via UPI, debit/credit cards, net banking, and other modes enabled on our platform.",
    ],
  },
  {
    title: "Shipping and Delivery",
    paragraphs: [
      "We ship products within India through our logistics partners.",
      "Estimated delivery times are displayed at checkout and delays may occur due to unforeseen circumstances.",
      "Delivery charges, if any, are clearly mentioned before final payment.",
    ],
  },
  {
    title: "Returns and Refunds",
    paragraphs: [
      "Returns are accepted only for damaged, defective, or wrong items delivered.",
      "Items must be returned unused and in original packaging.",
      "Please refer to our Cancellation & Refund policy for detailed return and refund terms.",
    ],
  },
  {
    title: "Privacy, Feedback, and Third-Party Links",
    bullets: [
      "Your submission of personal information is governed by our Privacy Policy.",
      "Any comments, suggestions, or feedback provided to us may be used without restriction.",
      "This site may contain links to third-party websites and we are not responsible for their policies or practices.",
    ],
  },
  {
    title: "Prohibited Uses",
    paragraphs: [
      "You are prohibited from using the site or its content for unlawful purposes, violating Indian laws, infringing our intellectual property, or transmitting malicious code.",
    ],
  },
  {
    title: "Governing Law and Changes",
    paragraphs: [
      "These terms and any service agreements are governed by the laws of India.",
      "Any disputes are subject to the exclusive jurisdiction of courts in Thane, Maharashtra, India.",
      "We reserve the right to update these terms at any time without prior notice.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Privacy Policy"
      description="Your trust matters to us. This policy explains how Veridian Enterprises operates, handles information, and applies terms while delivering our products and services."
      image="ai/privacy-hero.svg"
      sections={sections}
    />
  );
}
