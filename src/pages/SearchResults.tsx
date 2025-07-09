import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, SlidersHorizontal, Search, ChevronDown, LocateFixed, Mic } from "lucide-react";
import { usePropertySearch } from "@/hooks/use-property-search";
import type { SearchFilters as SearchFiltersType } from '@/lib/types';
import MapPlaceholder from "../components/MapPlaceholder";
import { Input } from "@/components/ui/input";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
const [sortBy, setSortBy] = useState("relevance");
const [activeTab, setActiveTab] = useState("Buy");
const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || "");
const [propertyType, setPropertyType] = useState("all-residential");
const navigate = useNavigate();

const initialQuery = searchParams.get('q') || '';
const initialLocation = searchParams.get('location') || '';

const {
  properties: filteredProperties,
  isLoading,
  error,
  updateFilters,
  sortProperties
} = usePropertySearch({
  initialQuery,
  initialLocation
});

  const handleFilterChange = (filters: SearchFiltersType) => {
    updateFilters(filters);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    sortProperties(value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}&location=Western Mumbai&type=${propertyType}`);
    }
  };
  const tabs = [
    { name: "Buy" },
    { name: "Rent" },
    { name: "New Launch", isNew: true },
    { name: "PG / Co-living" },
    { name: "Commercial" },
    { name: "Plots/Land" },
    { name: "Projects" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Search Bar Section */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <div className="bg-card rounded-lg shadow-lg p-6 max-w-4xl mx-auto mb-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.name}
                  {tab.isNew && (
                    <sup className="text-xs text-red-500 font-bold">★</sup>
                  )}
                </button>
              );
            })}
          </div>
          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Property Type */}
            <div className="md:col-span-3">
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="All Residential" />
                  <ChevronDown className="h-4 w-4" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-residential">All Residential</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="plot">Plot</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Location/Keyword Search */}
            <div className="md:col-span-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search '3 BHK for sale in Mumbai'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-20 h-12 text-base"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <LocateFixed className="h-4 w-4 text-primary" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mic className="h-4 w-4 text-primary" />
                  </Button>
                </div>
              </div>
            </div>
            {/* Search Button */}
            <div className="md:col-span-3">
              <Button 
                variant="search" 
                size="lg" 
                className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Results Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span>
              {initialLocation || 'All Locations'} 
              {initialQuery && ` • "${initialQuery}"`}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {filteredProperties.length} Properties Found
            {error && (
              <div className="text-sm font-normal text-destructive mt-1">
                Error: {error}
              </div>
            )}
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
            <div className="w-80 flex-shrink-0 sticky top-24 self-start">
              <SearchFilters onFilterChange={handleFilterChange} />
            </div>
          )}
          
          {/* Properties Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[4/3] bg-muted rounded-lg mb-4" />
                    <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : filteredProperties.length > 0 ? (
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
