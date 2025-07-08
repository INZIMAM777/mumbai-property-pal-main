import PropertyCard from "./PropertyCard";
import { ArrowRight } from "lucide-react";

// Mock data matching 99acres style
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import type { Property } from '@/lib/types';

const recommendedProjects: Property[] = [
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
  const [isLoading, setIsLoading] = useState(false);

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
          {isLoading ? (
            // Loading skeleton
            [...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-4" />
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            ))
          ) : (
            recommendedProjects.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property}
                className="hover:shadow-lg transition-shadow duration-300"
              />
            ))
          )}
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