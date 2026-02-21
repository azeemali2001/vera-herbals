import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { PageHeader } from "../components/layout/PageHeader";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        toast.success("Enquiry submitted successfully! We'll contact you within 24 hours.");
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
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="section-block">
      <PageHeader
        eyebrow="Let’s connect"
        title="Contact Us"
        description="Get in touch with us for product inquiries, bulk orders, and partnership opportunities. We’re here to support your wellness journey with fast and reliable assistance."
      />

      <div className="app-container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <aside className="lg:col-span-2 rounded-2xl border border-[#dbe5d1] bg-[#f8fbf3] p-7 shadow-soft">
            <div className="mb-6 overflow-hidden rounded-2xl border border-[#dbe5d1]">
              <img src="ai/contact-hero.svg" alt="Customer support and communication" className="h-40 w-full object-cover" />
            </div>
            <h2 className="text-2xl font-semibold text-earth mb-3">Contact Information</h2>
            <p className="text-earth-light leading-relaxed mb-8">
              Reach out for personalized consultations, product support, and wholesale partnership discussions.
            </p>

            <div className="space-y-4">
              <InfoRow icon={<Mail className="w-5 h-5 text-sage" />} label="Email" value="info@veraherbals.com" />
              <InfoRow icon={<Phone className="w-5 h-5 text-sage" />} label="Phone" value="+1 (555) 123-4567" />
              <InfoRow icon={<MapPin className="w-5 h-5 text-sage" />} label="Address" value="123 Herbal Way, Wellness City, WC 12345" />
            </div>

            <div className="mt-8 pt-6 border-t border-[#dbe5d1]">
              <h3 className="text-base font-semibold text-earth mb-2">Business Hours</h3>
              <div className="text-sm text-earth-light space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3 rounded-2xl border border-[#dbe5d1] bg-white p-7 md:p-8 shadow-card">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-earth">Thank You!</h3>
                <p className="text-earth-light">Your enquiry has been submitted successfully. We’ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name *</Label>
                  <Input id="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">Company Name</Label>
                    <Input id="companyName" placeholder="Your company name" value={formData.companyName} onChange={(e) => handleChange("companyName", e.target.value)} className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requirement" className="text-sm font-medium text-gray-700">Business Requirement</Label>
                    <Select value={formData.requirement} onValueChange={(value) => handleChange("requirement", value)}>
                      <SelectTrigger className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg">
                        <SelectValue placeholder="Select requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bulk-supply">Bulk Supply</SelectItem>
                        <SelectItem value="private-label">Private Label</SelectItem>
                        <SelectItem value="export">Export</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your requirements, expected quantities, and delivery location." value={formData.message} onChange={(e) => handleChange("message", e.target.value)} className="min-h-[120px] border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg resize-none" />
                </div>

                <Button type="submit" className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Submit Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">{icon}</div>
      <div>
        <p className="text-sm font-medium text-earth">{label}</p>
        <p className="text-sm text-earth-light">{value}</p>
      </div>
    </div>
  );
}
