import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Star, UserCheck, Mail, ArrowLeft } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";

// Mock dealer and property data
const mockDealers = [
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
    reraId: "A51800000123",
    company: undefined,
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
    reraId: "B51800000456",
  },
];

const mockProperties = [
  {
    id: "101",
    title: "2 BHK Apartment in Andheri West",
    price: "₹1.5 Cr",
    location: "Andheri West, Mumbai",
    image: "/placeholder.svg",
    dealerId: "1",
  },
  {
    id: "102",
    title: "Luxury 3 BHK in Worli",
    price: "₹4.2 Cr",
    location: "Worli, Mumbai",
    image: "/placeholder.svg",
    dealerId: "2",
  },
];

const DealerDetail = () => {
  const { id } = useParams();
  const dealer = mockDealers.find((d) => d.id === id);
  const properties = mockProperties.filter((p) => p.dealerId === id);

  if (!dealer) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Dealer Not Found</h2>
        <Link to="/dealers" className="text-primary underline">Back to Dealers</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <Link to="/dealers" className="flex items-center mb-4 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dealers
        </Link>
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">{dealer.name}</h2>
                {dealer.company && (
                  <p className="text-sm text-muted-foreground">{dealer.company}</p>
                )}
              </div>
              {dealer.verified && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <UserCheck className="h-4 w-4" /> Verified
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
                <a href={`tel:${dealer.phone}`} className="hover:underline">{dealer.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${dealer.email}`} className="hover:underline">{dealer.email}</a>
              </div>
              {dealer.reraId && (
                <p className="text-sm text-muted-foreground">RERA ID: {dealer.reraId}</p>
              )}
            </div>
          </CardContent>
        </Card>
        <h3 className="text-xl font-semibold mb-4">Properties by {dealer.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.length === 0 ? (
            <p className="text-muted-foreground">No properties found for this dealer.</p>
          ) : (
            properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealerDetail; 