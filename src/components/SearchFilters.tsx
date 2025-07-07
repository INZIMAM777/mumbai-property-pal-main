import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    propertyType: 'all',
    bedrooms: 'all',
    bathrooms: 'all',
    status: 'all',
    amenities: [] as string[],
    area: [0, 5000],
    isRERA: false,
    verified: false
  });

  const handleFilterUpdate = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const newAmenities = checked 
      ? [...filters.amenities, amenity]
      : filters.amenities.filter(a => a !== amenity);
    handleFilterUpdate('amenities', newAmenities);
  };

  const clearFilters = () => {
    const defaultFilters = {
      priceRange: [0, 10000000],
      propertyType: 'all',
      bedrooms: 'all',
      bathrooms: 'all',
      status: 'all',
      amenities: [],
      area: [0, 5000],
      isRERA: false,
      verified: false
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <h3 className="font-medium mb-3">Price Range</h3>
          <div className="space-y-3">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => handleFilterUpdate('priceRange', value)}
              max={10000000}
              step={100000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>₹{(filters.priceRange[0] / 100000).toFixed(0)}L</span>
              <span>₹{(filters.priceRange[1] / 100000).toFixed(0)}L</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Property Type */}
        <div>
          <h3 className="font-medium mb-3">Property Type</h3>
          <Select value={filters.propertyType} onValueChange={(value) => handleFilterUpdate('propertyType', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Apartment">Apartment</SelectItem>
              <SelectItem value="Villa">Villa</SelectItem>
              <SelectItem value="Builder Floor">Builder Floor</SelectItem>
              <SelectItem value="Independent House">Independent House</SelectItem>
              <SelectItem value="Plot">Plot</SelectItem>
              <SelectItem value="Commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Bedrooms */}
        <div>
          <h3 className="font-medium mb-3">Bedrooms</h3>
          <Select value={filters.bedrooms} onValueChange={(value) => handleFilterUpdate('bedrooms', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="1">1 BHK</SelectItem>
              <SelectItem value="2">2 BHK</SelectItem>
              <SelectItem value="3">3 BHK</SelectItem>
              <SelectItem value="4">4 BHK</SelectItem>
              <SelectItem value="5">5+ BHK</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Bathrooms */}
        <div>
          <h3 className="font-medium mb-3">Bathrooms</h3>
          <Select value={filters.bathrooms} onValueChange={(value) => handleFilterUpdate('bathrooms', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Property Status */}
        <div>
          <h3 className="font-medium mb-3">Status</h3>
          <Select value={filters.status} onValueChange={(value) => handleFilterUpdate('status', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Ready to Move">Ready to Move</SelectItem>
              <SelectItem value="Under Construction">Under Construction</SelectItem>
              <SelectItem value="New Launch">New Launch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Area Range */}
        <div>
          <h3 className="font-medium mb-3">Area (sq ft)</h3>
          <div className="space-y-3">
            <Slider
              value={filters.area}
              onValueChange={(value) => handleFilterUpdate('area', value)}
              max={5000}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{filters.area[0]} sq ft</span>
              <span>{filters.area[1]} sq ft</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Special Features */}
        <div>
          <h3 className="font-medium mb-3">Special Features</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rera"
                checked={filters.isRERA}
                onCheckedChange={(checked) => handleFilterUpdate('isRERA', checked)}
              />
              <label htmlFor="rera" className="text-sm">RERA Approved</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="verified"
                checked={filters.verified}
                onCheckedChange={(checked) => handleFilterUpdate('verified', checked)}
              />
              <label htmlFor="verified" className="text-sm">Verified Properties</label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Amenities */}
        <div>
          <h3 className="font-medium mb-3">Amenities</h3>
          <div className="space-y-2">
            {[
              'Swimming Pool',
              'Gym',
              'Parking',
              'Security',
              'Club House',
              'Garden',
              'Elevator',
              'Power Backup'
            ].map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                />
                <label htmlFor={amenity} className="text-sm">{amenity}</label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;