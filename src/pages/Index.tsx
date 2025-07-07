import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import UserDashboard from "@/components/UserDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <FeaturedProjects />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <UserDashboard />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;