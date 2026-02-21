import { motion } from "framer-motion";
import { PolicyLayout } from "../components/PolicyLayout";
import { Package, Clock, DollarSign, Truck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Processing Time",
    description: "Orders processed within 48 hours",
  },
  {
    icon: Truck,
    title: "Delivery Time",
    description: "3-5 business days delivery",
  },
  {
    icon: DollarSign,
    title: "Free Shipping",
    description: "On orders above ₹499",
  },
  {
    icon: Package,
    title: "COD Available",
    description: "Cash on delivery at additional charges",
  },
];

export function ShippingPolicy() {
  return (
    <PolicyLayout
      title="Shipping Policy"
      description="Fast, reliable delivery to your doorstep"
      heroImage="https://images.unsplash.com/photo-1665521032636-e8d2f6927053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGRlbGl2ZXJ5JTIwbG9naXN0aWNzfGVufDF8fHx8MTc3MTcwNDgzMXww&ixlib=rb-4.1.0&q=80&w=1080"
    >
      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#F1F8F4] to-white p-6 rounded-2xl border-2 border-[#2E7D32]/10 hover:border-[#2E7D32]/30 transition-all hover:shadow-lg hover:shadow-[#2E7D32]/10"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#1F5620] flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-[#2E7D32] mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Detailed Policy */}
      <div className="space-y-8">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[#2E7D32] to-[#1F5620] rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900">Shipping Details</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              The shipping of the orders is processed within <strong className="text-[#2E7D32]">48 hours</strong> of the order.
              And it reaches Customer within <strong className="text-[#2E7D32]">3-5 Business days</strong> depending on the
              Logistics partner.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4 bg-gradient-to-br from-[#F1F8F4] to-white p-8 rounded-2xl border-2 border-[#2E7D32]/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#2E7D32] flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Free Shipping Offer</h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We offer <strong className="text-[#2E7D32]">FREE Shipping on all orders above ₹499</strong>, which is notified from time to time.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4 bg-gradient-to-br from-white to-[#F1F8F4] p-8 rounded-2xl border-2 border-[#2E7D32]/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2E7D32] to-[#1F5620] flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Cash on Delivery (COD)</h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We offer Cash on Delivery at additional charges which go to the logistic partner for COD
            processing. This convenience allows you to pay for your order upon delivery.
          </p>
        </motion.section>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-br from-[#2E7D32] to-[#1F5620] rounded-2xl text-white"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Track Your Order</h4>
              <p className="text-white/90 leading-relaxed">
                Once your order is shipped, you will receive a tracking number via email and SMS. 
                You can track your shipment in real-time through our logistics partner's portal.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </PolicyLayout>
  );
}
