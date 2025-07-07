import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, User, Menu, Search, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">99acres</Link>
            <div className="ml-4 hidden md:flex items-center gap-1 text-sm">
              <span className="text-primary font-medium">Buy in Western Mumbai</span>
              <ChevronDown className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              For Buyers
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              For Tenants
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              For Owners
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              For Dealers / Builders
            </a>
            <div className="flex items-center gap-1">
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">
                Insights
              </span>
              <span className="bg-secondary text-secondary-foreground text-xs px-1.5 py-0.5 rounded font-medium">
                NEW
              </span>
            </div>
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
            <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground cursor-pointer hover:text-foreground">
              <Globe className="h-4 w-4" />
              <span>EN</span>
              <ChevronDown className="h-3 w-3" />
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Login / Register</DropdownMenuItem>
                <DropdownMenuItem>My Activity</DropdownMenuItem>
                <DropdownMenuItem>Saved Properties</DropdownMenuItem>
                <DropdownMenuItem>My Requirements</DropdownMenuItem>
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
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                For Buyers
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                For Tenants
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                For Owners
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                For Dealers / Builders
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                Insights
              </a>
              <div className="pt-3 border-t">
                <Link to="/post-property" className="block">
                  <Button variant="hero" size="sm" className="w-full">
                    Post property FREE
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;