import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Building2, IndianRupee, MapPin, Upload } from "lucide-react";

const amenitiesList = [
  "Lift",
  "Power Backup",
  "Car Parking",
  "Swimming Pool",
  "Gym",
  "Club House",
  "Children's Play Area",
  "24x7 Security",
  "Gated Community",
  "Garden",
  "Visitor Parking",
  "Intercom",
];

const PostProperty = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    beds: "",
    baths: "",
    sqft: "",
    type: "",
    status: "",
    possession: "",
    description: "",
    image: "",
    isRERA: false,
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    // New fields
    propertyFor: "sell",
    ownership: "",
    furnishing: "",
    facing: "",
    floor: "",
    totalFloors: "",
    age: "",
    amenities: [] as string[],
    landmark: "",
    nearbyPlaces: "",
    reraId: "",
    expectedRent: "",
    securityDeposit: "",
    maintenanceCharges: "",
    availableFrom: "",
    preferredTenants: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new property object
    const newProperty = {
      id: Date.now().toString(),
      title: formData.title,
      location: formData.location,
      price: formData.propertyFor === "sell" ? formData.price : formData.expectedRent,
      image: formData.image || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      beds: parseInt(formData.beds) || undefined,
      baths: parseInt(formData.baths) || undefined,
      sqft: parseInt(formData.sqft) || undefined,
      type: formData.type,
      status: formData.status as "Ready to Move" | "Under Construction" | "New Launch",
      possession: formData.possession,
      isRERA: formData.isRERA,
      verified: true,
      description: formData.description,
      contact: {
        name: formData.contactName,
        phone: formData.contactPhone,
        email: formData.contactEmail
      },
      propertyFor: formData.propertyFor,
      ownership: formData.ownership,
      furnishing: formData.furnishing,
      facing: formData.facing,
      floor: formData.floor,
      totalFloors: formData.totalFloors,
      age: formData.age,
      amenities: formData.amenities,
      landmark: formData.landmark,
      nearbyPlaces: formData.nearbyPlaces,
      reraId: formData.reraId,
      rental: formData.propertyFor === "rent" ? {
        expectedRent: formData.expectedRent,
        securityDeposit: formData.securityDeposit,
        maintenanceCharges: formData.maintenanceCharges,
        availableFrom: formData.availableFrom,
        preferredTenants: formData.preferredTenants
      } : undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Store in localStorage (in real app, this would go to database)
    const existingProperties = JSON.parse(localStorage.getItem('postedProperties') || '[]');
    existingProperties.push(newProperty);
    localStorage.setItem('postedProperties', JSON.stringify(existingProperties));

    toast({
      title: "Property Posted Successfully!",
      description: "Your property has been added to the listings.",
    });

    // Navigate back to home page
    navigate('/');
  };

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Post Your Property</CardTitle>
            <p className="text-center text-muted-foreground">
              Get genuine leads and sell faster
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Property For */}
              <div className="space-y-4">
                <Label>I want to</Label>
                <RadioGroup
                  defaultValue={formData.propertyFor}
                  onValueChange={(value) => handleInputChange('propertyFor', value)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sell" id="sell" />
                    <Label htmlFor="sell">Sell</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rent" id="rent" />
                    <Label htmlFor="rent">Rent/Lease</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Basic Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Basic Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Property Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="e.g., Luxury 3BHK Apartment"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Property Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('type', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="Villa">Villa</SelectItem>
                        <SelectItem value="Builder Floor">Builder Floor</SelectItem>
                        <SelectItem value="Independent House">Independent House</SelectItem>
                        <SelectItem value="Plot">Plot</SelectItem>
                        <SelectItem value="Commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="beds">Bedrooms</Label>
                    <Select onValueChange={(value) => handleInputChange('beds', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 BHK</SelectItem>
                        <SelectItem value="2">2 BHK</SelectItem>
                        <SelectItem value="3">3 BHK</SelectItem>
                        <SelectItem value="4">4 BHK</SelectItem>
                        <SelectItem value="5">5+ BHK</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="baths">Bathrooms</Label>
                    <Select onValueChange={(value) => handleInputChange('baths', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sqft">Area (sq ft)</Label>
                    <Input
                      id="sqft"
                      value={formData.sqft}
                      onChange={(e) => handleInputChange('sqft', e.target.value)}
                      placeholder="e.g., 1200"
                      type="number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="floor">Floor</Label>
                    <Input
                      id="floor"
                      value={formData.floor}
                      onChange={(e) => handleInputChange('floor', e.target.value)}
                      placeholder="e.g., 5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="totalFloors">Total Floors</Label>
                    <Input
                      id="totalFloors"
                      value={formData.totalFloors}
                      onChange={(e) => handleInputChange('totalFloors', e.target.value)}
                      placeholder="e.g., 15"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="facing">Facing</Label>
                    <Select onValueChange={(value) => handleInputChange('facing', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select facing" />
                      </SelectTrigger>
                      <SelectContent>
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

                  <div className="space-y-2">
                    <Label htmlFor="furnishing">Furnishing</Label>
                    <Select onValueChange={(value) => handleInputChange('furnishing', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select furnishing status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Unfurnished">Unfurnished</SelectItem>
                        <SelectItem value="Semi-Furnished">Semi-Furnished</SelectItem>
                        <SelectItem value="Fully Furnished">Fully Furnished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="e.g., Andheri West, Mumbai"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="landmark">Landmark</Label>
                    <Input
                      id="landmark"
                      value={formData.landmark}
                      onChange={(e) => handleInputChange('landmark', e.target.value)}
                      placeholder="e.g., Near Metro Station"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="nearbyPlaces">Nearby Places</Label>
                    <Textarea
                      id="nearbyPlaces"
                      value={formData.nearbyPlaces}
                      onChange={(e) => handleInputChange('nearbyPlaces', e.target.value)}
                      placeholder="List nearby schools, hospitals, markets, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Pricing & Availability */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <IndianRupee className="h-5 w-5" />
                  {formData.propertyFor === "sell" ? "Pricing Details" : "Rental Details"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formData.propertyFor === "sell" ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="price">Expected Price *</Label>
                        <Input
                          id="price"
                          value={formData.price}
                          onChange={(e) => handleInputChange('price', e.target.value)}
                          placeholder="e.g., ₹2.5 Cr"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ownership">Ownership</Label>
                        <Select onValueChange={(value) => handleInputChange('ownership', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select ownership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Freehold">Freehold</SelectItem>
                            <SelectItem value="Leasehold">Leasehold</SelectItem>
                            <SelectItem value="Co-operative society">Co-operative society</SelectItem>
                            <SelectItem value="Power of Attorney">Power of Attorney</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="expectedRent">Expected Rent *</Label>
                        <Input
                          id="expectedRent"
                          value={formData.expectedRent}
                          onChange={(e) => handleInputChange('expectedRent', e.target.value)}
                          placeholder="e.g., ₹45,000/month"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="securityDeposit">Security Deposit</Label>
                        <Input
                          id="securityDeposit"
                          value={formData.securityDeposit}
                          onChange={(e) => handleInputChange('securityDeposit', e.target.value)}
                          placeholder="e.g., ₹2,00,000"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="maintenanceCharges">Maintenance Charges</Label>
                        <Input
                          id="maintenanceCharges"
                          value={formData.maintenanceCharges}
                          onChange={(e) => handleInputChange('maintenanceCharges', e.target.value)}
                          placeholder="e.g., ₹5,000/month"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="availableFrom">Available From</Label>
                        <Input
                          id="availableFrom"
                          value={formData.availableFrom}
                          onChange={(e) => handleInputChange('availableFrom', e.target.value)}
                          type="date"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTenants">Preferred Tenants</Label>
                        <Select onValueChange={(value) => handleInputChange('preferredTenants', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred tenants" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Family">Family</SelectItem>
                            <SelectItem value="Bachelor">Bachelor</SelectItem>
                            <SelectItem value="Company">Company</SelectItem>
                            <SelectItem value="Any">Any</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="status">Status *</Label>
                    <Select onValueChange={(value) => handleInputChange('status', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ready to Move">Ready to Move</SelectItem>
                        <SelectItem value="Under Construction">Under Construction</SelectItem>
                        <SelectItem value="New Launch">New Launch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="possession">Possession</Label>
                    <Input
                      id="possession"
                      value={formData.possession}
                      onChange={(e) => handleInputChange('possession', e.target.value)}
                      placeholder="e.g., Ready to Move or Dec 2024"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age of Construction</Label>
                    <Select onValueChange={(value) => handleInputChange('age', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New Construction</SelectItem>
                        <SelectItem value="<5">Less than 5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value=">10">More than 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenitiesList.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity}
                        checked={formData.amenities.includes(amenity)}
                        onCheckedChange={() => toggleAmenity(amenity)}
                      />
                      <Label htmlFor={amenity}>{amenity}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your property..."
                  rows={4}
                />
              </div>

              {/* Photos */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Photos
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="image">Property Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => handleInputChange('image', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              {/* RERA Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rera"
                    checked={formData.isRERA}
                    onCheckedChange={(checked) => handleInputChange('isRERA', checked === true)}
                  />
                  <Label htmlFor="rera">RERA Approved</Label>
                </div>
                {formData.isRERA && (
                  <div className="space-y-2">
                    <Label htmlFor="reraId">RERA ID</Label>
                    <Input
                      id="reraId"
                      value={formData.reraId}
                      onChange={(e) => handleInputChange('reraId', e.target.value)}
                      placeholder="Enter RERA ID"
                    />
                  </div>
                )}
              </div>

              {/* Contact Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone *</Label>
                    <Input
                      id="contactPhone"
                      value={formData.contactPhone}
                      onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input
                      id="contactEmail"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                      placeholder="Your email"
                      type="email"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button type="submit" className="flex-1">
                  Post Property
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/')}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default PostProperty;