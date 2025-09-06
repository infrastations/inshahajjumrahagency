import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PackageCard from '@/components/PackageCard';
import ConsultantCard from '@/components/ConsultantCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, MapPin, Clock, Plane, Star, PlayCircle, Map, Phone } from 'lucide-react';

const Index = () => {
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

  const consultants = [
    {
      name: "Dr. Muhammad Tazammol Hoque",
      title: "Associate Professor",
      department: "Dept. of Islamic Studies, Jagannath University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
    },
    {
      name: "Dr. Muhammad Saleh Uddin", 
      title: "Associate Professor",
      department: "Dept. of Islamic Studies, Jagannath University", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop"
    },
    {
      name: "Dr. Muhammad Ahsan Ullah",
      title: "Associate Professor", 
      department: "Dept. of Islamic Studies, Jagannath University",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=400&fit=crop"
    },
    {
      name: "Tareque Bin Atique",
      title: "Associate Professor",
      department: "Dept. of Islamic Studies, Jagannath University",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop"
    },
    {
      name: "Shaikh Mijanur Rahman",
      title: "B.A (hons), M.A (DU) Imam & Khatib", 
      department: "Ashford Mosque, England",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop"
    }
  ];

  const keyHighlights = [
    { number: "120+", title: "Umrah packages", subtitle: "Provided in last 2 year" },
    { number: "1000+", title: "Customers", subtitle: "We served" },  
    { number: "20+", title: "Consultants", subtitle: "Worldwide" }
  ];

  const serviceAreas = [
    "Bagerhat", "Bandarban", "Barguna", "Barisal", "Bhola", "Bogra", "Brahmanbaria", "Chandpur",
    "Chittagong", "Chuadanga", "Cox's Bazar", "Cumilla"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Packages Section */}
      <section className="py-20 bg-jade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 border-2 border-golden rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-golden rounded-full"></div>
              </div>
            </div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Popular Hajj Packages 2026
            </h2>
            <p className="font-body text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Our popular Hajj packages for 2026 have been meticulously crafted to ensure a seamless and memorable journey. We 
              prioritize our member's comfort, safety, and well-being throughout their Hajj pilgrimage, providing a worry-free experience.
            </p>
            <Button 
              variant="outline" 
              className="mt-8 border-golden text-golden hover:bg-golden hover:text-sapphire font-body font-semibold"
            >
              View All Packages
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-1 bg-golden"></div>
              <div className="mx-4">
                <svg className="w-8 h-8 text-golden" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2 8 14l-6-4.8h7.6z"/>
                </svg>
              </div>
              <div className="w-16 h-1 bg-golden"></div>
            </div>
            <h2 className="font-display text-4xl font-bold text-sapphire mb-6">
              Key Highlights: Hijaz Hajj Umrah Ltd.
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
              With a steadfast commitment to <span className="text-sapphire font-semibold">excellence</span>, 
              Hijaz Hajj Umrah Ltd. has achieved remarkable milestones in serving the pilgrims' community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {index === 0 && <MapPin className="w-8 h-8 text-sapphire mr-4" />}
                  {index === 1 && <Users className="w-8 h-8 text-sapphire mr-4" />}
                  {index === 2 && <Star className="w-8 h-8 text-sapphire mr-4" />}
                  <span className="font-display text-5xl font-bold text-sapphire">{highlight.number}</span>
                </div>
                <h3 className="font-body text-xl font-semibold text-sapphire mb-2">{highlight.title}</h3>
                <p className="font-body text-muted-foreground">{highlight.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
            <div className="mb-8 lg:mb-0">
              <h2 className="font-display text-4xl font-bold text-sapphire mb-6">
                Our distinguished Shariah consultants
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl">
                Our <span className="text-jade font-semibold">Shariah consultants</span> are esteemed scholars well-versed in the teachings of Islam and possess a deep knowledge of the 
                Hajj and Umrah rituals.
              </p>
            </div>
            <Button className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold">
              View All Consultants
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultants.slice(0, 3).map((consultant, index) => (
              <ConsultantCard key={index} {...consultant} />
            ))}
          </div>

          {consultants.length > 3 && (
            <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
              {consultants.slice(3).map((consultant, index) => (
                <ConsultantCard key={index + 3} {...consultant} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Customized Packages */}
      <section className="py-20 bg-gradient-jade relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/25 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold text-white mb-8">
            Customized Umrah packages from Bangladesh
          </h2>
          <p className="font-body text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            We specialize in creating packages that are customized to your needs.
          </p>
          <p className="font-body text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Allow us to offer you a personalized Umrah experience tailored to your travel dates, 
            budget, and hotel preferences.
          </p>
          <Button 
            size="lg"
            className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold px-8 py-6 text-lg"
          >
            Start Customization
          </Button>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 border-2 border-golden rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-golden rounded-full"></div>
                </div>
              </div>
              <h2 className="font-display text-4xl font-bold text-sapphire mb-8">
                Video tutorials on Umrah journey
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                We offer <span className="text-sapphire font-semibold">informative and engaging video tutorials</span> that serve as a valuable resource in 
                preparing for this sacred pilgrimage.
              </p>
              <Button className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold">
                Our Umrah Guides
              </Button>
            </div>

            <div className="lg:w-1/2 grid md:grid-cols-2 gap-6">
              <div className="relative group cursor-pointer">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg relative overflow-hidden"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=300&fit=crop')" }}
                >
                  <div className="absolute inset-0 bg-sapphire/30 group-hover:bg-sapphire/50 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-golden/90 rounded-full flex items-center justify-center">
                      <PlayCircle className="w-8 h-8 text-sapphire" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-sapphire/90 text-white px-3 py-1 rounded text-sm font-body">
                      Watch Video
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg relative overflow-hidden"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=300&fit=crop')" }}
                >
                  <div className="absolute inset-0 bg-sapphire/30 group-hover:bg-sapphire/50 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-golden/90 rounded-full flex items-center justify-center">
                      <PlayCircle className="w-8 h-8 text-sapphire" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-sapphire/90 text-white px-3 py-1 rounded text-sm font-body">
                      Watch Video
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-cream relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&h=600&fit=crop')" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-sapphire mb-8">
              Client testimonials
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-jade text-white shadow-elevated">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div 
                    className="w-16 h-16 bg-cover bg-center rounded-full flex-shrink-0"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop')" }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-body font-semibold text-lg">Monir Hossain Noyon</h4>
                        <p className="text-sm text-white/80 font-body">August, 2022</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                        ))}
                      </div>
                    </div>
                    <p className="font-body text-white/90 leading-relaxed">
                      One of the best service. They are very well organized and friendly. Highly recommend...
                      <span className="text-golden cursor-pointer ml-2">read more</span>
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-white/60 font-body">Google</span>
                      <div className="flex items-center space-x-4">
                        <button className="text-white/60 hover:text-white">←</button>
                        <button className="text-white/60 hover:text-white">→</button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hijaz Service Area */}
      <section className="py-20 bg-jade-light relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-elevated">
              <h2 className="font-display text-3xl font-bold text-sapphire mb-6">
                Hijaz Service Area
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Find your nearby Hajj & Umrah agency associated with Hijaz Hajj Umrah Ltd. Bangladesh. 
                Identify the trusted Umrah agents in your area and get in touch with them to facilitate 
                your next holy journey to Makkah and Madina.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-jade" />
                    <span className="font-body text-sm text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl relative overflow-hidden"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-sapphire/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between text-white">
                      <span className="font-body font-semibold">DHAKA</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-golden rounded-full flex items-center justify-center">
                          <Plane className="w-3 h-3 text-sapphire" />
                        </div>
                        <span className="font-body">MECCA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply for Visa */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-sapphire mb-8">
            Apply for an Umrah visa and experience the hassle-free journey to the city of Makkah.
          </h2>
          <Button 
            size="lg"
            className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold px-8 py-6 text-lg"
          >
            Request for Umrah Booking Online
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;