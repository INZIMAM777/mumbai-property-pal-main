toexport interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  type: string;
  status: 'Ready to Move' | 'Under Construction' | 'New Launch';
  possession: string;
  isRERA: boolean;
  verified?: boolean;
  description?: string;
  contact?: {
    name: string;
    phone: string;
    email?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface SearchFilters {
  priceRange?: {
    min: number;
    max: number;
  };
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  status?: string;
  area?: {
    min: number;
    max: number;
  };
  features?: string[];
  amenities?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'user' | 'agent' | 'builder' | 'admin';
  createdAt: string;
  updatedAt: string;
}