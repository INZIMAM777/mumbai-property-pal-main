import PropertyCard from "./PropertyCard";
import { ArrowRight } from "lucide-react";

// Mock data matching 99acres style
const recommendedProjects = [
  {
    id: "1",
    title: "Dhariwal Magathane Press Enclave CHSL",
    location: "1, 2, 3 BHK Apartment in Magathane, Borivali East",
    price: "₹1.1 - 2.86 Cr",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    beds: 3,
    baths: 2,
    sqft: 850,
    type: "Apartment",
    status: "Ready to Move" as const,
    possession: "Possession from Mar 2027",
    isRERA: true,
    verified: true,
  },
  {
    id: "2",
    title: "Apex Green Wood",
    location: "1, 2 BHK Apartment in Magathane, Borivali East",
    price: "₹91.73 - 92.95 L",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 650,
    type: "Apartment",
    status: "Under Construction" as const,
    possession: "Possession from Jun 2026",
    isRERA: true,
  },
  {
    id: "3",
    title: "Lodha Woods",
    location: "2, 3, 4 BHK Apartment in Kandivali East, Mumbai",
    price: "₹2.04 - 4.38 Cr",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    beds: 3,
    baths: 3,
    sqft: 1200,
    type: "Apartment",
    status: "Under Construction" as const,
    possession: "Possession from Dec 2025",
    isRERA: true,
  },
  {
    id: "4",
    title: "Kalpataru Immensa",
    location: "2, 3, 4 BHK Apartment in Thane West, Mumbai",
    price: "₹1.85 - 3.20 Cr",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    beds: 3,
    baths: 2,
    sqft: 950,
    type: "Apartment",
    status: "Ready to Move" as const,
    possession: "Ready to Move",
    isRERA: true,
  },
  {
    id: "5",
    title: "Godrej Prime",
    location: "1, 2, 3 BHK Apartment in Chembur East, Mumbai",
    price: "₹1.45 - 2.85 Cr",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 720,
    type: "Apartment",
    status: "New Launch" as const,
    possession: "Possession from Sep 2026",
    isRERA: true,
  },
  {
    id: "6",
    title: "Runwal Forest",
    location: "1, 2, 3 BHK Apartment in Kanjurmarg West, Mumbai",
    price: "₹78 L - 1.95 Cr",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 580,
    type: "Apartment",
    status: "Under Construction" as const,
    possession: "Possession from Nov 2025",
    isRERA: true,
  },
  {
    id: "7",
    title: "Oberoi Realty Sky City",
    location: "2, 3, 4 BHK Apartment in Borivali East, Mumbai",
    price: "₹2.50 - 5.20 Cr",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop",
    beds: 3,
    baths: 3,
    sqft: 1150,
    type: "Apartment",
    status: "Under Construction" as const,
    possession: "Possession from Mar 2027",
    isRERA: true,
  },
  {
    id: "8",
    title: "Mahindra Lifespace Happinest",
    location: "1, 2 BHK Apartment in Kalyan East, Mumbai",
    price: "₹35 - 65 L",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop",
    beds: 1,
    baths: 1,
    sqft: 450,
    type: "Apartment",
    status: "Ready to Move" as const,
    possession: "Ready to Move",
    isRERA: true,
  },
  {
    id: "9",
    title: "Tata Housing Primanti",
    location: "1, 2, 3 BHK Apartment in Sector 72, Gurgaon",
    price: "₹95 L - 1.85 Cr",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 675,
    type: "Apartment",
    status: "Ready to Move" as const,
    possession: "Ready to Move",
    isRERA: true,
  },
  {
    id: "10",
    title: "Hiranandani Fortune City",
    location: "1, 2, 3 BHK Apartment in Panvel, Navi Mumbai",
    price: "₹45 - 95 L",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=400&h=300&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 550,
    type: "Apartment",
    status: "Under Construction" as const,
    possession: "Possession from Aug 2026",
    isRERA: true,
  },
  {
    id: "11",
    title: "Shapoorji Pallonji Joyville",
    location: "1, 2, 3 BHK Apartment in Howrah, Kolkata",
    price: "₹28 - 75 L",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=400&h=300&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 620,
    type: "Apartment",
    status: "Under Construction" as const,
    possession: "Possession from Feb 2026",
    isRERA: true,
  },
  {
    id: "12",
    title: "Brigade Cornerstone Utopia",
    location: "2, 3, 4 BHK Apartment in Varthur, Bangalore",
    price: "₹1.20 - 2.80 Cr",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop",
    beds: 3,
    baths: 3,
    sqft: 1050,
    type: "Apartment",
    status: "Ready to Move" as const,
    possession: "Ready to Move",
    isRERA: true,
  }
];

const apartmentTypes = [
  {
    title: "Flats in Western Mumbai",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop",
  },
  {
    title: "Builder Floors in Western Mumbai",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop",
  },
  {
    title: "Independent House in Western Mumbai",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop",
  },
  {
    title: "Plots in Western Mumbai",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="space-y-12">
      {/* Recommended Projects */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Recommended Projects
          </h2>
          <p className="text-muted-foreground">
            The most searched projects in Western Mumbai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {recommendedProjects.map((property, index) => (
            <PropertyCard 
              key={property.id} 
              property={property}
              className="hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>

        <div className="text-center">
          <button className="flex items-center gap-2 mx-auto text-primary hover:text-primary/80 font-medium">
            <span>View More Projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Apartments, Villas and more */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Apartments, Villas and more
          </h2>
          <p className="text-muted-foreground">
            in Western Mumbai
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {apartmentTypes.map((type, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
            >
              <img 
                src={type.image} 
                alt={type.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white text-sm font-medium leading-tight">
                  {type.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProjects;