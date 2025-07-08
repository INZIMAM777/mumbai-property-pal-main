import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import type { Property, SearchFilters } from '@/lib/types';

interface UsePropertySearchProps {
  initialQuery?: string;
  initialLocation?: string;
  initialFilters?: SearchFilters;
}

export function usePropertySearch({
  initialQuery = '',
  initialLocation = '',
  initialFilters = {}
}: UsePropertySearchProps = {}) {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchProperties = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const results = await api.properties.search(query, location, filters);
        // Filter properties based on new criteria
        const filteredResults = results.filter(property => {
          if (filters.propertyFor && property.propertyFor !== filters.propertyFor) return false;
          
          if (filters.furnishing && filters.furnishing !== 'all' && property.furnishing !== filters.furnishing) return false;
          
          if (filters.facing && filters.facing !== 'all' && property.facing !== filters.facing) return false;
          
          if (filters.floor && filters.floor !== 'all') {
            const propertyFloor = parseInt(property.floor || '0');
            switch (filters.floor) {
              case 'ground': return propertyFloor === 0;
              case '1-5': return propertyFloor >= 1 && propertyFloor <= 5;
              case '6-10': return propertyFloor >= 6 && propertyFloor <= 10;
              case '>10': return propertyFloor > 10;
              default: return true;
            }
          }
          
          if (filters.age && filters.age !== 'all') {
            const propertyAge = property.age || 'New';
            if (filters.age !== propertyAge) return false;
          }
          
          if (filters.possession && filters.possession !== 'all') {
            // Implement possession date comparison logic
            const possessionDate = new Date(property.possession || '');
            const today = new Date();
            switch (filters.possession) {
              case 'immediate': return possessionDate <= today;
              case '15days': return possessionDate <= new Date(today.setDate(today.getDate() + 15));
              case '30days': return possessionDate <= new Date(today.setDate(today.getDate() + 30));
              case '3months': return possessionDate <= new Date(today.setMonth(today.getMonth() + 3));
              case '6months': return possessionDate <= new Date(today.setMonth(today.getMonth() + 6));
              default: return true;
            }
          }
          
          if (filters.expectedRent && property.propertyFor === 'rent') {
            const rent = parseInt(property.rental?.expectedRent || '0');
            if (rent < filters.expectedRent[0] || rent > filters.expectedRent[1]) return false;
          }
          
          if (filters.securityDeposit && property.propertyFor === 'rent') {
            const deposit = parseInt(property.rental?.securityDeposit || '0');
            if (deposit < filters.securityDeposit[0] || deposit > filters.securityDeposit[1]) return false;
          }
          
          if (filters.preferredTenants && filters.preferredTenants !== 'all' && 
              property.propertyFor === 'rent' && 
              property.rental?.preferredTenants !== filters.preferredTenants) return false;

          return true;
        });

        setProperties(filteredResults);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while searching properties');
        setProperties([]);
      } finally {
        setIsLoading(false);
      }
    };

    searchProperties();
  }, [query, location, filters]);

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  const sortProperties = (sortBy: string) => {
    const sorted = [...properties];

    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => {
          const getPrice = (property: Property) => {
            if (property.propertyFor === 'rent') {
              return parseInt(property.rental?.expectedRent || '0');
            }
            return parseFloat(property.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          };
          return getPrice(a) - getPrice(b);
        });
        break;
      case 'price-high':
        sorted.sort((a, b) => {
          const getPrice = (property: Property) => {
            if (property.propertyFor === 'rent') {
              return parseInt(property.rental?.expectedRent || '0');
            }
            return parseFloat(property.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          };
          return getPrice(b) - getPrice(a);
        });
        break;
      case 'newest':
        sorted.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
        break;
      case 'area-low':
        sorted.sort((a, b) => {
          const areaA = parseInt(a.sqft || '0');
          const areaB = parseInt(b.sqft || '0');
          return areaA - areaB;
        });
        break;
      case 'area-high':
        sorted.sort((a, b) => {
          const areaA = parseInt(a.sqft || '0');
          const areaB = parseInt(b.sqft || '0');
          return areaB - areaA;
        });
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setProperties(sorted);
  };

  return {
    query,
    setQuery,
    location,
    setLocation,
    filters,
    updateFilters,
    clearFilters,
    properties,
    isLoading,
    error,
    sortProperties
  };
}