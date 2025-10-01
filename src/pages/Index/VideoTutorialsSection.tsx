import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoTutorialsSection = () => {
    return (
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
    );
};

export default VideoTutorialsSection;