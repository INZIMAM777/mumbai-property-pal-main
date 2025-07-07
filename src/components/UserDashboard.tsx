import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  TrendingUp,
  Building,
  ArrowRight
} from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="space-y-4">
      {/* Guest User Card */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium">Guest User</h3>
              <p className="text-sm text-muted-foreground">Your Recent Activity</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <p className="text-sm text-muted-foreground">
              No activity yet! Start browsing properties and projects and track them from here.
            </p>
          </div>

          <Button variant="secondary" size="lg" className="w-full mb-2">
            LOGIN / REGISTER
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            to access all the features on 99acres
          </p>
        </CardContent>
      </Card>

      {/* Investment Card */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="h-12 w-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-black" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold mb-1">InvestAcres</h3>
              <p className="text-sm text-slate-300 mb-1">
                Your investment journey begins here
              </p>
              <div className="text-xs text-slate-400 mb-3">
                <div>✓ 2X RETURNS WITH COMMERCIAL</div>
                <div>✓ EXPERT OPTIONS</div>
              </div>
              <Button 
                size="sm" 
                className="bg-white text-black hover:bg-gray-200 text-xs px-3 py-1 h-auto"
              >
                Visit Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Cities */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">View top cities</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="font-medium">Top Cities</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div>Delhi NCR</div>
              <div>Mumbai</div>
              <div>Noida</div>
              <div>Bangalore</div>
              <div>Gurgaon</div>
              <div>Hyderabad</div>
              <div>Thane</div>
              <div>Faridabad</div>
              <div>Ghaziabad</div>
              <div>Navi Mumbai</div>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-sm">Popular Cities</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div>Chennai</div>
              <div>Pune</div>
              <div>Kolkata</div>
              <div>Ahmedabad</div>
              <div>Chandigarh</div>
              <div>Lucknow</div>
              <div>Jaipur</div>
              <div>Indore</div>
              <div>Surat</div>
              <div>Kanpur</div>
              <div>Nagpur</div>
              <div>Bhopal</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* For Buyers */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-3 flex items-center gap-2">
            <Building className="h-4 w-4" />
            For Buyers
          </h3>
          <div className="space-y-2 text-sm">
            <div className="text-muted-foreground">BUY A HOME</div>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>PROPERTIES IN WESTERN MUMBAI</div>
              <div>Flats</div>
              <div>Builder Floors</div>
              <div>Independent House</div>
              <div>Plots in Western Mumbai</div>
              <div>Studio Apartments/1 RK Flats</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;