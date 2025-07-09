import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Building, IndianRupee, Home, Activity, Star, Clock, Users, Percent } from "lucide-react";

interface PriceData {
  area: string;
  currentPrice: number;
  change: number;
  trend: "up" | "down";
  rentalYield?: number;
  propertyCount: number;
  avgSize: number;
}

interface MarketInsight {
  title: string;
  description: string;
  date: string;
  category: string;
}

interface TransactionData {
  area: string;
  transactionCount: number;
  avgPrice: number;
  actualRate: number;
  propertyTypes: {
    type: string;
    percentage: number;
  }[];
  amenities: string[];
}

const priceData: PriceData[] = [
  {
    area: "Sion West",
    currentPrice: 38450,
    change: 48.7,
    trend: "up",
    rentalYield: 2.0,
    propertyCount: 245,
    avgSize: 850
  },
  {
    area: "Malvani",
    currentPrice: 20900,
    change: 45.1,
    trend: "up",
    propertyCount: 178,
    avgSize: 750
  },
  {
    area: "Sewri West",
    currentPrice: 53350,
    change: 43.8,
    trend: "up",
    propertyCount: 156,
    avgSize: 1200
  },
  {
    area: "Khetwadi",
    currentPrice: 44450,
    change: 42.2,
    trend: "up",
    propertyCount: 198,
    avgSize: 950
  },
  {
    area: "Mindspace",
    currentPrice: 36600,
    change: 36.6,
    trend: "up",
    rentalYield: 3.0,
    propertyCount: 312,
    avgSize: 1100
  },
  {
    area: "Powai",
    currentPrice: 34800,
    change: 32.5,
    trend: "up",
    rentalYield: 2.8,
    propertyCount: 285,
    avgSize: 980
  },
  {
    area: "Goregaon East",
    currentPrice: 25600,
    change: 28.4,
    trend: "up",
    rentalYield: 2.5,
    propertyCount: 342,
    avgSize: 850
  },
  {
    area: "Thane West",
    currentPrice: 19800,
    change: 25.6,
    trend: "up",
    rentalYield: 2.2,
    propertyCount: 456,
    avgSize: 750
  },
  {
    area: "Andheri East",
    currentPrice: 29500,
    change: 24.8,
    trend: "up",
    rentalYield: 2.6,
    propertyCount: 389,
    avgSize: 820
  },
  {
    area: "Borivali West",
    currentPrice: 23400,
    change: 23.2,
    trend: "up",
    rentalYield: 2.4,
    propertyCount: 278,
    avgSize: 790
  }
];

const transactionData: TransactionData[] = [
  {
    area: "Kandivali East",
    transactionCount: 1767,
    avgPrice: 28350,
    actualRate: 28244,
    propertyTypes: [
      { type: "2 BHK", percentage: 45 },
      { type: "3 BHK", percentage: 35 },
      { type: "1 BHK", percentage: 20 }
    ],
    amenities: ["Gym", "Swimming Pool", "Garden", "Security"]
  },
  {
    area: "Malad West",
    transactionCount: 948,
    avgPrice: 26700,
    actualRate: 22486,
    propertyTypes: [
      { type: "2 BHK", percentage: 50 },
      { type: "1 BHK", percentage: 30 },
      { type: "3 BHK", percentage: 20 }
    ],
    amenities: ["Garden", "Security", "Parking"]
  },
  {
    area: "Bhandup West",
    transactionCount: 884,
    avgPrice: 23200,
    actualRate: 17856,
    propertyTypes: [
      { type: "2 BHK", percentage: 55 },
      { type: "1 BHK", percentage: 25 },
      { type: "3 BHK", percentage: 20 }
    ],
    amenities: ["Security", "Parking", "Children's Play Area"]
  },
  {
    area: "Mulund West",
    transactionCount: 870,
    avgPrice: 27650,
    actualRate: 23563,
    propertyTypes: [
      { type: "2 BHK", percentage: 40 },
      { type: "3 BHK", percentage: 40 },
      { type: "1 BHK", percentage: 20 },
    ],
    amenities: ["Gym", "Garden", "Security", "Club House"]
  },
  {
    area: "Chembur",
    transactionCount: 762,
    avgPrice: 31850,
    actualRate: 25133,
    propertyTypes: [
      { type: "2 BHK", percentage: 45 },
      { type: "3 BHK", percentage: 35 },
      { type: "1 BHK", percentage: 20 }
    ],
    amenities: ["Swimming Pool", "Gym", "Garden", "Security"]
  }
];

// Place a single merged marketInsights array here, containing all unique entries from all previous arrays in the file.
const marketInsights: MarketInsight[] = [
  { title: "Latest Updates in Mumbai Real Estate", description: "33,392 New Apartments, 549 New Villas, and 524 New Independent Floors added this month.", date: "Jan 15, 2024", category: "New Launches" },
  { title: "Infrastructure Boost", description: "15 upcoming developments including metro expansions and coastal road project driving property values.", date: "Jan 10, 2024", category: "Infrastructure" },
  { title: "Market Performance", description: "Central Mumbai localities showing highest appreciation with 48.7% YoY growth in Sion West.", date: "Jan 5, 2024", category: "Market Trends" },
  { title: "Powai Emerges as Tech Hub", description: "Growing IT sector presence drives property demand, with 25% increase in commercial space absorption in Q2 2023.", date: "2 days ago", category: "Commercial" },
  { title: "Bandra West Luxury Market Booms", description: "High-net-worth individuals driving demand for luxury properties, with prices increasing by 18% YoY.", date: "1 week ago", category: "Luxury" },
  { title: "Thane Infrastructure Boost", description: "New metro line and road projects expected to improve connectivity, leading to 12% price appreciation.", date: "3 days ago", category: "Infrastructure" },
  { title: "Bandra West Luxury Market", description: "High-end properties see steady demand despite global economic slowdown", date: "1 week ago", category: "Luxury" },
  { title: "Thane Infrastructure Boost", description: "New metro line connecting Thane to Mumbai boosts property values by 18%", date: "3 days ago", category: "Infrastructure" },
  { title: "Metro Line 6 Impact", description: "Property prices along Swami Samarth Nagar-Vikhroli corridor show 15-20% appreciation.", date: "Dec 28, 2023", category: "Infrastructure" },
  { title: "Luxury Market Growth", description: "Premium properties in South Mumbai witness 40% surge in sales volume.", date: "Dec 25, 2023", category: "Market Trends" },
  { title: "Powai Emerges as Tech Hub", description: "Growing IT sector presence drives property demand, with 28% increase in rental enquiries.", date: "Jan 3, 2024", category: "Market Trends" }
];

const InsightsPage = () => {
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [selectedTab, setSelectedTab] = useState<string>("trends");

  const stats = [
    {
      title: "New Properties",
      value: "34,465",
      change: "+15.2%",
      icon: Building
    },
    {
      title: "Avg. Price/sqft",
      value: "₹32,500",
      change: "+4.2%",
      icon: IndianRupee
    },
    {
      title: "Rental Yield",
      value: "2.5%",
      change: "+0.3%",
      icon: Activity
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Mumbai Real Estate Insights</h1>
          
          <Select value={selectedArea} onValueChange={setSelectedArea}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Areas</SelectItem>
              <SelectItem value="central">Central Mumbai</SelectItem>
              <SelectItem value="western">Western Mumbai</SelectItem>
              <SelectItem value="south">South Mumbai</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                    <p className="text-sm text-emerald-600 mt-1">{stat.change} YoY</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="trends">Price Trends</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="insights">Market Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {priceData.map((data, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{data.area}</h4>
                          <p className="text-2xl font-bold mt-1">
                            ₹{data.currentPrice.toLocaleString()}/sqft
                          </p>
                          {data.rentalYield && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Rental Yield: {data.rentalYield}%
                            </p>
                          )}
                        </div>
                        <div className={`flex items-center gap-1 ${data.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                          {data.trend === 'up' ? (
                            <ArrowUpRight className="h-5 w-5" />
                          ) : (
                            <ArrowDownRight className="h-5 w-5" />
                          )}
                          <span className="font-medium">{Math.abs(data.change)}% YoY</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <p className="text-sm text-muted-foreground">Properties</p>
                          <p className="font-medium">{data.propertyCount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Avg. Size</p>
                          <p className="font-medium">{data.avgSize} sqft</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {transactionData.map((data, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{data.area}</h4>
                        <span className="text-sm text-muted-foreground">
                          {data.transactionCount} Transactions
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Listed Price</p>
                          <p className="text-lg font-bold">₹{data.avgPrice}/sqft</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Transaction Rate</p>
                          <p className="text-lg font-bold">₹{data.actualRate}/sqft</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Property Types</p>
                        <div className="space-y-2">
                          {data.propertyTypes.map((type, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                              <span className="text-sm">{type.type}</span>
                              <span className="text-sm text-muted-foreground">{type.percentage}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Common Amenities</p>
                        <div className="flex flex-wrap gap-2">
                          {data.amenities.map((amenity, idx) => (
                            <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {marketInsights.map((insight, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded">{insight.category}</span>
                      </div>
                      <h4 className="font-medium">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {insight.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default InsightsPage;
