import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CompanyStats from '@/components/CompanyStats';
import PackageCard from '@/components/PackageCard';
import ConsultantCard from '@/components/ConsultantCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MapPin, Clock, Plane, Star, PlayCircle, Map, Phone, ChevronUp } from 'lucide-react';
import muslimScholar1 from '@/assets/muslim-scholar-1.jpg';
import muslimScholar2 from '@/assets/muslim-scholar-2.jpg';
import muslimScholar3 from '@/assets/muslim-scholar-3.jpg';
import muslimScholar4 from '@/assets/muslim-scholar-4.jpg';
import muslimScholar5 from '@/assets/muslim-scholar-5.jpg';
import kaabaTawaf from '@/assets/kaaba-tawaf.jpg';
import madinahMosque from '@/assets/madinah-mosque.jpg';
import islamicMinarets from '@/assets/islamic-minarets.jpg';
import muzdalifahNight from '@/assets/muzdalifah-night.jpg';
import kaabaNight from '@/assets/kaaba-night.jpg';
import masjidAlHaramAerial from '@/assets/masjid-al-haram-aerial.jpg';
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { Badge as UIBadge } from '@/components/ui/badge';
import umrahPackagesData from "@/data/umrahPackages.json";
// Note: Replace with your actual Mapbox access token
// You can get one for free at https://account.mapbox.com/
mapboxgl.accessToken = "pk.eyJ1IjoibWRyYWtpYnRyb2ZkZXIiLCJhIjoiY21maDJwOWV5MDF3MTJpczhlcXJmYXNsdSJ9.2Ot-AccNp9pold_3I8V3NQ";

const Index = () => {
  const packages = [
    {
      title: "Super Saver - Shifting",
      category: "Super Saver - Shifting",
      price: "৳5,80,000",
      duration: "35-40 Days",
      rating: 4.99,
      reviews: 109,
      image: kaabaTawaf,
      hotelMakkah: "Hotel Ainan Maluq Al-Omari/Equivalent Hotel | Distance 600-700m.",
      hotelMadinah: "Mar'azza in Madinah/Similar Hotel | Distance 300-400m",
      flightsUp: "Direct - SV/BG",
      flightsDown: "Direct - SV/BG",
      food: "Breakfast, Lunch & dinner",
      specialServices: "Ziyara + Guide + Dae + Workshop"
    },
    {
      title: "Economy - Non Shifting", 
      category: "Economy - Non Shifting",
      price: "৳6,50,000",
      duration: "35-40 Days",
      rating: 4.99,
      reviews: 109,
      image: madinahMosque,
      hotelMakkah: "Hotel Adnan Maluq Al-Omari/Equivalent Hotel | Distance 600-700m.",
      hotelMadinah: "Mar'azza in Madinah | Distance 300-400m",
      flightsUp: "Direct - SV/BG",
      flightsDown: "Direct - SV/BG",
      food: "Breakfast, Lunch & dinner",
      specialServices: "Ziyara + Guide + Dae + Workshop",
      isPopular: true
    },
    {
      title: "Standard - Non Shifting",
      category: "Standard - Non Shifting", 
      price: "Starts from ৳7,50,000",
      duration: "30-36 Days",
      rating: 4.99,
      reviews: 109,
      image: islamicMinarets,
      hotelMakkah: "Three Star Hotel | Distance 300-400m",
      hotelMadinah: "Three Star Hotel | Distance 200-300m",
      flightsUp: "Direct - SV/BG",
      flightsDown: "Direct - SV/BG", 
      food: "Breakfast, Lunch & dinner",
      specialServices: "Ziyara + Guide + Dae + Workshop"
    },
    {
      title: "Premium - Shifting",
      category: "Premium - Shifting", 
      price: "৳8,50,000",
      duration: "20-25 Days",
      rating: 4.99,
      reviews: 109,
      image: muzdalifahNight,
      hotelMakkah: "Five Star Hotel | Distance 0-150m.",
      hotelMadinah: "Five Star Hotel | Distance 0-150m",
      flightsUp: "Direct - SV/BG",
      flightsDown: "Direct - SV/BG", 
      food: "Breakfast, Lunch & dinner",
      specialServices: "Ziyara + Guide + Dae + Workshop"
    },
    {
      title: "Luxury Non-Shifting",
      category: "Luxury Non-Shifting", 
      price: "৳13,50,000",
      duration: "18-21 Days",
      rating: 4.99,
      reviews: 109,
      image: kaabaNight,
      hotelMakkah: "The Clock Towers | Distance 0m.",
      hotelMadinah: "Anwar Al Madinah Movenpick/Similar Five star | Distance 0m.",
      flightsUp: "Direct - SV/BG",
      flightsDown: "Direct - SV/BG", 
      food: "Buffet Breakfast, Lunch, Evening Snacks & Dinner",
      specialServices: "Special Train, Ziyara + Guide + Dae"
    },
    {
      title: "VIP - Non Shifting",
      category: "VIP - Non Shifting", 
      price: "৳11,60,000",
      duration: "18-21 Days",
      rating: 4.99,
      reviews: 109,
      image: masjidAlHaramAerial,
      hotelMakkah: "Swissotel Al Maqam Makkah/Equivalent Hotel | Distance 0-150m.",
      hotelMadinah: "Anwar Al Madinah Movenpick/Equivalent Hotel | Distance 0-150m",
      flightsUp: "Direct - SV/BG",
      flightsDown: "Direct - SV/BG", 
      food: "Buffet Breakfast, Lunch, Evening Snacks & Dinner",
      specialServices: "Special Train, Ziyara + Guide + Dae"
    }
  ];

  const consultants = [
    {
      name: "Dr. Muhammad Tazammol Hoque",
      title: "Associate Professor",
      department: "Dept. of Islamic Studies, Jagannath University",
      image: muslimScholar1
    },
    {
      name: "Dr. Muhammad Saleh Uddin", 
      title: "Associate Professor",
      department: "Dept. of Islamic Studies, Jagannath University", 
      image: muslimScholar2
    },
    {
      name: "Dr. Muhammad Ahsan Ullah",
      title: "Associate Professor", 
      department: "Dept. of Islamic Studies, Jagannath University",
      image: muslimScholar3
    },
    {
      name: "Tareque Bin Atique",
      title: "Associate Professor",
      department: "Dept. of Islamic Studies, Jagannath University",
      image: muslimScholar4
    },
    {
      name: "Shaikh Mijanur Rahman",
      title: "B.A (hons), M.A (DU) Imam & Khatib", 
      department: "Ashford Mosque, England",
      image: muslimScholar5
    }
  ];

  const keyHighlights = [
    { number: "120+", title: "Umrah packages", subtitle: "Provided in last 2 year" },
    { number: "1000+", title: "Customers", subtitle: "We served" },  
    { number: "20+", title: "Consultants", subtitle: "Worldwide" }
  ];

  const serviceAreas = [
    // Dhaka Division
    "Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", 
    "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail",
    
    // Chittagong Division  
    "Chittagong", "Bandarban", "Brahmanbaria", "Chandpur", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", 
    "Lakshmipur", "Noakhali", "Rangamati",
    
    // Rajshahi Division
    "Rajshahi", "Bogura", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Sirajganj",
    
    // Khulna Division
    "Khulna", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", 
    "Narail", "Satkhira",
    
    // Barishal Division
    "Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur",
    
    // Sylhet Division
    "Sylhet", "Habiganj", "Moulvibazar", "Sunamganj",
    
    // Rangpur Division
    "Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon",
    
    // Mymensingh Division
    "Mymensingh", "Jamalpur", "Netrokona", "Sherpur"
  ];

  // Testimonials data from JSON format
  const testimonials = [
    {
      id: 1,
      name: "Monir Hossain Noyon",
      date: "August, 2022",
      rating: 5,
      review: "One of the best service. They are very well organized and friendly. Highly recommend for anyone planning their Hajj or Umrah journey. The team was professional and took care of everything.",
      platform: "Google",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Fatima Ahmed",
      date: "September, 2022",
      rating: 5,
      review: "Excellent service from start to finish. The accommodation was perfect, very close to Haram. The guides were knowledgeable and helpful throughout the journey. Alhamdulillah, it was a blessed experience.",
      platform: "Facebook",
      avatar: "https://images.unsplash.com/photo-1755278338891-e8d8481ff087?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Abdul Rahman Khan",
      date: "October, 2022",
      rating: 5,
      review: "Amazing experience with InSha Hajj & Umrah Group. The package was value for money and everything was well organized. The team helped us with visa processing and provided excellent guidance.",
      platform: "Google",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Khadija Begum",
      date: "November, 2022",
      rating: 5,
      review: "SubhanAllah! What a wonderful journey it was. InSha team made our Umrah very comfortable and hassle-free. The hotels were excellent and the food arrangements were perfect. May Allah bless them.",
      platform: "TripAdvisor",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  // Testimonial navigation state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  // Back to top button state
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Testimonial navigation functions
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
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

        // Add airplane symbol with local airplane icon
        map.current.loadImage(
          "/lovable-uploads/aeroplane.png", // Local airplane icon from public folder
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
                "icon-size": 0.1, // Larger size for better visibility
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
      <CompanyStats />

            {/* Available Umrah Packages from Bangladesh */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Available Umrah Packages from Bangladesh
            </h2>
            <p className="font-body text-lg text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Plan your Umrah and Ziyarah. Our upcoming Umrah packages will encompass a range of options, including economy and
              premium packages, designed to accommodate various budgets and preferences.
            </p>
            <Button 
              variant="outline" 
              className="bg-golden text-sapphire hover:bg-golden-dark font-body font-semibold px-6 py-3 rounded-full"
            >
              View All Packages
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {umrahPackagesData.availableUmrahPackages.map((packageData) => {
              // Map image names to actual imported images
              const getImageSrc = (imageName: string) => {
                switch (imageName) {
                  case 'kaabaTawaf':
                    return kaabaTawaf;
                  case 'madinahMosque':
                    return madinahMosque;
                  case 'islamicMinarets':
                    return islamicMinarets;
                  default:
                    return kaabaTawaf;
                }
              };

              return (
                <Card key={packageData.id} className="bg-white rounded-2xl shadow-elevated overflow-hidden">
                  <div className="relative">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${getImageSrc(packageData.image)})` }}
                    >
                      <div className="absolute top-4 left-4">
                      </div>
                      <div className="absolute top-4 right-4">
                        <UIBadge className={`${packageData.badge.color} font-semibold`}>
                          {packageData.badge.text}
                        </UIBadge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold text-sapphire mb-4">
                      {packageData.title}
                    </h3>
                    
                    <div className="space-y-3 text-sm mb-6">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-600">💰 Price</span>
                        <span className="text-sapphire font-bold">{packageData.price}</span>
                      </div>
                      
                      {packageData.packages.map((pkg, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="font-semibold text-gray-600">📅 {pkg.name}</span>
                          <span className="text-gray-700">{pkg.duration}</span>
                        </div>
                      ))}
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-600">🏨 Hotel Makkah</span>
                        <span className="text-gray-700">{packageData.details.hotelMakkah}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-600">🏨 Hotel Madinah</span>
                        <span className="text-gray-700">{packageData.details.hotelMadinah}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-600">✈️ Flights Up</span>
                        <span className="text-gray-700">{packageData.details.flightsUp}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-600">✈️ Flights Down</span>
                        <span className="text-gray-700">{packageData.details.flightsDown}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-600">🍽️ Food</span>
                        <span className="text-gray-700">{packageData.details.food}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-600">🎯 Special Services</span>
                        <span className="text-gray-700">{packageData.details.specialServices}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-golden hover:bg-golden-dark text-sapphire font-semibold mb-4">
                      {packageData.buttonText}
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                      ))}
                      <span className="ml-2 text-sm font-semibold">{packageData.rating} ({packageData.reviews} Reviews)</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
            <div className="mb-8 lg:mb-0">
              <h2 className="font-display text-4xl font-bold text-golden mb-6">
                Our distinguished Shariah consultants
              </h2>
              <p className="font-body text-lg text-white/80 max-w-2xl">
                Our <span className="text-[#D4AF37] font-semibold">Shariah consultants</span> are esteemed scholars well-versed in the teachings of Islam and possess a deep knowledge of the 
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

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 border-2 border-golden rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-golden rounded-full"></div>
              </div>
            </div>
            <h2 className="font-display text-4xl font-bold text-golden mb-6">
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
            <h2 className="font-display text-4xl font-bold text-golden mb-6">
              Key Highlights: InSha Hajj & Umrah Group
            </h2>
            <p className="font-body text-xl text-white/80 max-w-4xl mx-auto">
              With a steadfast commitment to <span className="text-[#D4AF37] font-semibold">excellence</span>, 
              InSha Hajj & Umrah Group has achieved remarkable milestones in serving the pilgrims' community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {index === 0 && <MapPin className="w-8 h-8 text-white mr-4" />}
                  {index === 1 && <Users className="w-8 h-8 text-white mr-4" />}
                  {index === 2 && <Star className="w-8 h-8 text-white mr-4" />}
                  <span className="font-display text-5xl font-bold text-golden">{highlight.number}</span>
                </div>
                <h3 className="font-body text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="font-body text-white/70">{highlight.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <Card className="bg-jade text-white shadow-elevated">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div 
                    className="w-16 h-16 bg-cover bg-center rounded-full flex-shrink-0"
                    style={{ backgroundImage: `url('${testimonials[currentTestimonialIndex].avatar}')` }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-body font-semibold text-lg">{testimonials[currentTestimonialIndex].name}</h4>
                        <p className="text-sm text-white/80 font-body">{testimonials[currentTestimonialIndex].date}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                        ))}
                      </div>
                    </div>
                    <p className="font-body text-white/90 leading-relaxed">
                      {testimonials[currentTestimonialIndex].review.length > 150 
                        ? `${testimonials[currentTestimonialIndex].review.substring(0, 150)}...` 
                        : testimonials[currentTestimonialIndex].review}
                      {testimonials[currentTestimonialIndex].review.length > 150 && (
                        <span className="text-golden cursor-pointer ml-2">read more</span>
                      )}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-white/60 font-body">{testimonials[currentTestimonialIndex].platform}</span>
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
          </div>
        </div>
      </section>

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
                  {serviceAreas.map((area, index) => (
                    <Link
                      key={index}
                      to={`/service-area/${area.toLowerCase()}`}
                      className="flex items-center space-x-2 p-2 hover:bg-golden rounded-lg transition-colors cursor-pointer group"
                    >
                      <MapPin className="w-4 h-4 text-[#5C8D89] group-hover:text-white flex-shrink-0 transition-colors" />
                      <span className="font-body text-sm text-gray-700 group-hover:text-white group-hover:underline transition-colors">{area}</span>
                    </Link>
                  ))}
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