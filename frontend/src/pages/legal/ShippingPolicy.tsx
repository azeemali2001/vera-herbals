import { LegalPageTemplate } from "../../components/legal/LegalPageTemplate";

const sections = [
  {
    title: "Shipping Timeline",
    paragraphs: [
      "Shipping of orders is processed within 48 hours of order confirmation.",
      "Orders typically reach customers within 3–5 business days depending on the logistics partner.",
    ],
  },
  {
    title: "Shipping Charges",
    bullets: [
      "Free shipping is offered on all orders above ₹499 (subject to updates from time to time).",
      "Cash on Delivery is available at additional charges as applicable by the logistics partner for COD processing.",
    ],
  },
];

export default function ShippingPolicy() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Shipping Policy"
      description="Fast and transparent delivery commitments across India, including order timelines, free shipping eligibility, and COD terms."
      image="ai/shipping-hero.svg"
      sections={sections}
    />
  );
}
