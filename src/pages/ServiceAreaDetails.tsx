import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Users, Star, FileText, UserCheck, Shield, HeartHandshake, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import routeImage from "@/assets/bangladesh-to-mecca-route.jpg";

const ServiceAreaDetails = () => {
  const { district } = useParams<{ district: string }>();
  
  // Format district name for display
  const displayDistrict = district?.charAt(0).toUpperCase() + district?.slice(1);

  const packages = [
    {
      title: "Super Saver Umrah Package",
      category: "Super Saver - Shifting",
      price: "৳5,80,000",
      originalPrice: "৳6,30,000",
      duration: "35-40 Days",
      rating: 5,
      reviews: 109,
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop",
      features: [
        "Package 1: 18 Sep-20 Oct (33 Days)",
        "Hotel Makkah: Standard Hotel | Distance 700-900m", 
        "Hotel Madinah: Mar'azza in Madinah | Distance 300-400m",
        "Flights Up: Direct - SV/BG",
        "Food: Breakfast, Lunch & dinner"
      ]
    },
    {
      title: "Economy Umrah Package", 
      category: "Economy - Non Shifting",
      price: "৳6,50,000",
      originalPrice: "৳7,12,500",
      duration: "35-40 Days",
      rating: 5,
      reviews: 107,
      image: "https://images.unsplash.com/photo-1564769625392-651b530c4482?w=400&h=300&fit=crop",
      features: [
        "Package 1: 04 Oct-30 Oct (27 Days)",
        "Hotel Makkah: Hotel Adnan Maluq Al-Omari Equivalent Hotel | Distance 600-700m",
        "Hotel Madinah: Hotel Rehab (Hotel Share Basis) | Distance 450-750m", 
        "Flights Up: Direct - SV/BG",
        "Food: Breakfast, Lunch & dinner"
      ],
      isPopular: true
    },
    {
      title: "Standard Umrah Package",
      category: "Standard - Non Shifting", 
      price: "৳7,50,000",
      duration: "30-36 Days",
      rating: 5,
      reviews: 107,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      features: [
        "Package 1: 25 Sep-27 Oct (33 Days)",
        "Hotel Makkah: Three Star Hotel | Distance 300-400m",
        "Hotel Madinah: Three Star Hotel | Distance 200-300m",
        "Flights Up: Direct - SV/BG", 
        "Food: Breakfast, Lunch & dinner"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-white hover:text-golden transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-5xl font-bold text-white mb-6">
                  Best Umrah Hajj agency in {displayDistrict}, Bangladesh
                </h1>
                <p className="font-body text-lg text-white/80 mb-6 leading-relaxed">
                  Hijaz Hajj Umrah Ltd. is the best Umrah Hajj agency in {displayDistrict}, Bangladesh. We provide exceptional Umrah Hajj Packages (2025-2026) from {displayDistrict}, Bangladesh, for those who would like to complete Umrah correctly and efficiently from this area. We also offer pilgrims <span className="text-golden font-semibold">services</span> relating to <span className="text-golden font-semibold">Umrah</span>, including arranging for a <span className="text-golden font-semibold">visa</span>, <span className="text-golden font-semibold">booking accommodation</span>, help with <span className="text-golden font-semibold">transportation</span>, and <span className="text-golden font-semibold">guidance</span> during the journey.
                </p>
                <p className="font-body text-white/80 mb-8 leading-relaxed">
                  We have a great deal of experience and knowledge in this field. We have already led and helped many pilgrims from {displayDistrict} complete their Umrah. We've earned acknowledgment from the city for our outstanding services. If you prepare for Umrah, don't worry. Contact us and comfortably complete your Umrah.
                </p>
                <Link to="/about-us/contact-us">
                  <Button 
                    size="lg"
                    className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold"
                  >
                    Schedule a Meeting!
                  </Button>
                </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 shadow-elevated">
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="h-48 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564769625392-651b530c4482?w=300&h=200&fit=crop')" }}
                  ></div>
                  <div 
                    className="h-48 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=300&h=200&fit=crop')" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Packages Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-golden"></div>
              <div className="mx-4">
                <svg className="w-8 h-8 text-golden" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2 8 14l-6-4.8h7.6z"/>
                </svg>
              </div>
              <div className="w-16 h-1 bg-golden"></div>
            </div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Available Umrah Packages from {displayDistrict}
            </h2>
            <p className="font-body text-lg text-white/80 max-w-3xl mx-auto">
              Plan your Umrah and Ziyarah. Our upcoming Umrah packages will encompass a range of options, including economy and premium packages, designed to accommodate various budgets and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Budget-friendly Packages Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white mb-8 text-center">
              Budget-friendly Umrah Packages 2025 of Hijaz Hajj Umrah Ltd. from {displayDistrict} City
            </h2>
            <p className="font-body text-lg text-white/80 mb-6 leading-relaxed">
              Hijaz Hajj Umrah Ltd. renowned for its commitment to providing affordable and comprehensive pilgrimage experiences, offers budget-friendly Umrah packages customized specifically for pilgrims from {displayDistrict} City, with a focus on ensuring a smooth spiritual journey. These packages cover all essential aspects including transportation, accommodation, and guided tours, enabling pilgrims to fulfill their spiritual obligations without financial strain.
            </p>
            <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
              With careful attention to detail and a dedication to customer satisfaction, Hijaz Hajj Umrah Ltd. stands as a trusted choice for those seeking a fulfilling Umrah experience from {displayDistrict} City without compromising on quality or affordability.
            </p>
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold"
              >
                Our Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white mb-8">
              Overview of {displayDistrict}
            </h2>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              {displayDistrict} holds significant importance in Islamic heritage. The district is home to many historic mosques and Islamic sites, attracting devotees from across the region. Notable among them is the Shrine of Hazrat Kazi Quamrul Islam, a revered Sufi saint, which serves as a spiritual center for Muslims. Various mosques, both old and new, are scattered throughout the area, reflecting the district's deep-rooted Islamic traditions. {displayDistrict}'s religious landscape emphasizes its devotion to Islamic teachings and practices, making it a key spiritual hub in Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Requirements Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-elevated border-4 border-white/20">
                <div 
                  className="h-64 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop')" }}
                ></div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Umrah Hajj visa requirements for citizens of {displayDistrict}, Bangladesh
              </h2>
              <p className="font-body text-lg text-white/80 mb-6 leading-relaxed">
                Citizens of {displayDistrict}, Bangladesh <span className="text-golden font-semibold">planning to undertake the holy pilgrimage of Umrah</span> to Makkah must fulfill specific visa requirements. These requirements typically include:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "A valid passport with a minimum validity of six months",
                  "Complete the Umrah visa application form",
                  "Recent passport-sized photographs",
                  "Mahram (for women)",
                  "Marriage certificate copy (for a couple)",
                  "NID card/birth certificate"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/80">{requirement}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold"
              >
                Call for Booking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white mb-8">
              Why is Hijaz Hajj Umrah Ltd. your best choice for performing Umrah from {displayDistrict}?
            </h2>
            <p className="font-body text-lg text-white/80 mb-12 leading-relaxed">
              Hijaz Hajj Umrah Ltd. provides high-standard Umrah-related <span className="text-golden font-semibold">services</span> to pilgrims from {displayDistrict}, fulfilling promises and offering a pure Umrah <span className="text-golden font-semibold">experience</span> at an affordable cost. This is why pilgrims from {displayDistrict} prefer us. Below are some more reasons to choose us:
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Local expertise</h3>
                <p className="font-body text-white/80 leading-relaxed">
                  Hijaz Hajj Umrah Ltd. understand the unique needs and preferences of travelers from {displayDistrict}, offering customized services that are specific to this area.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Personalized assistance</h3>
                <p className="font-body text-white/80 leading-relaxed">
                  With a dedicated team fluent in the language and familiar with the culture of {displayDistrict}, travelers receive personalized assistance and support at every step of their <span className="text-golden font-semibold">Umrah journey</span>.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Convenience</h3>
                <p className="font-body text-white/80 leading-relaxed">
                  Hijaz Hajj Umrah Ltd. optimize the entire process, from visa arrangements to accommodation and transportation, ensuring a hassle-free experience for pilgrims from {displayDistrict}.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Trusted reputation</h3>
                <p className="font-body text-white/80 leading-relaxed">
                  Known for their reliability and integrity, Hijaz Hajj Umrah Ltd. has built a trusted reputation within {displayDistrict} City, providing peace of mind to travelers seeking a reputable Umrah service provider.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Affordable packages</h3>
                <p className="font-body text-white/80 leading-relaxed">
                  Offering competitive pricing without compromising on quality, Hijaz Hajj Umrah Ltd. presents affordable Umrah packages designed to suit the financial limitations of pilgrims from {displayDistrict}.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Customer satisfaction</h3>
                <p className="font-body text-white/80 leading-relaxed">
                  With a commitment to exceeding customer expectations, Hijaz Hajj Umrah Ltd. prioritizes customer satisfaction, ensuring that every pilgrim from the {displayDistrict} district returns home with valued memories of their Umrah journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white mb-12 text-center">
              Frequently asked questions and answers
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg font-semibold text-white hover:no-underline">
                  What types of Hajj and Umrah packages do you offer in {displayDistrict}?
                </AccordionTrigger>
                <AccordionContent className="font-body text-white/80 pb-4">
                  We offer a variety of Hajj and Umrah packages customized to meet different needs and budgets. These include economy, standard, and premium packages that cover transportation, accommodation, visa processing, and guided tours of holy sites.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg font-semibold text-white hover:no-underline">
                  Are your packages customizable?
                </AccordionTrigger>
                <AccordionContent className="font-body text-white/80 pb-4">
                  Yes, we understand that every pilgrim has unique preferences and requirements. Our packages can be customized based on your travel dates, accommodation preferences, duration of stay, and budget constraints to ensure you have the most suitable experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg font-semibold text-white hover:no-underline">
                  What services are included in your Hajj and Umrah packages?
                </AccordionTrigger>
                <AccordionContent className="font-body text-white/80 pb-4">
                  Our comprehensive packages include visa processing, round-trip flights, accommodation in Makkah and Madinah, local transportation, guided religious tours, 24/7 customer support, and assistance with religious rituals throughout your journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg font-semibold text-white hover:no-underline">
                  What documents are required for Hajj and Umrah?
                </AccordionTrigger>
                <AccordionContent className="font-body text-white/80 pb-4">
                  Required documents include a valid passport with at least 6 months validity, completed visa application forms, recent passport-sized photographs, medical certificates, marriage certificates (for couples), and proof of mahram relationship (for women).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg font-semibold text-white hover:no-underline">
                  Why should I choose Hijaz Hajj Umrah Ltd. for my pilgrimage?
                </AccordionTrigger>
                <AccordionContent className="font-body text-white/80 pb-4">
                  We offer personalized service with local expertise, competitive pricing, comprehensive packages, experienced guides, 24/7 support, and a proven track record of satisfied customers. Our commitment to excellence ensures your spiritual journey is both memorable and hassle-free.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-jade">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Hajj pre-registration is going on - 2026
          </h2>
          <h3 className="font-display text-2xl font-semibold text-white mb-8">
            Are you planning for Hajj in 2026?
          </h3>
          <p className="font-body text-lg text-white mb-6">
            <span className="text-golden font-semibold">Hajj pre-registration</span> for 2026 is now open! Ensure your spot for this spiritual journey by completing your pre-registration today.
          </p>
          <p className="font-body text-white mb-8">
            Visit our office for more details and to begin your Hajj preparations with us. Don't miss this opportunity.
          </p>
          <Link to="/about-us/contact-us">
            <Button 
              size="lg"
              className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold"
            >
              Register now!
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-sapphire">
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
                    <Link to="/about-us/contact-us">
                      <Button 
                        size="lg"
                        className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold"
                      >
                        Schedule Consultation
                      </Button>
                    </Link>
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