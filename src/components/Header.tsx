import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, User, Menu, Search, Globe, Building2, Heart, FileText, Activity } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">99acres</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-4 hidden md:flex items-center gap-1 text-sm">
                <span className="text-primary font-medium">Mumbai Real Estate</span>
                <ChevronDown className="h-4 w-4 text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Popular Localities</DropdownMenuLabel>
                <DropdownMenuItem onSelect={() => navigate("/search?location=andheri-west")}>Andheri West</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/search?location=bandra-west")}>Bandra West</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/search?location=worli")}>Worli</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Property Type</DropdownMenuLabel>
                <DropdownMenuItem onSelect={() => navigate("/buy")}>Buy Properties</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/rent")}>Rent Properties</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/post-property")}>Sell Properties</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
                For Buyers
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Residential</DropdownMenuLabel>
                  <DropdownMenuItem onSelect={() => navigate("/buy?type=apartment")}>Apartments</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => navigate("/buy?type=villa")}>Villas & Bungalows</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => navigate("/buy?type=plot")}>Plots & Land</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Commercial</DropdownMenuLabel>
                  <DropdownMenuItem onSelect={() => navigate("/buy?type=office")}>Office Space</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => navigate("/buy?type=shop")}>Shops & Retail</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
                For Tenants
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Residential</DropdownMenuLabel>
                  <DropdownMenuItem onSelect={() => navigate("/rent?type=apartment")}>Apartments</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => navigate("/rent?type=villa")}>Villas & Bungalows</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => navigate("/rent?type=pg")}>PG & Co-living</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Commercial</DropdownMenuLabel>
                  <DropdownMenuItem onSelect={() => navigate("/rent?type=office")}>Office Space</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => navigate("/rent?type=shop")}>Shops & Retail</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
                For Owners
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => navigate("/post-property")} className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Post Property
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/activity")} className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  My Listings
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/requirements")} className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  View Responses
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/dealers" className="text-foreground hover:text-primary transition-colors">
              For Dealers / Builders
            </Link>

            <Link to="/insights" className="flex items-center gap-1">
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">
                Insights
              </span>
              <span className="bg-secondary text-secondary-foreground text-xs px-1.5 py-0.5 rounded font-medium">
                NEW
              </span>
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <Link to="/post-property">
              <Button variant="hero" size="sm" className="hidden sm:inline-flex text-sm px-4">
                Post property
                <span className="bg-success text-success-foreground text-xs px-1.5 py-0.5 rounded ml-2 font-medium">
                  FREE
                </span>
              </Button>
            </Link>
            
            {/* Language/Region */}
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden md:flex items-center gap-1 text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                <Globe className="h-4 w-4" />
                <span>EN</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>हिंदी</DropdownMenuItem>
                <DropdownMenuItem>मराठी</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Login / Register</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => navigate("/activity")} className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  My Activity
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/saved")} className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Saved Properties
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/requirements")} className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  My Requirements
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => navigate("/post-property")} className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Post Property FREE
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden h-8 w-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t space-y-4">
            <div className="space-y-3">
              <div className="px-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">For Buyers</div>
                <div className="space-y-2 pl-2">
                  <Link to="/buy?type=apartment" className="block text-sm text-foreground hover:text-primary transition-colors py-1">Apartments</Link>
                  <Link to="/buy?type=villa" className="block text-sm text-foreground hover:text-primary transition-colors py-1">Villas & Bungalows</Link>
                  <Link to="/buy?type=plot" className="block text-sm text-foreground hover:text-primary transition-colors py-1">Plots & Land</Link>
                  <Link to="/buy?type=office" className="block text-sm text-foreground hover:text-primary transition-colors py-1">Commercial</Link>
                </div>
              </div>

              <div className="px-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">For Tenants</div>
                <div className="space-y-2 pl-2">
                  <Link to="/rent?type=apartment" className="block text-sm text-foreground hover:text-primary transition-colors py-1">Apartments</Link>
                  <Link to="/rent?type=villa" className="block text-sm text-foreground hover:text-primary transition-colors py-1">Villas & Bungalows</Link>
                  <Link to="/rent?type=pg" className="block text-sm text-foreground hover:text-primary transition-colors py-1">PG & Co-living</Link>
                  <Link to="/rent?type=office" className="block text-sm text-foreground hover:text-primary transition-colors py-1">Commercial</Link>
                </div>
              </div>

              <div className="px-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Quick Links</div>
                <div className="space-y-2 pl-2">
                  <Link to="/dealers" className="block text-sm text-foreground hover:text-primary transition-colors py-1">For Dealers / Builders</Link>
                  <Link to="/insights" className="block text-sm text-foreground hover:text-primary transition-colors py-1">Market Insights</Link>
                  <Link to="/saved" className="block text-sm text-foreground hover:text-primary transition-colors py-1">Saved Properties</Link>
                  <Link to="/requirements" className="block text-sm text-foreground hover:text-primary transition-colors py-1">My Requirements</Link>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t px-2">
              <Link to="/post-property" className="block">
                <Button variant="hero" size="sm" className="w-full">
                  Post property FREE
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;