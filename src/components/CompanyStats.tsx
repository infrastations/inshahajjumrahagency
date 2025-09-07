import { Button } from '@/components/ui/button';
import { Users, Calendar, Award, Shield } from 'lucide-react';

const CompanyStats = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#5C8D89] to-[#4A7B7E]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-semibold text-white mb-4">
                Insha Hajj Umrah Agency
              </h3>
              <p className="text-cream/80 font-body text-xl mb-4">
                Best Agency in Bangladesh
              </p>
              <p className="text-cream/70 font-body leading-relaxed max-w-2xl mx-auto">
                Insha Hajj Umrah Agency in Bangladesh was established in January 2023. 
                Aiming to provide a comprehensive and all-in-one experience for individuals 
                undertaking the holy pilgrimage of Hajj and Umrah from any city in Bangladesh.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-golden mr-2" />
                  <span className="text-3xl font-bold text-white font-display">10+</span>
                </div>
                <p className="text-cream/80 text-sm font-body">Shariah Consultants</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-golden mr-2" />
                  <span className="text-3xl font-bold text-white font-display">10+</span>
                </div>
                <p className="text-cream/80 text-sm font-body">Special Days</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-golden mr-2" />
                  <span className="text-3xl font-bold text-white font-display">20+</span>
                </div>
                <p className="text-cream/80 text-sm font-body">Umrah Guides</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-golden mr-2" />
                  <span className="text-3xl font-bold text-white font-display">50+</span>
                </div>
                <p className="text-cream/80 text-sm font-body">Business Associates</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button 
                variant="outline" 
                className="border-golden text-golden hover:bg-golden hover:text-sapphire font-body font-semibold px-8"
              >
                Management Board
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;