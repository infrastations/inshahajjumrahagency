import PackageCard from '@/components/PackageCard';
import { Button } from '@/components/ui/button';
import type { Package } from '@/services';

interface HajjPackagesSectionProps {
  packages: Package[];
  isLoading: boolean;
}

const HajjPackagesSection = ({ packages, isLoading }: HajjPackagesSectionProps) => {
  return (
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
          {packages && packages.length > 0 ? packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          )) : (
            <div className="col-span-full text-center py-12">
              <div className="text-white/60 font-body text-lg">
                {isLoading ? 'Loading packages...' : 'No packages available'}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HajjPackagesSection;
