import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CustomizedPackagesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/25 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-4xl font-bold text-golden mb-8">
          Customized Umrah packages from Bangladesh
        </h2>
        <p className="font-body text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
          We specialize in creating packages that are customized to your needs.
        </p>
        <p className="font-body text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Allow us to offer you a personalized Umrah experience tailored to your travel dates,
          budget, and hotel preferences.
        </p>
        <Link to="/about-us/contact-us">
          <Button
            size="lg"
            className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold px-8 py-6 text-lg"
          >
            Start Customization
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CustomizedPackagesSection;
