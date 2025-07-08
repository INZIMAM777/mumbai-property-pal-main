import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg border border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden",
      className
    )}>
      <Link to={`/property/${property.id}`} className="block">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        
        {/* RERA Badge */}
        {property.isRERA && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-green-600 text-white text-xs">
              RERA
            </Badge>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <Badge 
            className={cn(
              "text-xs",
              property.status === "Ready to Move" && "bg-green-100 text-green-800",
              property.status === "Under Construction" && "bg-orange-100 text-orange-800",
              property.status === "New Launch" && "bg-blue-100 text-blue-800"
            )}
          >
            {property.status}
          </Badge>
        </div>
      </div>
      </Link>
      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <Link to={`/property/${property.id}`} className="block hover:text-primary transition-colors">
          <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
          {property.location}
        </p>

        {/* Price */}
        <div className="mb-3">
          <span className="text-xl font-bold text-foreground">{property.price}</span>
        </div>

        {/* Possession */}
        {property.possession && (
          <p className="text-sm text-muted-foreground">
            {property.possession}
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;