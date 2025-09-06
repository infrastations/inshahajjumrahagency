import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Plane, Users, Utensils, Shield } from 'lucide-react';

interface PackageCardProps {
  title: string;
  category: string;
  price: string;
  originalPrice?: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
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
  features, 
  isPopular = false 
}: PackageCardProps) => {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
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
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-sapphire font-display">{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through font-body">{originalPrice}</span>
              )}
            </div>
            <p className="text-xs text-muted-foreground font-body">Food not included</p>
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
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-jade" />
            <span className="font-body">{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-jade" />
            <span className="font-body">Hotel Makkah</span>
          </div>
        </div>

        <div className="space-y-2">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <div className="w-4 h-4 flex items-center justify-center">
                {feature.includes('Package') && <Shield className="w-3 h-3 text-jade" />}
                {feature.includes('Hotel') && <MapPin className="w-3 h-3 text-jade" />}
                {feature.includes('Flight') && <Plane className="w-3 h-3 text-jade" />}
                {feature.includes('Food') && <Utensils className="w-3 h-3 text-jade" />}
                {feature.includes('Services') && <Users className="w-3 h-3 text-jade" />}
              </div>
              <span className="text-muted-foreground font-body">{feature}</span>
            </div>
          ))}
        </div>

        <Button className="w-full bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold">
          Book {category.split(' ')[0]} Package
        </Button>
      </CardContent>
    </Card>
  );
};

export default PackageCard;