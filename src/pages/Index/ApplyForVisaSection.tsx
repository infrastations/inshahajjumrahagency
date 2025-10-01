import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ApplyForVisaSection = () => {
    return (
        <section className="py-20 bg-background text-center">
            <div className="container mx-auto px-4">
                <h2 className="font-display text-4xl font-bold text-golden mb-8">
                    Apply for an Umrah visa and experience the hassle-free journey to the city of Makkah.
                </h2>
                <Link to="/about-us/contact-us">
                    <Button
                        size="lg"
                        className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold px-8 py-6 text-lg"
                    >
                        Request for Umrah Booking Online
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default ApplyForVisaSection;