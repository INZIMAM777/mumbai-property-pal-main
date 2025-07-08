import { Property, SearchFilters, User } from './types';

const API_BASE_URL = 'https://api.mumbaipropertypal.com';

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Dhariwal Magathane Press Enclave CHSL',
    location: '1, 2, 3 BHK Apartment in Magathane, Borivali East',
    price: '₹1.1 - 2.86 Cr',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    beds: 3,
    baths: 2,
    sqft: 850,
    type: 'Apartment',
    status: 'Ready to Move',
    possession: 'Possession from Mar 2027',
    isRERA: true,
    verified: true,
  },
  // Add more mock properties here
];

export const api = {
  properties: {
    async search(query: string, location: string, filters?: SearchFilters): Promise<Property[]> {
      // In a real app, this would be an API call
      const storedProperties = JSON.parse(localStorage.getItem('postedProperties') || '[]');
      const allProperties = [...mockProperties, ...storedProperties];
      
      let filtered = allProperties;
      
      if (query) {
        filtered = filtered.filter(property =>
          property.title.toLowerCase().includes(query.toLowerCase()) ||
          property.location.toLowerCase().includes(query.toLowerCase()) ||
          property.type.toLowerCase().includes(query.toLowerCase())
        );
      }
      
      if (location) {
        filtered = filtered.filter(property =>
          property.location.toLowerCase().includes(location.toLowerCase())
        );
      }
      
      if (filters) {
        if (filters.priceRange) {
          filtered = filtered.filter(property => {
            const price = parseFloat(property.price.replace(/[₹,\s]/g, ''));
            return price >= filters.priceRange!.min && price <= filters.priceRange!.max;
          });
        }
        
        if (filters.propertyType) {
          filtered = filtered.filter(property =>
            property.type === filters.propertyType
          );
        }
        
        if (filters.bedrooms) {
          filtered = filtered.filter(property =>
            property.beds === parseInt(filters.bedrooms!)
          );
        }
        
        if (filters.status) {
          filtered = filtered.filter(property =>
            property.status === filters.status
          );
        }
      }
      
      return filtered;
    },

    async getById(id: string): Promise<Property | null> {
      const storedProperties = JSON.parse(localStorage.getItem('postedProperties') || '[]');
      const allProperties = [...mockProperties, ...storedProperties];
      return allProperties.find(p => p.id === id) || null;
    },

    async create(property: Omit<Property, 'id'>): Promise<Property> {
      const newProperty = {
        ...property,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const storedProperties = JSON.parse(localStorage.getItem('postedProperties') || '[]');
      storedProperties.push(newProperty);
      localStorage.setItem('postedProperties', JSON.stringify(storedProperties));

      return newProperty;
    },
  },

  users: {
    async getCurrentUser(): Promise<User | null> {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    },

    async login(email: string, password: string): Promise<User> {
      // In a real app, this would validate credentials with the backend
      const user: User = {
        id: '1',
        name: 'Test User',
        email,
        role: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    },

    async logout(): Promise<void> {
      localStorage.removeItem('currentUser');
    },

    async register(userData: { name: string; email: string; password: string }): Promise<User> {
      // In a real app, this would create a new user in the backend
      const user: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        role: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    },
  },
};