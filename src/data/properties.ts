import { Property } from '../types/property';

export const properties: Property[] = [
  // First batch of properties (1-10) remain here...
  {
    id: '11',
    title: 'Premium 4 BHK in Dadar West',
    location: 'Dadar West, Mumbai',
    price: 120000000,
    type: '4 BHK',
    bedrooms: 4,
    bathrooms: 4,
    area: 2200,
    status: 'For Sale',
    possession: 'Ready to Move',
    description: 'Luxurious apartment with sea view and modern amenities',
    imageUrl: 'https://example.com/dadar-4bhk.jpg',
    reraApproved: true,
    amenities: ['Swimming Pool', 'Gym', 'Club House', 'Garden', 'Party Hall'],
    furnishing: 'Semi Furnished',
    floor: 18,
    totalFloors: 25,
    facing: 'Sea Facing',
    age: 2,
    ownership: 'Freehold',
    landmark: 'Near Shivaji Park',
    nearbyPlaces: ['Shivaji Park', 'Siddhivinayak Temple', 'Plaza Cinema'],
    contact: {
      name: 'Rajesh Patil',
      phone: '+91 98765 43220',
      email: 'rajesh.patil@example.com'
    }
  },
  {
    id: '12',
    title: 'Shop Space in Colaba',
    location: 'Colaba, Mumbai',
    price: 95000000,
    type: 'Commercial',
    area: 800,
    status: 'For Sale',
    possession: 'Ready to Move',
    description: 'Prime retail space in tourist hub',
    imageUrl: 'https://example.com/colaba-shop.jpg',
    reraApproved: true,
    amenities: ['24x7 Access', 'Power Backup', 'Storage Space'],
    furnishing: 'Unfurnished',
    floor: 0,
    totalFloors: 4,
    facing: 'Main Road',
    age: 15,
    ownership: 'Leasehold',
    landmark: 'Near Colaba Causeway',
    nearbyPlaces: ['Gateway of India', 'Taj Mahal Palace', 'Colaba Causeway'],
    contact: {
      name: 'Mohammed Khan',
      phone: '+91 98765 43221',
      email: 'mohammed.khan@example.com'
    }
  },
  {
    id: '13',
    title: '2 BHK for Rent in Malad West',
    location: 'Malad West, Mumbai',
    price: 35000,
    type: '2 BHK',
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    status: 'For Rent',
    possession: 'Ready to Move',
    description: 'Spacious apartment in family-friendly society',
    imageUrl: 'https://example.com/malad-2bhk.jpg',
    reraApproved: true,
    amenities: ['Children\'s Play Area', 'Garden', 'Security', 'Parking'],
    furnishing: 'Fully Furnished',
    floor: 7,
    totalFloors: 14,
    facing: 'Garden Facing',
    age: 6,
    ownership: 'Freehold',
    expectedRent: 35000,
    securityDeposit: 150000,
    maintenanceCharges: 4000,
    availabilityDate: '2024-03-01',
    preferredTenants: 'Family',
    landmark: 'Near Infinity Mall',
    nearbyPlaces: ['Infinity Mall', 'Mindspace', 'Inorbit Mall'],
    contact: {
      name: 'Priti Sharma',
      phone: '+91 98765 43222',
      email: 'priti.sharma@example.com'
    }
  },
  {
    id: '14',
    title: 'Luxury Villa in Madh Island',
    location: 'Madh Island, Mumbai',
    price: 180000000,
    type: 'Villa',
    bedrooms: 6,
    bathrooms: 7,
    area: 5500,
    status: 'For Sale',
    possession: 'Ready to Move',
    description: 'Beachfront villa with private access to beach',
    imageUrl: 'https://example.com/madh-villa.jpg',
    reraApproved: true,
    amenities: ['Private Pool', 'Garden', 'Beach Access', 'Staff Quarters', 'Home Theater'],
    furnishing: 'Fully Furnished',
    floor: 2,
    totalFloors: 2,
    facing: 'Beach Facing',
    age: 4,
    ownership: 'Freehold',
    landmark: 'Near Madh Beach',
    nearbyPlaces: ['Madh Beach', 'Versova Jetty', 'Erangal Beach'],
    contact: {
      name: 'Aditya Kapoor',
      phone: '+91 98765 43223',
      email: 'aditya.kapoor@example.com'
    }
  },
  {
    id: '15',
    title: '3 BHK in Chembur East',
    location: 'Chembur East, Mumbai',
    price: 42000000,
    type: '3 BHK',
    bedrooms: 3,
    bathrooms: 3,
    area: 1600,
    status: 'For Sale',
    possession: 'Ready to Move',
    description: 'Modern apartment with excellent connectivity',
    imageUrl: 'https://example.com/chembur-3bhk.jpg',
    reraApproved: true,
    amenities: ['Swimming Pool', 'Gym', 'Club House', 'Tennis Court'],
    furnishing: 'Semi Furnished',
    floor: 12,
    totalFloors: 20,
    facing: 'Garden Facing',
    age: 3,
    ownership: 'Freehold',
    landmark: 'Near Diamond Garden',
    nearbyPlaces: ['Diamond Garden', 'Chembur Station', 'K Star Mall'],
    contact: {
      name: 'Suresh Iyer',
      phone: '+91 98765 43224',
      email: 'suresh.iyer@example.com'
    }
  }
  // More properties will be added in subsequent updates

// Andheri West properties
const andheriWestProperties = Array(20).fill(0).map((_, i) => ({
  id: `aw${i+16}`,
  title: `${[2,3,4][i%3]} BHK in Andheri West`,
  location: 'Andheri West, Mumbai',
  price: [35000000, 45000000, 55000000][i%3],
  type: `${[2,3,4][i%3]} BHK`,
  bedrooms: [2,3,4][i%3],
  bathrooms: [2,3,4][i%3],
  area: 1000 + (i*50),
  status: i%5 === 0 ? 'For Rent' : 'For Sale',
  possession: i%2 === 0 ? 'Ready to Move' : 'Possession in 6 months',
  description: `Premium ${[2,3,4][i%3]} BHK in prime Andheri West location`,
  imageUrl: `https://example.com/andheri-${i+1}.jpg`,
  reraApproved: true,
  amenities: ['Swimming Pool', 'Gym', 'Parking', '24/7 Security'],
  furnishing: ['Fully Furnished', 'Semi Furnished'][i%2],
  floor: (i%15)+1,
  totalFloors: 15,
  facing: ['East', 'West', 'North', 'South'][i%4],
  age: i%5,
  ownership: 'Freehold',
  landmark: 'Near Lokhandwala Complex',
  nearbyPlaces: ['Lokhandwala Market', 'Infinity Mall', 'Versova Beach'],
  contact: {
    name: `Agent ${i+1}`,
    phone: `+91 98765 ${10000+i}`,
    email: `agent${i+1}@example.com`
  }
}));

// Bandra West properties
const bandraWestProperties = Array(20).fill(0).map((_, i) => ({
  id: `bw${i+36}`,
  title: `${[1,2,3][i%3]} BHK in Bandra West`,
  location: 'Bandra West, Mumbai',
  price: [25000000, 40000000, 65000000][i%3],
  type: `${[1,2,3][i%3]} BHK`,
  bedrooms: [1,2,3][i%3],
  bathrooms: [1,2,3][i%3],
  area: 800 + (i*40),
  status: i%4 === 0 ? 'For Rent' : 'For Sale',
  possession: 'Ready to Move',
  description: `Charming ${[1,2,3][i%3]} BHK in upscale Bandra West`,
  imageUrl: `https://example.com/bandra-${i+1}.jpg`,
  reraApproved: true,
  amenities: ['Gym', 'Parking', '24/7 Security', 'Garden'],
  furnishing: ['Fully Furnished', 'Semi Furnished'][i%2],
  floor: (i%12)+1,
  totalFloors: 12,
  facing: ['East', 'West', 'Sea Facing'][i%3],
  age: i%8,
  ownership: 'Freehold',
  landmark: 'Near Carter Road',
  nearbyPlaces: ['Carter Road', 'Bandra Station', 'Linking Road'],
  contact: {
    name: `Agent ${i+21}`,
    phone: `+91 98765 ${20000+i}`,
    email: `agent${i+21}@example.com`
  }
}));

properties.push(...andheriWestProperties, ...bandraWestProperties);
];

// --- AUTO-GENERATED MOCK DATA FOR TESTING ---
for (let i = 100; i < 1100; i++) {
  properties.push({
    id: i.toString(),
    title: `Sample Property ${i}`,
    location: [
      'Andheri West, Mumbai',
      'Bandra East, Mumbai',
      'Powai, Mumbai',
      'Goregaon East, Mumbai',
      'Malad West, Mumbai',
      'Chembur, Mumbai',
      'Thane West, Mumbai',
      'Borivali West, Mumbai',
      'Dadar West, Mumbai',
      'Colaba, Mumbai'
    ][i % 10],
    price: 25000000 + (i * 10000),
    type: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Villa', 'Commercial'][i % 6],
    bedrooms: [1, 2, 3, 4, 6, undefined][i % 6],
    bathrooms: [1, 2, 3, 4, 7, undefined][i % 6],
    area: 500 + (i % 10) * 100,
    status: i % 5 === 0 ? 'For Rent' : 'For Sale',
    possession: i % 3 === 0 ? 'Ready to Move' : 'Possession from 2025',
    description: `This is a sample description for property ${i} in Mumbai.`,
    imageUrl: `https://source.unsplash.com/400x300/?apartment,building,city,${i}`,
    reraApproved: i % 2 === 0,
    amenities: [
      'Swimming Pool',
      'Gym',
      'Club House',
      'Garden',
      'Parking',
      'Security',
      'Children\'s Play Area',
      'Power Backup',
      'Tennis Court',
      'Home Theater'
    ].filter((_, idx) => i % (idx + 2) === 0),
    furnishing: ['Unfurnished', 'Semi Furnished', 'Fully Furnished'][i % 3] as 'Unfurnished' | 'Semi Furnished' | 'Fully Furnished',
    floor: (i % 25) + 1,
    totalFloors: 25,
    facing: ['East', 'West', 'North', 'South', 'Sea Facing', 'Garden Facing'][i % 6],
    age: i % 20,
    ownership: i % 2 === 0 ? 'Freehold' : 'Leasehold',
    landmark: [
      'Near Metro Station',
      'Near Park',
      'Near Mall',
      'Near Hospital',
      'Near School',
      'Near Beach',
      'Near Market',
      'Near Highway',
      'Near Lake',
      'Near Temple'
    ][i % 10],
    nearbyPlaces: [
      'Metro Station',
      'Park',
      'Mall',
      'Hospital',
      'School',
      'Beach',
      'Market',
      'Highway',
      'Lake',
      'Temple'
    ].filter((_, idx) => i % (idx + 3) === 0),
    expectedRent: i % 5 === 0 ? 25000 + (i * 10) : undefined,
    securityDeposit: i % 5 === 0 ? 100000 + (i * 100) : undefined,
    maintenanceCharges: i % 5 === 0 ? 2000 + (i * 2) : undefined,
    availabilityDate: i % 5 === 0 ? '2024-04-01' : undefined,
    preferredTenants: i % 5 === 0 ? ['Family', 'Bachelor', 'Company'][i % 3] : undefined,
    contact: {
      name: `Agent ${i}`,
      phone: `+91 90000${i}`,
      email: `agent${i}@example.com`
    }
  });
}