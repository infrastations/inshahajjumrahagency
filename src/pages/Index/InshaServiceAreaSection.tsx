import { Button } from '@/components/ui/button';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { MapPin, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
interface InshaServiceAreaSectionProps {
    serviceAreas: string[];
    mapContainer: React.MutableRefObject<any>;
    mapError: boolean;
    isLoading: boolean;
}
const InshaServiceAreaSection = ({ serviceAreas, mapContainer, mapError, isLoading }: InshaServiceAreaSectionProps) => {
    return (
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
    );
};

export default InshaServiceAreaSection;