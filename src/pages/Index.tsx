import aeroplane from '@/assets/aeroplane.png';
import CompanyStats from '@/components/CompanyStats';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import SectionSeparator from '@/components/SectionSeparator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronUp, MapPin, Plane, PlayCircle, Star } from 'lucide-react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import ConsultantsSection from './Index/ConsultantsSection';
import HajjPackagesSection from './Index/HajjPackagesSection';
import KeyHighlightsSection from './Index/KeyHighlightsSection';
import UmrahPackagesSection from './Index/UmrahPackagesSection';

import type { Consultant, KeyHighlight, Package, Testimonial, UmrahPackage } from "@/services";
import { packageService } from "@/services";
// Note: Replace with your actual Mapbox access token
// You can get one for free at https://account.mapbox.com/
mapboxgl.accessToken = "pk.eyJ1IjoibWRyYWtpYnRyb2ZkZXIiLCJhIjoiY21maDJwOWV5MDF3MTJpczhlcXJmYXNsdSJ9.2Ot-AccNp9pold_3I8V3NQ";

const Index = () => {
  // State for data from services
  const [packages, setPackages] = useState<Package[]>([]);
  const [umrahPackages, setUmrahPackages] = useState<UmrahPackage[]>([]);
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [keyHighlights, setKeyHighlights] = useState<KeyHighlight[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [serviceAreas, setServiceAreas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load all data from services on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [
          hajjPackagesData,
          umrahPackagesData,
          consultantsData,
          keyHighlightsData,
          testimonialsData,
          serviceAreasData
        ] = await Promise.all([
          packageService.getHajjPackages(),
          packageService.getUmrahPackages(),
          packageService.getConsultants(),
          packageService.getKeyHighlights(),
          packageService.getTestimonials(),
          packageService.getServiceAreas()
        ]);

        setPackages(hajjPackagesData);
        setUmrahPackages(umrahPackagesData);
        setConsultants(consultantsData);
        setKeyHighlights(keyHighlightsData);
        setTestimonials(testimonialsData);
        setServiceAreas(serviceAreasData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Testimonial navigation state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  // Back to top button state
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Testimonial navigation functions
  const nextTestimonial = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentTestimonialIndex((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevTestimonial = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentTestimonialIndex((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  // Back to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section (approximately 600px)
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const mapContainer = useRef(null);
  const map = useRef(null);
  const animationRef = useRef(null);
  const [mapError, setMapError] = useState(false);

  // Dhaka to Mecca coordinates
  const route = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [90.4125, 23.8103], // Dhaka
        [39.8579, 21.3891], // Mecca
      ],
    },
  };

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize only once
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12", // Colorful satellite map
        center: [65, 30],
        zoom: 2,
        pitch: 45,
        bearing: -20,
      });

      map.current.on("load", () => {
        // Add route line
        map.current.addSource("route", {
          type: "geojson",
          data: route,
        });

        map.current.addLayer({
          id: "route-line",
          type: "line",
          source: "route",
          paint: {
            "line-color": "#FFD700", // Golden color to match the theme
            "line-width": 6,
            "line-blur": 1,
            "line-opacity": 0.8,
          },
        });

        // Add city markers
        map.current.addSource("cities", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [90.4125, 23.8103], // Dhaka
                },
                properties: {
                  title: "Dhaka",
                  description: "Departure: Bangladesh"
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [39.8579, 21.3891], // Mecca
                },
                properties: {
                  title: "Mecca",
                  description: "Destination: Saudi Arabia"
                }
              }
            ]
          }
        });

        map.current.addLayer({
          id: "cities",
          type: "circle",
          source: "cities",
          paint: {
            "circle-radius": 8,
            "circle-color": "#FFD700",
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff"
          }
        });

        // Add city labels
        map.current.addLayer({
          id: "city-labels",
          type: "symbol",
          source: "cities",
          layout: {
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-size": 12,
            "text-offset": [0, -2],
            "text-anchor": "bottom"
          },
          paint: {
            "text-color": "#ffffff",
            "text-halo-color": "#000000",
            "text-halo-width": 1
          }
        });

        // Add airplane symbol with local airplane icon from assets
        map.current.loadImage(
          aeroplane, // Use imported local airplane icon from assets
          (error, image) => {
            if (error) {
              console.warn("Failed to load airplane icon:", error);
              return;
            }
            if (!map.current.hasImage("plane")) {
              map.current.addImage("plane", image);
            }
            map.current.addSource("plane-point", {
              type: "geojson",
              data: {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: route.geometry.coordinates[0],
                },
              },
            });

            map.current.addLayer({
              id: "plane",
              type: "symbol",
              source: "plane-point",
              layout: {
                "icon-image": "plane",
                "icon-size": 0.1, // User's preferred size for good visibility
                "icon-rotate": 0, // Better angle for the route direction
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
              },
            });

            // Animate airplane along the route
            let progress = 0;
            function animate() {
              progress += 0.001;
              if (progress > 1) progress = 0;

              const line = route.geometry.coordinates;
              const lng =
                line[0][0] + (line[1][0] - line[0][0]) * progress;
              const lat =
                line[0][1] + (line[1][1] - line[0][1]) * progress;

              if (map.current && map.current.getSource("plane-point")) {
                map.current.getSource("plane-point").setData({
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [lng, lat],
                  },
                });
              }

              animationRef.current = requestAnimationFrame(animate);
            }
            animate();
          }
        );
      });

      map.current.on("error", (e) => {
        console.error("Mapbox error:", e);
        setMapError(true);
      });

    } catch (error) {
      console.error("Failed to initialize map:", error);
      setMapError(true);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SectionSeparator />
      <CompanyStats />
      <SectionSeparator />

      <UmrahPackagesSection umrahPackages={umrahPackages} isLoading={isLoading} />
      <SectionSeparator />

      <ConsultantsSection consultants={consultants} isLoading={isLoading} />
      <SectionSeparator />

      <HajjPackagesSection packages={packages} isLoading={isLoading} />
      <SectionSeparator />

      <KeyHighlightsSection keyHighlights={keyHighlights} isLoading={isLoading} />
      <SectionSeparator />

      {/* Customized Packages */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/25 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold text-golden mb-8">
            Customized Umrah packages from Bangladesh
          </h2>
          <p className="font-body text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
            We specialize in creating packages that are customized to your needs.
          </p>
          <p className="font-body text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Allow us to offer you a personalized Umrah experience tailored to your travel dates, 
            budget, and hotel preferences.
          </p>
          <Link to="/about-us/contact-us">
            <Button 
              size="lg"
              className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold px-8 py-6 text-lg"
            >
              Start Customization
            </Button>
          </Link>
        </div>
      </section>
      <SectionSeparator />

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
              <h2 className="font-display text-4xl font-bold text-golden mb-8">
                Video tutorials on Umrah journey
              </h2>
              <p className="font-body text-lg text-white/80 leading-relaxed mb-8">
                We offer <span className="text-[#D4AF37] font-semibold">informative and engaging video tutorials</span> that serve as a valuable resource in 
                preparing for this sacred pilgrimage.
              </p>
              <Button className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold">
                Our Umrah Guides
              </Button>
            </div>

            <div className="lg:w-1/2 grid md:grid-cols-2 gap-6">
              <a href="https://www.youtube.com/watch?v=W-yRSRvKgNQ" target="_blank" className="block">
                <div className="relative group cursor-pointer">
                  <div 
                    className="h-48 bg-cover bg-center rounded-lg relative overflow-hidden"
                    style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1676929358405-7b65c955630d?w=400&h=300&fit=crop')" }}
                  >
                    <div className="absolute inset-0 bg-sapphire/30 group-hover:bg-sapphire/50 transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-golden/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
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
              </a>

              <a href="https://www.youtube.com/watch?v=I_gEpAXJIfA" target="_blank" className="block">
                <div className="relative group cursor-pointer">
                  <div 
                    className="h-48 bg-cover bg-center rounded-lg relative overflow-hidden"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591004272853-1462c050dca8?w=400&h=300&fit=crop')" }}
                  >
                    <div className="absolute inset-0 bg-sapphire/30 group-hover:bg-sapphire/50 transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-golden/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
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
              </a>
            </div>
          </div>
        </div>
      </section>
      <SectionSeparator />

      {/* Client Testimonials */}
      <section className="py-20 bg-background relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1676929358405-7b65c955630d?w=400&h=300&fit=crop')" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-golden mb-8">
              Client testimonials
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {testimonials && testimonials.length > 0 && testimonials[currentTestimonialIndex] ? (
              <Card className="bg-jade text-white shadow-elevated">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div 
                      className="w-16 h-16 bg-cover bg-center rounded-full flex-shrink-0"
                      style={{ backgroundImage: `url('${testimonials[currentTestimonialIndex]?.avatar || '/placeholder-avatar.jpg'}')` }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-body font-semibold text-lg">{testimonials[currentTestimonialIndex]?.name || 'Anonymous'}</h4>
                          <p className="text-sm text-white/80 font-body">{testimonials[currentTestimonialIndex]?.date || ''}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonials[currentTestimonialIndex]?.rating || 0)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                          ))}
                        </div>
                      </div>
                      <p className="font-body text-white/90 leading-relaxed">
                        {testimonials[currentTestimonialIndex]?.review && testimonials[currentTestimonialIndex].review.length > 150 
                          ? `${testimonials[currentTestimonialIndex].review.substring(0, 150)}...` 
                          : testimonials[currentTestimonialIndex]?.review || 'No review available'}
                        {testimonials[currentTestimonialIndex]?.review && testimonials[currentTestimonialIndex].review.length > 150 && (
                          <span className="text-golden cursor-pointer ml-2">read more</span>
                        )}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-white/60 font-body">{testimonials[currentTestimonialIndex]?.platform || 'Review'}</span>
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={prevTestimonial}
                            className="text-white/60 hover:text-white transition-colors duration-200 text-xl font-bold"
                            aria-label="Previous testimonial"
                          >
                            ←
                          </button>
                          <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentTestimonialIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                  index === currentTestimonialIndex ? 'bg-golden' : 'bg-white/30'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                              />
                            ))}
                          </div>
                          <button 
                            onClick={nextTestimonial}
                            className="text-white/60 hover:text-white transition-colors duration-200 text-xl font-bold"
                            aria-label="Next testimonial"
                          >
                            →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-jade text-white shadow-elevated">
                <CardContent className="p-8 text-center">
                  <div className="text-white/60 font-body text-lg">
                    {isLoading ? 'Loading testimonials...' : 'No testimonials available'}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
      <SectionSeparator />

      {/* Insha Service Area */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-elevated">
              <h2 className="font-display text-3xl font-bold text-[#D4AF37] mb-6">
                InSha Service Area
              </h2>
              <p className="font-body text-lg text-gray-600 mb-8">
                Find your nearby Hajj & Umrah agency associated with InSha Hajj & Umrah Group Bangladesh. 
                Identify the trusted Umrah agents in your area and get in touch with them to facilitate 
                your next holy journey to Makkah and Madina.
              </p>

              <ScrollArea className="h-80 pr-4">
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas && serviceAreas.length > 0 ? serviceAreas.map((area, index) => (
                    <Link
                      key={index}
                      to={`/service-area/${area.toLowerCase()}`}
                      className="flex items-center space-x-2 p-2 hover:bg-golden rounded-lg transition-colors cursor-pointer group"
                    >
                      <MapPin className="w-4 h-4 text-[#5C8D89] group-hover:text-white flex-shrink-0 transition-colors" />
                      <span className="font-body text-sm text-gray-700 group-hover:text-white group-hover:underline transition-colors">{area}</span>
                    </Link>
                  )) : (
                    <div className="col-span-2 text-center py-4">
                      <div className="text-gray-500 font-body text-sm">
                        {isLoading ? 'Loading service areas...' : 'No service areas available'}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>

            <div className="relative">
              {mapError ? (
                // Fallback content when map fails to load
                <div className="w-full h-[500px] rounded-2xl shadow-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-repeat" style={{
                      backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"m0 40l40-40h-40v40zm0 0l40-40h-40v40z\"/%3E%3C/g%3E%3C/svg%3E')"
                    }}></div>
                  </div>
                  <div className="text-center z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <Plane className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">Journey Route</h3>
                    <p className="text-white/80 mb-4">From Bangladesh to Mecca</p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <MapPin className="w-5 h-5 text-white mx-auto mb-1" />
                        <span className="text-white text-sm">Dhaka</span>
                      </div>
                      <div className="w-16 h-px bg-white/50 relative">
                        <Plane className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                      <div className="text-center">
                        <MapPin className="w-5 h-5 text-white mx-auto mb-1" />
                        <span className="text-white text-sm">Mecca</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  ref={mapContainer}
                  className="w-full h-[500px] rounded-2xl shadow-lg"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <SectionSeparator />

      {/* Apply for Visa */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-golden mb-8">
            Apply for an Umrah visa and experience the hassle-free journey to the city of Makkah.
          </h2>
          <Link to="/about-us/contact-us">
            <Button 
              size="lg"
              className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold px-8 py-6 text-lg"
            >
              Request for Umrah Booking Online
            </Button>
          </Link>
        </div>
      </section>
      <SectionSeparator />

      <Footer />
      
      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-golden hover:bg-golden-dark text-sapphire rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;