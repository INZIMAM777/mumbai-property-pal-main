export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  status: 'For Sale' | 'For Rent';
  possession: string;
  description: string;
  imageUrl: string;
  reraApproved: boolean;
  amenities: string[];
  furnishing: 'Unfurnished' | 'Semi Furnished' | 'Fully Furnished';
  floor: number;
  totalFloors: number;
  facing: string;
  age: number;
  ownership: 'Freehold' | 'Leasehold';
  landmark: string;
  nearbyPlaces: string[];
  // Optional fields for rental properties
  expectedRent?: number;
  securityDeposit?: number;
  maintenanceCharges?: number;
  availabilityDate?: string;
  preferredTenants?: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}