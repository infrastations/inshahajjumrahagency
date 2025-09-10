import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Plane, Users, Utensils, Shield, ArrowUp, ArrowDown } from 'lucide-react';

interface PackageCardProps {
  title: string;
  category: string;
  price: string;
  originalPrice?: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  hotelMakkah: string;
  hotelMadinah: string;
  flightsUp: string;
  flightsDown: string;
  food: string;
  specialServices: string;
  isPopular?: boolean;
}

const PackageCard = ({ 
  title, 
  category, 
  price, 
  originalPrice, 
  duration, 
  rating, 
  reviews, 
  image,
  hotelMakkah,
  hotelMadinah,
  flightsUp,
  flightsDown,
  food,
  specialServices,
  isPopular = false 
}: PackageCardProps) => {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 relative overflow-hidden bg-white">
      {isPopular && (
        <Badge className="absolute top-4 right-4 z-10 bg-golden text-sapphire font-semibold">
          Most Popular
        </Badge>
      )}
      
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-sapphire/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <Badge variant="secondary" className="bg-jade text-white">
              {category}
            </Badge>
          </div>
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="font-display text-xl text-sapphire group-hover:text-jade transition-colors">
          {title}
        </CardTitle>
        
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-sapphire font-display">{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through font-body">{originalPrice}</span>
              )}
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < rating ? 'fill-golden text-golden' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-body">{rating} ({reviews} Reviews)</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3 text-sm">
          {/* Time & Duration */}
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-jade flex-shrink-0" />
            <span className="font-semibold text-sapphire">Time & Duration:</span>
            <span className="text-muted-foreground font-body">{duration}</span>
          </div>

          {/* Hotel Makkah */}
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-jade flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-sapphire">Hotel Makkah:</span>
              <p className="text-muted-foreground font-body text-xs">{hotelMakkah}</p>
            </div>
          </div>

          {/* Hotel Madinah */}
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-jade flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-sapphire">Hotel Madinah:</span>
              <p className="text-muted-foreground font-body text-xs">{hotelMadinah}</p>
            </div>
          </div>

          {/* Flights Up */}
          <div className="flex items-center space-x-2">
            <ArrowUp className="w-4 h-4 text-jade flex-shrink-0" />
            <span className="font-semibold text-sapphire">Flights Up:</span>
            <span className="text-muted-foreground font-body">{flightsUp}</span>
          </div>

          {/* Flights Down */}
          <div className="flex items-center space-x-2">
            <ArrowDown className="w-4 h-4 text-jade flex-shrink-0" />
            <span className="font-semibold text-sapphire">Flights Down:</span>
            <span className="text-muted-foreground font-body">{flightsDown}</span>
          </div>

          {/* Food */}
          <div className="flex items-center space-x-2">
            <Utensils className="w-4 h-4 text-jade flex-shrink-0" />
            <span className="font-semibold text-sapphire">Food:</span>
            <span className="text-muted-foreground font-body">{food}</span>
          </div>

          {/* Special Services */}
          <div className="flex items-start space-x-2">
            <Users className="w-4 h-4 text-jade flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-sapphire">Special Services:</span>
              <p className="text-muted-foreground font-body text-xs">{specialServices}</p>
            </div>
          </div>
        </div>

        <Button className="w-full bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold">
          Book {category.split(' ')[0]} Package
        </Button>
      </CardContent>
    </Card>
  );
};

export default PackageCard;