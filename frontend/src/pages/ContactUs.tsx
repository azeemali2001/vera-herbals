import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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

    // Basic validation
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
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for inquiries about our products, bulk orders, or partnership opportunities.
              We're here to support your wellness journey.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left Column - Contact Information */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Ready to experience the power of nature's finest herbs? Reach out to us for personalized
                      consultations, bulk orders, or partnership opportunities.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">info@veraherbals.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">123 Herbal Way, Wellness City, WC 12345</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                      <p className="text-gray-600">
                        Your enquiry has been submitted successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Row 1: Full Name */}
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg"
                          required
                        />
                      </div>

                      {/* Row 2: Company Name & Phone Number */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                            Company Name
                          </Label>
                          <Input
                            id="companyName"
                            placeholder="Your company name"
                            value={formData.companyName}
                            onChange={(e) => handleChange("companyName", e.target.value)}
                            className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg"
                          />
                        </div>
                      </div>

                      {/* Row 3: Email & Business Requirement */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="requirement" className="text-sm font-medium text-gray-700">
                            Business Requirement
                          </Label>
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

                      {/* Row 4: Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your requirements, expected quantities, delivery location, etc."
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          className="min-h-[120px] border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg resize-none"
                        />
                      </div>

                      {/* Row 5: Submit Button */}
                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        Submit Enquiry
                      </Button>

                      <p className="text-xs text-center text-gray-500">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
}