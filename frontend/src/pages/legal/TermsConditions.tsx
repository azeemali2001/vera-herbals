import { LegalPageTemplate } from "../../components/legal/LegalPageTemplate";

const sections = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "Your use of the globalveridian.com website constitutes your agreement to be bound by these terms and conditions.",
      "If you do not agree to these terms, please do not access or use this site.",
      "We may change the site and these terms at any time, and continued use means acceptance of those changes.",
    ],
  },
  {
    title: "Content Ownership",
    paragraphs: [
      "Content includes materials, documents, images, graphics, logos, design, audio, video, trademarks, service marks, and logos.",
      "All content is protected by intellectual property rights held by Globalveridian, affiliates, or third-party licensors.",
    ],
  },
  {
    title: "Permitted Use",
    bullets: [
      "Content is for personal, non-commercial, informational use only.",
      "Copying, reproducing, modifying, publishing, distributing, transmitting, or creating derivatives without prior written consent is strictly prohibited.",
      "You may download, print, and store selected content for personal non-commercial use, provided notices are not removed or altered.",
      "No title or ownership rights are transferred by downloading content.",
    ],
  },
  {
    title: "Third-Party Links and Promotions",
    paragraphs: [
      "This site may contain links to third-party sites. We do not control and are not responsible for third-party content.",
      "We may send promotional SMS and emails to customers.",
      "Transaction charges may apply for prepaid order cancellations, and courier charges may apply for product returns.",
    ],
  },
  {
    title: "Comments and Feedback",
    paragraphs: [
      "Any comments, notes, messages, ideas, suggestions, or other communications submitted to us become the exclusive property of Globalveridian.",
      "We may use, reproduce, disclose, publish, and distribute such comments without restriction and without compensation.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These terms and any separate agreements are governed by and construed in accordance with the laws of India.",
      "Any disputes are subject to the exclusive jurisdiction of courts located in Thane, Maharashtra, India.",
    ],
  },
];

export default function TermsConditions() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Terms & Conditions"
      description="These terms govern your use of our website, content, and services, including intellectual property, permitted usage, and legal jurisdiction."
      image="logo-no-bg.png"
      sections={sections}
    />
  );
}
