import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { contactService } from "@/services";
import type { ContactFormData } from "@/services";

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    comments: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phoneNumber || !formData.emailAddress) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Submit form data using the contact service
      const submittedData = await contactService.submitContactForm(formData);
      
      console.log('Form submitted successfully:', submittedData);
      
      toast({
        title: "Form Submitted Successfully!",
        description: "We will contact you soon. Thank you for your interest in our services.",
      });

      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        comments: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-golden transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl font-bold text-white mb-6">
              Request for Booking with InSha Hajj & Umrah Group, Bangladesh
            </h1>
            <p className="font-body text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              Request for the industry best expert guidance, personalized assistance, and seamless umrah arrangements for your spiritual journey to Haramain in Makkah and Madinah.
            </p>
          </div>

          <div className="flex justify-center max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 w-full">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-white text-center">
                  Contact Form
                </CardTitle>
                <p className="text-white/80 text-center font-body">
                  Fields with (*) are required.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-white font-body font-semibold mb-2">
                      Full Name<span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-golden"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-white font-body font-semibold mb-2">
                      Phone Number<span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-golden"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="emailAddress" className="block text-white font-body font-semibold mb-2">
                      Email Address<span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-golden"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-white font-body font-semibold mb-2">
                      Comments
                    </label>
                    <Textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-golden min-h-[120px]"
                      placeholder="Please share any specific requirements or questions..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-jade hover:bg-jade-dark text-white font-body font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Form'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;