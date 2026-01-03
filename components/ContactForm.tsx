import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.companyName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    toast.success("Enquiry submitted successfully! We'll contact you within 24 hours.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        requirement: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact",
      href: "mailto:contact",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXXX",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-[#F5F1E8] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6B9D3E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#4A7C2C]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-white rounded-full text-sm text-[#4A7C2C] border border-[#6B9D3E]/20">
            Get in Touch
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#2D5016]">
            Start Your{" "}
            <span className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] bg-clip-text text-transparent">
              B2B Partnership
            </span>
          </h2>
          <p className="text-lg text-[#4A7C2C]/80">
            Fill out the form below and our team will get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#2D5016] to-[#4A7C2C] rounded-3xl p-8 text-white">
              <h3 className="text-2xl mb-4">Contact Information</h3>
              <p className="text-white/80 mb-8">
                Reach out to us directly or fill out the form. We're here to help your business grow.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-white hover:text-[#B4D88C] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-sm text-white/70 mb-2">Business Hours</div>
                <div className="text-white">Monday - Saturday: 9:00 AM - 6:00 PM IST</div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-2xl p-6 border border-[#6B9D3E]/20 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[#2D5016] mb-1">Trusted by 100+ Businesses</div>
                  <div className="text-sm text-[#4A7C2C]/70">Join our growing network</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-[#6B9D3E]/20">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl text-[#2D5016] mb-3">Thank You!</h3>
                  <p className="text-[#4A7C2C]/80">
                    Your enquiry has been submitted successfully. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      className="border-[#6B9D3E]/30 focus:border-[#4A7C2C] rounded-xl"
                      required
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      placeholder="Your Company Pvt. Ltd."
                      value={formData.companyName}
                      onChange={(e) => handleChange("companyName", e.target.value)}
                      className="border-[#6B9D3E]/30 focus:border-[#4A7C2C] rounded-xl"
                      required
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="border-[#6B9D3E]/30 focus:border-[#4A7C2C] rounded-xl"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="border-[#6B9D3E]/30 focus:border-[#4A7C2C] rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Business Requirement */}
                  <div className="space-y-2">
                    <Label htmlFor="requirement">Business Requirement</Label>
                    <Select value={formData.requirement} onValueChange={(value) => handleChange("requirement", value)}>
                      <SelectTrigger className="border-[#6B9D3E]/30 focus:border-[#4A7C2C] rounded-xl">
                        <SelectValue placeholder="Select your requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bulk-supply">Bulk Supply</SelectItem>
                        <SelectItem value="private-label">Private Label</SelectItem>
                        <SelectItem value="export">Export</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, expected quantities, delivery location, etc."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="border-[#6B9D3E]/30 focus:border-[#4A7C2C] rounded-xl min-h-[120px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] hover:from-[#3D6623] hover:to-[#5A8C2F] text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit Enquiry
                  </Button>

                  <p className="text-xs text-center text-[#4A7C2C]/60">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
