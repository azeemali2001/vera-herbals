import { motion } from "framer-motion";
import { PolicyLayout } from "../components/PolicyLayout";
import { Clock, XCircle, RefreshCw, AlertCircle, CheckCircle2, Package } from "lucide-react";

const timelineItems = [
  {
    icon: Clock,
    title: "Within 6 Hours",
    description: "Cancel order before dispatch with 5% transaction fee",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Package,
    title: "After Processing",
    description: "10% processing charge + shipping fees if applicable",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: XCircle,
    title: "After Shipment",
    description: "Forward & return shipping charges apply",
    color: "from-orange-500 to-orange-600",
  },
];

export function CancellationRefund() {
  return (
    <PolicyLayout
      title="Cancellation & Refund"
      description="Clear and fair policies for your peace of mind"
      heroImage="https://images.unsplash.com/photo-1615775036549-3ed82887fcc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjByZWZ1bmQlMjBwb2xpY3l8ZW58MXx8fHwxNzcxNzA0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    >
      {/* Timeline Cards */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cancellation Timeline</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl border-2 border-[#2E7D32]/10 hover:border-[#2E7D32]/30 transition-all hover:shadow-xl hover:shadow-[#2E7D32]/10 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              {index < timelineItems.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#2E7D32]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="space-y-10">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-[#2E7D32] to-[#1F5620] rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900">Cancellation Policy</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#F1F8F4] to-white p-6 rounded-2xl border-l-4 border-[#2E7D32]">
              <h3 className="font-bold text-xl text-[#2E7D32] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Early Cancellation (Within 6 Hours)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You can cancel your order within <strong>6 hours of placing the order</strong>. We would not be able to 
                cancel the order once it is dispatched from our hub. You can always contact us with any questions 
                at <a href="mailto:connect@globalveridian.com" className="text-[#2E7D32] hover:underline font-medium">connect@globalveridian.com</a>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-[#2E7D32]/10">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Cancellation Charges:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2E7D32] mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-[#2E7D32]">Before Shipment:</strong>
                    <p className="text-gray-700 mt-1">
                      If you cancel your order before your product has shipped, we will refund you after 
                      deducting a transaction charge of <strong>5%</strong>. Once the order is processed into shipping, 
                      <strong> 10%</strong> will be deducted as a processing charge and if the shipment fee is already 
                      paid by Veridian Enterprises then that will be deducted too.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2E7D32] mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-[#2E7D32]">After Shipment:</strong>
                    <p className="text-gray-700 mt-1">
                      If the cancellation is done after the product is shipped, the refund is processed after 
                      deducting forward and return shipping charges.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-[#2E7D32] to-[#1F5620] rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900">Replacement & Returns</h2>
          </div>

          <div className="bg-gradient-to-br from-white to-[#F1F8F4] p-8 rounded-2xl border-2 border-[#2E7D32]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2E7D32] flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">When Can You Get a Replacement?</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you received the product, it will be eligible for replacement only in cases where there are 
                  defects found with the product.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#2E7D32]/20">
              <h4 className="font-semibold text-lg text-[#2E7D32] mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Damages and Issues
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Please inspect your order upon reception and contact us immediately if the item is defective, 
                damaged or if you receive the wrong item so that we can evaluate the issue and make it right.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-gradient-to-b from-[#2E7D32] to-[#1F5620] rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900">Refund Policy</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#2E7D32] to-[#1F5620] p-8 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Refund Timeline</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Only defective and damaged products can be returned within <strong>4 working days</strong> from 
                    the day of delivery. The refund amount will be processed via the original payment method within 
                    <strong> 15 working days</strong>.
                  </p>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <p className="text-white/90 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span><strong>Important:</strong> Items purchased on SALE will not be refundable.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F1F8F4] to-white p-8 rounded-2xl border-2 border-[#2E7D32]/20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Have Questions?</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our customer support team is here to help with any cancellation or refund queries.
          </p>
          <a
            href="mailto:connect@globalveridian.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E7D32] to-[#1F5620] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#2E7D32]/30 transition-all hover:scale-105"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </PolicyLayout>
  );
}
