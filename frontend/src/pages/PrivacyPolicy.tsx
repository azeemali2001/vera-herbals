import { motion } from "framer-motion";
import { PolicyLayout } from "../components/PolicyLayout";
import { Shield, Lock, Eye, FileText, Users, CreditCard, Truck, MessageSquare, Scale, Globe } from "lucide-react";

const privacySections = [
  {
    icon: Eye,
    title: "Overview",
    content: "This website is operated by Veridian Enterprises, and managed under Indian jurisdiction. Throughout the site, the terms \"we\", \"us\" and \"our\" refer to Veridian Enterprises. By visiting our site and/or purchasing something from us, you agree to be bound by the following terms and conditions (\"Terms\"), including additional terms, conditions and policies referenced here or linked elsewhere on the site."
  },
  {
    icon: Users,
    title: "General Conditions",
    content: "By using this site, you confirm that you are at least 18 years of age or are accessing the site under the supervision of a legal guardian. You may not use our products for any illegal or unauthorized purpose."
  },
  {
    icon: FileText,
    title: "Product Information",
    content: "All product descriptions, pricing, and availability are subject to change without notice. We strive for accuracy but do not guarantee that product descriptions or other content is complete, reliable, or error-free. The use of Ayurvedic or natural health products should be done in consultation with a registered medical professional, especially for those with pre-existing health conditions or during pregnancy."
  },
  {
    icon: CreditCard,
    title: "Prices and Payment",
    content: "All prices are in Indian Rupees (INR) and inclusive of GST unless stated otherwise. We accept payments via UPI, debit/credit cards, net banking, and other modes as enabled on our platform."
  },
  {
    icon: Truck,
    title: "Shipping and Delivery",
    content: "We ship products within India through our logistics partners. Estimated delivery times are displayed at checkout. Delays may occur due to unforeseen circumstances. Delivery charges, if any, are clearly mentioned before the final payment."
  },
  {
    icon: Shield,
    title: "Returns and Refunds",
    content: "Please refer to our Refund & Return Policy for details. Returns are accepted only for damaged, defective, or wrong items delivered. Items must be returned unused and in original packaging."
  },
  {
    icon: MessageSquare,
    title: "User Comments and Feedback",
    content: "You agree that any comments, suggestions, or feedback provided to us become our property and may be used without restriction. We are not obligated to maintain confidentiality, pay compensation, or respond to comments."
  },
  {
    icon: Globe,
    title: "Third-Party Links",
    content: "This site may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party websites."
  },
];

const prohibitedUses = [
  "Using the site for unlawful purposes",
  "Violating any Indian laws or regulations",
  "Infringing on our intellectual property rights",
  "Transmitting viruses or malicious code",
  "Attempting to interfere with site functionality",
];

export function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="Your privacy and data security are our top priorities"
      heroImage="https://images.unsplash.com/photo-1769704653651-2d09b1e6e60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YWN5JTIwc2VjdXJpdHklMjBsb2NrfGVufDF8fHx8MTc3MTcwNDgzMnww&ixlib=rb-4.1.0&q=80&w=1080"
    >
      {/* Trust Badges */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Shield, title: "Secure & Protected", desc: "Your data is encrypted and safe" },
          { icon: Lock, title: "Privacy First", desc: "We never share your information" },
          { icon: FileText, title: "Transparent", desc: "Clear and honest policies" },
        ].map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#2E7D32] to-[#1F5620] p-6 rounded-2xl text-white text-center shadow-xl hover:shadow-2xl hover:shadow-[#2E7D32]/30 transition-all hover:scale-105"
          >
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <badge.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
            <p className="text-white/80 text-sm">{badge.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Privacy Sections */}
      <div className="space-y-8">
        {privacySections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl border-2 border-[#2E7D32]/10 hover:border-[#2E7D32]/30 transition-all overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#F1F8F4] to-white p-6 border-b-2 border-[#2E7D32]/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#1F5620] flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          </motion.section>
        ))}

        {/* Privacy Submission */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F1F8F4] to-white p-8 rounded-2xl border-2 border-[#2E7D32]/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-[#2E7D32] to-[#1F5620] rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900">Privacy</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Your submission of personal information is governed by our Privacy Policy. We are committed to 
            protecting your privacy and ensuring that your personal data is handled securely and responsibly.
          </p>
        </motion.section>

        {/* Prohibited Uses */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-red-50 to-white p-6 border-b-2 border-red-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Prohibited Uses</h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4 leading-relaxed">
              You are prohibited from using the site or its content for:
            </p>
            <ul className="space-y-3">
              {prohibitedUses.map((use, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{use}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Governing Law */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#2E7D32] to-[#1F5620] p-8 rounded-2xl text-white"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                These Terms of Service and any separate agreements whereby we provide you services shall be 
                governed by and construed in accordance with the laws of India. Any disputes shall be subject 
                to the exclusive jurisdiction of the courts in <strong>Thane, Maharashtra, India</strong>.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Changes Notice */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Changes to Terms of Service</h3>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update or change our Terms at any time without prior notice. It is your 
                responsibility to check this page periodically for changes. Your continued use of the site following 
                the posting of changes constitutes your acceptance of those changes.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Last Updated */}
        <div className="text-center pt-8 border-t-2 border-[#2E7D32]/10">
          <p className="text-gray-600">
            Last Updated: <span className="font-semibold text-[#2E7D32]">February 21, 2026</span>
          </p>
        </div>
      </div>
    </PolicyLayout>
  );
}
