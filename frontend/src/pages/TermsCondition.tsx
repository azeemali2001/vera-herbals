import { motion } from "framer-motion";
import { PolicyLayout } from "../components/PolicyLayout";
import { FileText, Copyright, Link2, MessageCircle, Scale, AlertCircle, Mail, Globe } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Agreement to Terms",
    content: "Your use of the globalveridian.com website constitutes your agreement to be bound by these terms and conditions. If you do not agree to these terms, please do not access or use this Site. \"Content\" refers to any materials, documents, images, graphics, logos, design, audio, video and any other information provided from or on our website, including trademarks, service marks and logos."
  },
  {
    icon: AlertCircle,
    title: "Changes to Terms",
    content: "We may, at any time change the Site and these terms and conditions. Your use of the Site following any such change constitutes your acceptance of such change. For this reason, we encourage you to review these Terms and Conditions whenever you use the Site."
  },
  {
    icon: Copyright,
    title: "Trademark and Copyright Notice",
    content: "All of the Content on the Site is subject to trademark, service mark, trade dress, copyright and/or other intellectual property rights or licenses held by Globalveridian or one of its affiliates or by third parties who have licensed their materials to us."
  },
];

const usageRights = [
  {
    title: "Personal Use Only",
    desc: "You may use the Content of the Site only for your personal, non-commercial use. The content is for informational purposes only.",
  },
  {
    title: "No Reproduction",
    desc: "Copying, downloading, reproducing, modifying, publishing, distributing, transmitting, transferring or creating derivative works from the Content without prior written consent is strictly prohibited.",
  },
  {
    title: "Limited Permission",
    desc: "We grant permission to download, print and store selected portions of the Content for your own personal, non-commercial use.",
  },
  {
    title: "No Broadcasting",
    desc: "You cannot copy or post the Content on any network computer or broadcast the Content in any media.",
  },
  {
    title: "Preserve Notices",
    desc: "You cannot modify or alter the Content in any way, or delete or change any copyright or trademark notice.",
  },
  {
    title: "No Transfer of Rights",
    desc: "No right, title or interest in any downloaded materials is transferred to you as a result of any such downloading.",
  },
];

export function TermsConditions() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      description="Understanding our mutual rights and responsibilities"
      heroImage="https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50JTIwY29udHJhY3R8ZW58MXx8fHwxNzcxNzA0ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    >
      {/* Key Sections */}
      <div className="space-y-8 mb-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl border-2 border-[#2E7D32]/10 hover:border-[#2E7D32]/30 transition-all overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#2E7D32]/10"
          >
            <div className="bg-gradient-to-r from-[#F1F8F4] to-white p-6 border-b-2 border-[#2E7D32]/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#1F5620] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>
            </div>
            <div className="p-4 md:p-6 lg:p-8">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">{section.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Usage Rights */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-start md:items-center gap-2 md:gap-3 mb-8">
          <div className="w-1 h-10 md:h-12 bg-gradient-to-b from-[#2E7D32] to-[#1F5620] rounded-full flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Usage Rights & Restrictions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {usageRights.map((right, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-gradient-to-br from-white to-[#F1F8F4] p-4 md:p-6 rounded-xl border-2 border-[#2E7D32]/10 hover:border-[#2E7D32]/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2E7D32] flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-[#2E7D32] mb-2">{right.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{right.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 bg-gradient-to-br from-[#2E7D32] to-[#1F5620] p-6 md:p-8 rounded-2xl text-white">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Copyright className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Intellectual Property Rights</h3>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                Globalveridian reserves complete title and full intellectual property rights in any Content you 
                download from the Site. Unauthorized use may result in legal action.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Third Party Links */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-white rounded-2xl border-2 border-[#2E7D32]/10 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-[#F1F8F4] to-white p-4 md:p-6 border-b-2 border-[#2E7D32]/10">
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Link2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Links to Third Party Sites</h2>
            </div>
          </div>
          <div className="p-4 md:p-6 lg:p-8">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
              This Site may contain links to Sites owned or operated by third parties. Such links are provided 
              for your reference only and we do not control such Sites and we are not responsible for their content.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              We reserve the right to terminate a link to a third party Site at any time and the fact that we 
              provide a Link does not mean that we endorse, authorize or sponsor that Site.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Communications */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-[#F1F8F4] to-white p-4 md:p-6 lg:p-8 rounded-2xl border-2 border-[#2E7D32]/10">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Promotional Communications</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  We will be sending promotional SMS and emails to our customers to keep you informed about our 
                  latest products and offers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-[#F1F8F4] p-4 md:p-6 lg:p-8 rounded-2xl border-2 border-[#2E7D32]/10">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Transaction Charges</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Transaction charges are applicable for prepaid orders if the order is cancelled. Courier charges 
                  are applicable for returning the product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Comments Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-white rounded-2xl border-2 border-[#2E7D32]/10 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-[#F1F8F4] to-white p-4 md:p-6 border-b-2 border-[#2E7D32]/10">
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Comments & Feedback</h2>
            </div>
          </div>
          <div className="p-4 md:p-6 lg:p-8">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
              We welcome your comments, notes, messages, ideas, feedback, suggestions or other communications 
              (collectively, "Comments") concerning the Site, which shall be and remain the exclusive property 
              of Globalveridian.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Your submission of any such Comments shall constitute an assignment to Globalveridian of all worldwide 
              rights, titles and interests in all copyrights and other intellectual property rights in the Comments. 
              Globalveridian will be entitled to use, reproduce, disclose, publish and distribute any material you 
              submit for any purpose whatsoever, without restriction and without compensating you in any way. For this 
              reason, only send us comments which you desire to assign to us.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Governing Law */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-br from-[#2E7D32] to-[#1F5620] p-6 md:p-10 rounded-3xl text-white shadow-2xl">
          <div className="flex items-start gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-xl">
              <Scale className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Governing Law</h2>
              <p className="text-white/90 leading-relaxed text-base md:text-lg mb-6">
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed 
                by and construed in accordance with the laws of India.
              </p>
              <div className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-start gap-2 md:gap-3">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-1" />
                  <p className="text-white/95 leading-relaxed text-sm md:text-base">
                    Any disputes arising shall be subject to the exclusive jurisdiction of the courts located in 
                    <strong className="text-white"> Thane, Maharashtra, India</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#F1F8F4] to-white p-6 md:p-8 rounded-2xl border-2 border-[#2E7D32]/20 text-center"
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Questions About Our Terms?</h3>
        <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
          If you have any questions or concerns about our Terms and Conditions, please don't hesitate to reach out to us.
        </p>
        <a
          href="mailto:connect@globalveridian.com"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E7D32] to-[#1F5620] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#2E7D32]/30 transition-all hover:scale-105"
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5" />
          Contact Us
        </a>
      </motion.div>

      {/* Last Updated */}
      <div className="text-center pt-6 md:pt-8 mt-6 md:mt-8 border-t-2 border-[#2E7D32]/10">
        <p className="text-gray-600 text-sm md:text-base">
          Last Updated: <span className="font-semibold text-[#2E7D32]">February 21, 2026</span>
        </p>
      </div>
    </PolicyLayout>
  );
}
