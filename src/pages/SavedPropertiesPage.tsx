import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, IndianRupee, Building2, Trash2 } from "lucide-react";

interface SavedProperty {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  area: number;
  imageUrl: string;
  savedDate: string;
}

interface Requirement {
  id: string;
  type: string;
  location: string;
  budget: string;
  propertyType: string;
  createdDate: string;
  status: "active" | "inactive";
}

const mockSavedProperties: SavedProperty[] = [
  {
    id: "1",
    title: "3 BHK Apartment in Andheri West",
    location: "Andheri West, Mumbai",
    price: 25000000,
    type: "Apartment",
    area: 1250,
    imageUrl: "/placeholder.jpg",
    savedDate: "2024-01-15"
  },
  {
    id: "2",
    title: "4 BHK Villa in Bandra West",
    location: "Bandra West, Mumbai",
    price: 45000000,
    type: "Villa",
    area: 2100,
    imageUrl: "/placeholder.jpg",
    savedDate: "2024-01-10"
  }
];

const mockRequirements: Requirement[] = [
  {
    id: "1",
    type: "Buy",
    location: "Andheri West, Mumbai",
    budget: "2-3 Cr",
    propertyType: "3 BHK Apartment",
    createdDate: "2024-01-15",
    status: "active"
  },
  {
    id: "2",
    type: "Rent",
    location: "Bandra West, Mumbai",
    budget: "50-75K/month",
    propertyType: "2 BHK Apartment",
    createdDate: "2024-01-10",
    status: "inactive"
  }
];

const SavedPropertiesPage = () => {
  const [savedProperties, setSavedProperties] = useState<SavedProperty[]>(mockSavedProperties);
  const [requirements, setRequirements] = useState<Requirement[]>(mockRequirements);

  const removeSavedProperty = (id: string) => {
    setSavedProperties(prev => prev.filter(prop => prop.id !== id));
  };

  const toggleRequirementStatus = (id: string) => {
    setRequirements(prev => prev.map(req => {
      if (req.id === id) {
        return {
          ...req,
          status: req.status === "active" ? "inactive" : "active"
        };
      }
      return req;
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Properties</h1>

        <Tabs defaultValue="saved" className="space-y-6">
          <TabsList>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Saved Properties
            </TabsTrigger>
            <TabsTrigger value="requirements" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              My Requirements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="saved">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img
                      src={property.imageUrl}
                      alt={property.title}
                      className="object-cover w-full h-full"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => removeSavedProperty(property.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold truncate">{property.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" />
                        <span className="font-medium">
                          {(property.price / 10000000).toFixed(1)} Cr
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span>{property.area} sq.ft</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Saved on {new Date(property.savedDate).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requirements">
            <div className="space-y-4">
              {requirements.map((requirement) => (
                <Card key={requirement.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={requirement.status === "active" ? "default" : "secondary"}>
                            {requirement.status === "active" ? "Active" : "Inactive"}
                          </Badge>
                          <Badge variant="outline">{requirement.type}</Badge>
                        </div>
                        <h3 className="font-semibold">{requirement.propertyType}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {requirement.location} • Budget: {requirement.budget}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Created on {new Date(requirement.createdDate).toLocaleDateString()}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleRequirementStatus(requirement.id)}
                      >
                        {requirement.status === "active" ? "Deactivate" : "Activate"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default SavedPropertiesPage;