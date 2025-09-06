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

          {/* Right Content - Statistics */}
          <div className="lg:flex justify-end hidden">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6 border border-white/20">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Hijaz Hajj Umrah Ltd.
              </h3>
              <p className="text-cream/80 font-body text-lg mb-6">
                Best Agency in Bangladesh
              </p>
              <p className="text-cream/70 font-body leading-relaxed mb-8">
                Hijaz Hajj Umrah Ltd. in Bangladesh was established in January 2023. 
                Aiming to provide a comprehensive and all-in-one experience for individuals 
                undertaking the holy pilgrimage of Hajj and Umrah from any city in Bangladesh.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-golden mr-2" />
                    <span className="text-3xl font-bold text-white font-display">10+</span>
                  </div>
                  <p className="text-jade text-sm font-body">Shariah Consultants</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="w-6 h-6 text-golden mr-2" />
                    <span className="text-3xl font-bold text-white font-display">10+</span>
                  </div>
                  <p className="text-jade text-sm font-body">Special Dae</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-golden mr-2" />
                    <span className="text-3xl font-bold text-white font-display">20+</span>
                  </div>
                  <p className="text-jade text-sm font-body">Umrah Guides</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-golden mr-2" />
                    <span className="text-3xl font-bold text-white font-display">50+</span>
                  </div>
                  <p className="text-jade text-sm font-body">Business Associates</p>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-golden text-golden hover:bg-golden hover:text-sapphire font-body font-semibold mt-6"
              >
                Management Board
              </Button>
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