import { Star, Users, MapPin } from 'lucide-react';
import type { KeyHighlight } from '@/services';

interface KeyHighlightsSectionProps {
  keyHighlights: KeyHighlight[];
  isLoading: boolean;
}

const KeyHighlightsSection = ({ keyHighlights, isLoading }: KeyHighlightsSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-1 bg-golden"></div>
            <div className="mx-4">
              <svg className="w-8 h-8 text-golden" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2 8 14l-6-4.8h7.6z"/>
              </svg>
            </div>
            <div className="w-16 h-1 bg-golden"></div>
          </div>
          <h2 className="font-display text-4xl font-bold text-golden mb-6">
            Key Highlights: InSha Hajj & Umrah Group
          </h2>
          <p className="font-body text-xl text-white/80 max-w-4xl mx-auto">
            With a steadfast commitment to <span className="text-[#D4AF37] font-semibold">excellence</span>,
            InSha Hajj & Umrah Group has achieved remarkable milestones in serving the pilgrims' community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {keyHighlights && keyHighlights.length > 0 ? keyHighlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-4">
                {index === 0 && <MapPin className="w-8 h-8 text-white mr-4" />}
                {index === 1 && <Users className="w-8 h-8 text-white mr-4" />}
                {index === 2 && <Star className="w-8 h-8 text-white mr-4" />}
                <span className="font-display text-5xl font-bold text-golden">{highlight?.number || '0'}</span>
              </div>
              <h3 className="font-body text-xl font-semibold text-white mb-2">{highlight?.title || 'Loading...'}</h3>
              <p className="font-body text-white/70">{highlight?.subtitle || ''}</p>
            </div>
          )) : (
            <div className="col-span-full text-center py-12">
              <div className="text-white/60 font-body text-lg">
                {isLoading ? 'Loading highlights...' : 'No highlights available'}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlightsSection;
