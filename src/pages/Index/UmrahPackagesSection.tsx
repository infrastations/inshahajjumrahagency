import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge as UIBadge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import type { UmrahPackage } from '@/services';

interface UmrahPackagesSectionProps {
  umrahPackages: UmrahPackage[];
  isLoading: boolean;
}

const UmrahPackagesSection = ({ umrahPackages, isLoading }: UmrahPackagesSectionProps) => {
  return (
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
          {umrahPackages && umrahPackages.length > 0 ? umrahPackages.map((packageData) => {
            return (
              <Card key={packageData?.id} className="bg-white rounded-2xl shadow-elevated overflow-hidden">
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${packageData?.image || '/placeholder-package.jpg'})` }}
                  >
                    <div className="absolute top-4 left-4">
                    </div>
                    <div className="absolute top-4 right-4">
                      <UIBadge className={`${packageData?.badge?.color || 'bg-gray-600 text-white'} font-semibold`}>
                        {packageData?.badge?.text || 'Package'}
                      </UIBadge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-sapphire mb-4">
                    {packageData?.title || 'Package Title'}
                  </h3>

                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-600">💰 Price</span>
                      <span className="text-sapphire font-bold">{packageData?.price || 'Price TBA'}</span>
                    </div>

                    {packageData?.packages && packageData.packages.length > 0 ? packageData.packages.map((pkg, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-semibold text-gray-600">📅 {pkg?.name || `Package ${index + 1}`}</span>
                        <span className="text-gray-700">{pkg?.duration || 'Duration TBA'}</span>
                      </div>
                    )) : (
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-600">📅 Package Details</span>
                        <span className="text-gray-700">Details TBA</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-600">🏨 Hotel Makkah</span>
                      <span className="text-gray-700">{packageData?.details?.hotelMakkah || 'Hotel TBA'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-600">🏨 Hotel Madinah</span>
                      <span className="text-gray-700">{packageData?.details?.hotelMadinah || 'Hotel TBA'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-600">✈️ Flights Up</span>
                      <span className="text-gray-700">{packageData?.details?.flightsUp || 'TBA'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-600">✈️ Flights Down</span>
                      <span className="text-gray-700">{packageData?.details?.flightsDown || 'TBA'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-600">🍽️ Food</span>
                      <span className="text-gray-700">{packageData?.details?.food || 'TBA'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-600">🎯 Special Services</span>
                      <span className="text-gray-700">{packageData?.details?.specialServices || 'TBA'}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-golden hover:bg-golden-dark text-sapphire font-semibold mb-4">
                    {packageData?.buttonText || 'Book Package'}
                  </Button>

                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                    ))}
                    <span className="ml-2 text-sm font-semibold">{packageData?.rating || 0} ({packageData?.reviews || 0} Reviews)</span>
                  </div>
                </CardContent>
              </Card>
            );
          }) : (
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

export default UmrahPackagesSection;
