import ConsultantCard from '@/components/ConsultantCard';
import { Button } from '@/components/ui/button';
import type { Consultant } from '@/services';

interface ConsultantsSectionProps {
  consultants: Consultant[];
  isLoading: boolean;
}

const ConsultantsSection = ({ consultants, isLoading }: ConsultantsSectionProps) => {
  return (
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
          {consultants && consultants.length > 0 ? consultants.slice(0, 3).map((consultant, index) => (
            <ConsultantCard key={index} {...consultant} />
          )) : (
            <div className="col-span-full text-center py-12">
              <div className="text-white/60 font-body text-lg">
                {isLoading ? 'Loading consultants...' : 'No consultants available'}
              </div>
            </div>
          )}
        </div>

        {consultants && consultants.length > 3 && (
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
            {consultants.slice(3).map((consultant, index) => (
              <ConsultantCard key={index + 3} {...consultant} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ConsultantsSection;
