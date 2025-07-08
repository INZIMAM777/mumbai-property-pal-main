import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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
    verified: false,
    // New filters
    propertyFor: 'buy',
    furnishing: 'all',
    facing: 'all',
    floor: 'all',
    age: 'all',
    possession: 'all',
    expectedRent: [0, 200000],
    securityDeposit: [0, 1000000],
    preferredTenants: 'all',
    ownership: 'all'
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
      verified: false,
      propertyFor: 'buy',
      furnishing: 'all',
      facing: 'all',
      floor: 'all',
      age: 'all',
      possession: 'all',
      expectedRent: [0, 200000],
      securityDeposit: [0, 1000000],
      preferredTenants: 'all',
      ownership: 'all'
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
        {/* Looking to */}
        <div>
          <h3 className="font-medium mb-3">Looking to</h3>
          <RadioGroup
            value={filters.propertyFor}
            onValueChange={(value) => handleFilterUpdate('propertyFor', value)}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buy" id="buy" />
              <Label htmlFor="buy">Buy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rent" id="rent" />
              <Label htmlFor="rent">Rent</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <h3 className="font-medium mb-3">
            {filters.propertyFor === 'buy' ? 'Price Range' : 'Monthly Rent'}
          </h3>
          <div className="space-y-3">
            <Slider
              value={filters.propertyFor === 'buy' ? filters.priceRange : filters.expectedRent}
              onValueChange={(value) => handleFilterUpdate(filters.propertyFor === 'buy' ? 'priceRange' : 'expectedRent', value)}
              max={filters.propertyFor === 'buy' ? 10000000 : 200000}
              step={filters.propertyFor === 'buy' ? 100000 : 1000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              {filters.propertyFor === 'buy' ? (
                <>
                  <span>₹{(filters.priceRange[0] / 100000).toFixed(0)}L</span>
                  <span>₹{(filters.priceRange[1] / 100000).toFixed(0)}L</span>
                </>
              ) : (
                <>
                  <span>₹{filters.expectedRent[0].toLocaleString()}</span>
                  <span>₹{filters.expectedRent[1].toLocaleString()}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {filters.propertyFor === 'rent' && (
          <>
            <Separator />
            {/* Security Deposit */}
            <div>
              <h3 className="font-medium mb-3">Security Deposit</h3>
              <div className="space-y-3">
                <Slider
                  value={filters.securityDeposit}
                  onValueChange={(value) => handleFilterUpdate('securityDeposit', value)}
                  max={1000000}
                  step={10000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹{filters.securityDeposit[0].toLocaleString()}</span>
                  <span>₹{filters.securityDeposit[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Separator />
            {/* Preferred Tenants */}
            <div>
              <h3 className="font-medium mb-3">Preferred Tenants</h3>
              <Select value={filters.preferredTenants} onValueChange={(value) => handleFilterUpdate('preferredTenants', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="Family">Family</SelectItem>
                  <SelectItem value="Bachelor">Bachelor</SelectItem>
                  <SelectItem value="Company">Company</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}

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

        {/* Furnishing Status */}
        <div>
          <h3 className="font-medium mb-3">Furnishing</h3>
          <Select value={filters.furnishing} onValueChange={(value) => handleFilterUpdate('furnishing', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="Unfurnished">Unfurnished</SelectItem>
              <SelectItem value="Semi-Furnished">Semi-Furnished</SelectItem>
              <SelectItem value="Fully Furnished">Fully Furnished</SelectItem>
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

        {/* Possession */}
        <div>
          <h3 className="font-medium mb-3">Possession</h3>
          <Select value={filters.possession} onValueChange={(value) => handleFilterUpdate('possession', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="immediate">Immediate</SelectItem>
              <SelectItem value="15days">Within 15 Days</SelectItem>
              <SelectItem value="30days">Within 30 Days</SelectItem>
              <SelectItem value="3months">Within 3 Months</SelectItem>
              <SelectItem value="6months">Within 6 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Age of Construction */}
        <div>
          <h3 className="font-medium mb-3">Age of Property</h3>
          <Select value={filters.age} onValueChange={(value) => handleFilterUpdate('age', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="New">New Construction</SelectItem>
              <SelectItem value="<5">Less than 5 years</SelectItem>
              <SelectItem value="5-10">5-10 years</SelectItem>
              <SelectItem value=">10">More than 10 years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Facing */}
        <div>
          <h3 className="font-medium mb-3">Facing</h3>
          <Select value={filters.facing} onValueChange={(value) => handleFilterUpdate('facing', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="North">North</SelectItem>
              <SelectItem value="South">South</SelectItem>
              <SelectItem value="East">East</SelectItem>
              <SelectItem value="West">West</SelectItem>
              <SelectItem value="North East">North East</SelectItem>
              <SelectItem value="North West">North West</SelectItem>
              <SelectItem value="South East">South East</SelectItem>
              <SelectItem value="South West">South West</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Floor */}
        <div>
          <h3 className="font-medium mb-3">Floor</h3>
          <Select value={filters.floor} onValueChange={(value) => handleFilterUpdate('floor', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="ground">Ground Floor</SelectItem>
              <SelectItem value="1-5">1st to 5th Floor</SelectItem>
              <SelectItem value="6-10">6th to 10th Floor</SelectItem>
              <SelectItem value=">10">Above 10th Floor</SelectItem>
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
              'Power Backup',
              'Children\'s Play Area',
              'Sports Facility',
              'Jogging Track',
              'Indoor Games',
              'Community Hall',
              'Temple',
              'Shopping Center',
              'School',
              'Hospital'
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