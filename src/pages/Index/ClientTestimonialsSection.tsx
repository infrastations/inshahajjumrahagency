import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/services';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ClientTestimonialsSectionProps {
    testimonials: Testimonial[];
    currentTestimonialIndex: number;
    setCurrentTestimonialIndex: React.Dispatch<React.SetStateAction<number>>;
    prevTestimonial: any;
    nextTestimonial: any;
    isLoading: boolean;
}
const ClientTestimonialsSection = ({ testimonials, currentTestimonialIndex, setCurrentTestimonialIndex, prevTestimonial, nextTestimonial, isLoading }: ClientTestimonialsSectionProps) => {
    return (
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
                    {testimonials && testimonials.length > 0 && testimonials[currentTestimonialIndex] ? (
                        <Card className="bg-jade text-white shadow-elevated">
                            <CardContent className="p-8">
                                <div className="flex items-start space-x-6">
                                    <div
                                        className="w-16 h-16 bg-cover bg-center rounded-full flex-shrink-0"
                                        style={{ backgroundImage: `url('${testimonials[currentTestimonialIndex]?.avatar || '/placeholder-avatar.jpg'}')` }}
                                    ></div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h4 className="font-body font-semibold text-lg">{testimonials[currentTestimonialIndex]?.name || 'Anonymous'}</h4>
                                                <p className="text-sm text-white/80 font-body">{testimonials[currentTestimonialIndex]?.date || ''}</p>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                {[...Array(testimonials[currentTestimonialIndex]?.rating || 0)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="font-body text-white/90 leading-relaxed">
                                            {testimonials[currentTestimonialIndex]?.review && testimonials[currentTestimonialIndex].review.length > 150
                                                ? `${testimonials[currentTestimonialIndex].review.substring(0, 150)}...`
                                                : testimonials[currentTestimonialIndex]?.review || 'No review available'}
                                            {testimonials[currentTestimonialIndex]?.review && testimonials[currentTestimonialIndex].review.length > 150 && (
                                                <span className="text-golden cursor-pointer ml-2">read more</span>
                                            )}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-sm text-white/60 font-body">{testimonials[currentTestimonialIndex]?.platform || 'Review'}</span>
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
                                                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentTestimonialIndex ? 'bg-golden' : 'bg-white/30'
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
                    ) : (
                        <Card className="bg-jade text-white shadow-elevated">
                            <CardContent className="p-8 text-center">
                                <div className="text-white/60 font-body text-lg">
                                    {isLoading ? 'Loading testimonials...' : 'No testimonials available'}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonialsSection;