import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, SlidersHorizontal } from "lucide-react";

// Import the same property data from FeaturedProjects
const allProperties = [
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
  // ... add more properties as needed
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  
  const searchQuery = searchParams.get('q') || '';
  const searchLocation = searchParams.get('location') || '';

  useEffect(() => {
    // Get posted properties from localStorage
    const postedProperties = JSON.parse(localStorage.getItem('postedProperties') || '[]');
    const combinedProperties = [...allProperties, ...postedProperties];
    
    // Filter properties based on search criteria
    let filtered = combinedProperties;
    
    if (searchQuery) {
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (searchLocation) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }
    
    setFilteredProperties(filtered);
  }, [searchQuery, searchLocation]);

  const handleFilterChange = (filters: any) => {
    let filtered = allProperties;
    
    // Apply filters
    if (filters.priceRange) {
      // Implement price filtering logic
    }
    
    if (filters.propertyType && filters.propertyType !== 'all') {
      filtered = filtered.filter(property => property.type === filters.propertyType);
    }
    
    if (filters.bedrooms && filters.bedrooms !== 'all') {
      filtered = filtered.filter(property => property.beds === parseInt(filters.bedrooms));
    }
    
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(property => property.status === filters.status);
    }
    
    setFilteredProperties(filtered);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProperties];
    
    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          const priceB = parseFloat(b.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          const priceB = parseFloat(b.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          return priceB - priceA;
        });
        break;
      case 'newest':
        // Sort by newest first (assuming id as timestamp for demo)
        sorted.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // Keep original order for relevance
        break;
    }
    
    setFilteredProperties(sorted);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Results Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span>
              {searchLocation || 'All Locations'} 
              {searchQuery && ` • "${searchQuery}"`}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {filteredProperties.length} Properties Found
          </h1>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={handleSort}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <SearchFilters onFilterChange={handleFilterChange} />
            </div>
          )}
          
          {/* Properties Grid */}
          <div className="flex-1">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard 
                    key={property.id} 
                    property={property}
                    className="hover:shadow-lg transition-shadow duration-300"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No properties found matching your criteria.</p>
                <p className="text-sm text-muted-foreground mt-2">Try adjusting your search filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
