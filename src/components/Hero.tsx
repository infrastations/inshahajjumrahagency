import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Award, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-kaaba.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sapphire/90 via-sapphire/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
                Find the best <span className="text-golden">Umrah</span> package from 
                <span className="block text-golden">Bangladesh</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-cream/90 font-body leading-relaxed">
                Discover all the amazing packages at exclusive rates with expert guides and Sharia consultants.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold px-8 py-6 text-lg rounded-xl shadow-golden hover:shadow-lg transition-all duration-300"
            >
              Plan your Umrah
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white">f</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white">in</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white">G</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white">📧</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;