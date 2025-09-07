import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import routeImage from "@/assets/bangladesh-to-mecca-route.jpg";

const ServiceAreaDetails = () => {
  const { district } = useParams<{ district: string }>();
  
  // Format district name for display
  const displayDistrict = district?.charAt(0).toUpperCase() + district?.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-sapphire">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-golden transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="font-display text-5xl font-bold text-white mb-4">
              Hajj & Umrah Services in {displayDistrict}
            </h1>
            <p className="font-body text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner for holy pilgrimage from {displayDistrict} to the sacred lands of Makkah and Madinah
            </p>
          </div>
        </div>
      </section>

      {/* Route Visualization */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-sapphire mb-4">
              Your Journey from {displayDistrict} to Makkah
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Experience a seamless and spiritually enriching journey from {displayDistrict} to the holy cities
            </p>
          </div>

          <div className="relative">
            <img 
              src={routeImage}
              alt={`Route from ${displayDistrict} to Mecca`}
              className="w-full h-96 object-cover rounded-2xl shadow-elevated"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sapphire/80 to-transparent rounded-2xl flex items-end">
              <div className="p-8 text-white w-full">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {displayDistrict} → Dhaka → Jeddah → Makkah
                </h3>
                <p className="font-body text-lg">
                  Comfortable transportation and premium airline services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-golden mb-12">
            Our Services in {displayDistrict}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-elevated border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-golden" />
                </div>
                <h3 className="font-display text-xl font-bold text-sapphire mb-3">
                  Local Consultation
                </h3>
                <p className="font-body text-gray-600">
                  Meet with our experienced agents in {displayDistrict} for personalized pilgrimage planning
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-golden" />
                </div>
                <h3 className="font-display text-xl font-bold text-sapphire mb-3">
                  Transportation from {displayDistrict}
                </h3>
                <p className="font-body text-gray-600">
                  Comfortable pickup and drop-off services from your location to Dhaka airport
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-elevated border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-golden" />
                </div>
                <h3 className="font-display text-xl font-bold text-sapphire mb-3">
                  24/7 Support
                </h3>
                <p className="font-body text-gray-600">
                  Round-the-clock assistance from our {displayDistrict} office throughout your journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-sapphire">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Contact Our {displayDistrict} Office
            </h2>
            <p className="font-body text-xl text-white/90">
              Get in touch with our local representatives for personalized assistance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-elevated border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-sapphire mb-6">
                      Insha Hajj Umrah - {displayDistrict} Branch
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-golden mr-3" />
                        <span className="font-body text-gray-600">
                          {displayDistrict} City Center, Bangladesh
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-golden mr-3" />
                        <span className="font-body text-gray-600">
                          +88 01XXX-XXXXXX
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-golden mr-3" />
                        <span className="font-body text-gray-600">
                          {displayDistrict?.toLowerCase()}@inshahajj.com
                        </span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-golden mr-3 mt-1" />
                        <div className="font-body text-gray-600">
                          <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                          <p>Friday: 2:00 PM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h4 className="font-display text-xl font-bold text-sapphire mb-4">
                      Ready to Start Your Journey?
                    </h4>
                    <p className="font-body text-gray-600 mb-6">
                      Book a consultation with our {displayDistrict} team today
                    </p>
                    <Button 
                      size="lg"
                      className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold"
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAreaDetails;