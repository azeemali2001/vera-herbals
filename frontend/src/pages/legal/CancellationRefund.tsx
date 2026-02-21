import { LegalPageTemplate } from "../../components/legal/LegalPageTemplate";

const sections = [
  {
    title: "Cancellation or Return",
    paragraphs: [
      "You can cancel your order within 6 hours of placing it. Orders cannot be cancelled once dispatched from our hub.",
      "Returns are accepted for products delivered with damaged outer packaging, damaged product, or wrong item.",
      "For questions, please contact us at connect@globalveridian.com.",
    ],
    bullets: [
      "If cancelled before shipping: refund is processed after deducting 5% transaction charge.",
      "If cancelled after processing into shipping: 10% processing charge is deducted and any shipment fee paid by Veridian Enterprises may also be deducted.",
      "If cancellation is after shipping: refund is processed after deducting forward and return shipping charges.",
      "If you received the product: replacement is eligible only for defects.",
    ],
  },
  {
    title: "Damages and Issues",
    paragraphs: [
      "Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or wrong so we can evaluate and resolve the issue.",
    ],
  },
  {
    title: "Refunds",
    bullets: [
      "Only defective and damaged products can be returned within 4 working days from date of delivery.",
      "Refunds are processed via the original payment method within 15 working days.",
      "Items purchased on sale are non-refundable.",
    ],
  },
];

export default function CancellationRefund() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Cancellation & Refund"
      description="Clear and fair policy for cancellations, replacements, and refunds to ensure confidence in every order you place with us."
      image="Moringa Photo 2.png"
      sections={sections}
      footerNote={<p className="text-sm md:text-base">Need help with an active order? Email us at <span className="font-semibold">connect@globalveridian.com</span>.</p>}
    />
  );
}
