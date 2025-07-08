import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Star, UserCheck, Mail } from "lucide-react";

interface Dealer {
  id: string;
  name: string;
  type: "agent" | "builder";
  location: string;
  properties: number;
  experience: number;
  rating: number;
  verified: boolean;
  phone: string;
  email: string;
  company?: string;
  reraId?: string;
}

const mockDealers: Dealer[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    type: "agent",
    location: "Andheri West, Mumbai",
    properties: 45,
    experience: 8,
    rating: 4.5,
    verified: true,
    phone: "+91 98765 43210",
    email: "rahul.s@realestate.com",
    reraId: "A51800000123"
  },
  {
    id: "2",
    name: "Lodha Developers",
    type: "builder",
    location: "Worli, Mumbai",
    properties: 120,
    experience: 15,
    rating: 4.8,
    verified: true,
    phone: "+91 22 6123 4567",
    email: "sales@lodha.com",
    company: "Lodha Group",
    reraId: "B51800000456"
  }
];

const DealersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dealerType, setDealerType] = useState<"all" | "agent" | "builder">("all");

  const filteredDealers = mockDealers.filter(dealer => {
    const matchesSearch = dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = dealerType === "all" || dealer.type === dealerType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Real Estate Agents & Builders in Mumbai</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Search by name or location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:w-96"
          />
          
          <div className="flex gap-2">
            <Button
              variant={dealerType === "all" ? "default" : "outline"}
              onClick={() => setDealerType("all")}
            >
              All
            </Button>
            <Button
              variant={dealerType === "agent" ? "default" : "outline"}
              onClick={() => setDealerType("agent")}
            >
              Agents
            </Button>
            <Button
              variant={dealerType === "builder" ? "default" : "outline"}
              onClick={() => setDealerType("builder")}
            >
              Builders
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDealers.map((dealer) => (
            <Card key={dealer.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{dealer.name}</h3>
                    {dealer.company && (
                      <p className="text-sm text-muted-foreground">{dealer.company}</p>
                    )}
                  </div>
                  {dealer.verified && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <UserCheck className="h-4 w-4" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span>{dealer.properties} Properties</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{dealer.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{dealer.rating} • {dealer.experience} Years Experience</span>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${dealer.phone}`} className="hover:underline">
                      {dealer.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${dealer.email}`} className="hover:underline">
                      {dealer.email}
                    </a>
                  </div>
                  {dealer.reraId && (
                    <p className="text-sm text-muted-foreground">
                      RERA ID: {dealer.reraId}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DealersPage;