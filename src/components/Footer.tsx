import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-sapphire to-sapphire-dark text-white relative overflow-hidden">
      {/* Islamic mosque silhouette background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 200" className="w-full h-full object-cover">
          <path d="M0,100 Q50,50 100,100 T200,100 Q250,50 300,100 T400,100 Q450,50 500,100 T600,100 Q650,50 700,100 T800,100 Q850,50 900,100 T1000,100 Q1050,50 1100,100 T1200,100 L1200,200 L0,200 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-golden rounded-lg flex items-center justify-center">
                <span className="text-sapphire font-display font-bold text-xl">إ</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Insha</h3>
                <p className="text-sm text-cream font-body">Hajj Umrah Agency</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-body font-semibold text-golden">Corporate Office</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-jade flex-shrink-0 mt-0.5" />
                  <span className="text-cream/90 font-body">
                    The Forecastle, Suite No. 4/A, 3rd Floor, Road 23/B<br />
                    Gulshan 01, Dhaka 1212, Bangladesh
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-jade" />
                  <span className="text-cream/90 font-body">01713-155200</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Us Links */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-golden">About Us</h4>
            <nav className="space-y-3">
              <a href="/management-board" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Management Board
              </a>
              <a href="/shariah-consultant" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Shariah Consultant
              </a>
              <a href="/umrah-guide" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Umrah Guide
              </a>
              <a href="/testimonials" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Client Testimonials
              </a>
              <a href="/location" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Hours and Location
              </a>
            </nav>
          </div>

          {/* Guidance Links */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-golden">Guidance</h4>
            <nav className="space-y-3">
              <a href="/umrah-guideline-english" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Umrah Guideline English
              </a>
              <a href="/umrah-guideline-bangla" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Umrah Guideline Bangla
              </a>
            </nav>
          </div>

          {/* Facilities Links */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-golden">Facilities</h4>
            <nav className="space-y-3">
              <a href="/visa-processing" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Visa Processing
              </a>
              <a href="/hotel-booking" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Hotel Booking
              </a>
              <a href="/ziyarat-tours" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Ziyarat Tours
              </a>
              <a href="/airline-ticketing" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Airline Ticketing
              </a>
              <a href="/umrah-training" className="block text-cream/80 hover:text-golden transition-colors font-body text-sm">
                Umrah Training
              </a>
            </nav>
          </div>
        </div>

        {/* Social Media & Bottom Info */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="space-y-2">
              <h4 className="font-body font-semibold text-golden text-sm">We're Social: Follow Us</h4>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-golden transition-colors">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-golden transition-colors">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-golden transition-colors">
                  <span className="text-sm">G</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-golden transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-cream/60 font-body">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <div>
                  <a href="/about" className="hover:text-golden transition-colors">About Us</a>
                  <span className="mx-2">|</span>
                  <a href="/privacy" className="hover:text-golden transition-colors">Privacy Policy</a>
                  <span className="mx-2">|</span>
                  <a href="/contact" className="hover:text-golden transition-colors">Contact Us</a>
                  <span className="mx-2">|</span>
                  <a href="/sitemap" className="hover:text-golden transition-colors">Sitemap</a>
                </div>
                <div>
                  Copyright © 2025 Hijaz Hajj Umrah Ltd. | All rights reserved.
                </div>
              </div>
              <div className="mt-2">
                Designed & Developed by{' '}
                <a 
                  href="https://infrastations.github.io/" 
                  className="text-golden hover:text-golden-light transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Infra Stations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;