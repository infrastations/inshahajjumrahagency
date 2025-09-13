import { Card, CardContent } from '@/components/ui/card';
import type { Consultant } from '@/services';

const ConsultantCard = ({ name, title, department, image }: Consultant) => {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <div 
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${image || '/placeholder-consultant.jpg'})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-sapphire/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        {/* Golden accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-golden"></div>
      </div>
      
      <CardContent className="p-6 text-center space-y-2">
        <h3 className="font-display text-lg font-semibold text-jade group-hover:text-sapphire transition-colors">
          {name || 'Consultant Name'}
        </h3>
        <p className="font-body text-sm text-foreground">{title || 'Title'}</p>
        <p className="font-body text-xs text-muted-foreground">{department || 'Department'}</p>
      </CardContent>
    </Card>
  );
};

export default ConsultantCard;