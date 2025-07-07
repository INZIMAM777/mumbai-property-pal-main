import { Building, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">99acres</span>
            </div>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              India's No. 1 Property Portal. Find properties for sale and rent in India. 
              Search from millions of properties across India on 99acres.com.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Buy */}
          <div>
            <h3 className="font-semibold text-white mb-4">BUY</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">Apartments in Mumbai</a></li>
              <li><a href="#" className="hover:text-white">Flats in Mumbai</a></li>
              <li><a href="#" className="hover:text-white">Houses in Delhi</a></li>
              <li><a href="#" className="hover:text-white">Apartments in Bangalore</a></li>
              <li><a href="#" className="hover:text-white">Flats in Pune</a></li>
              <li><a href="#" className="hover:text-white">Properties in Gurgaon</a></li>
              <li><a href="#" className="hover:text-white">Apartments in Noida</a></li>
            </ul>
          </div>

          {/* Rent */}
          <div>
            <h3 className="font-semibold text-white mb-4">RENT</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">Flats for Rent in Mumbai</a></li>
              <li><a href="#" className="hover:text-white">Flats for Rent in Delhi</a></li>
              <li><a href="#" className="hover:text-white">Flats for Rent in Bangalore</a></li>
              <li><a href="#" className="hover:text-white">Flats for Rent in Pune</a></li>
              <li><a href="#" className="hover:text-white">Flats for Rent in Chennai</a></li>
              <li><a href="#" className="hover:text-white">Flats for Rent in Hyderabad</a></li>
              <li><a href="#" className="hover:text-white">Flats for Rent in Kolkata</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
              <li><a href="#" className="hover:text-white">Unsubscribe</a></li>
              <li><a href="#" className="hover:text-white">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Top Cities Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <h3 className="font-semibold text-white mb-4">PROPERTIES BY TOP CITIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Mumbai Property</a>
            <a href="#" className="hover:text-white">Delhi Property</a>
            <a href="#" className="hover:text-white">Bangalore Property</a>
            <a href="#" className="hover:text-white">Pune Property</a>
            <a href="#" className="hover:text-white">Chennai Property</a>
            <a href="#" className="hover:text-white">Hyderabad Property</a>
            <a href="#" className="hover:text-white">Kolkata Property</a>
            <a href="#" className="hover:text-white">Gurgaon Property</a>
            <a href="#" className="hover:text-white">Noida Property</a>
            <a href="#" className="hover:text-white">Ghaziabad Property</a>
            <a href="#" className="hover:text-white">Faridabad Property</a>
            <a href="#" className="hover:text-white">Ahmedabad Property</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <p className="text-xs text-slate-400 leading-relaxed">
            Disclaimer: 99acres.com is not involved in any transaction between users and advertisers. 
            We are not responsible for any property deals and their consequences. All property information 
            and listings on 99acres.com are provided by property owners, dealers, builders, or their 
            authorized representatives.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© 2024 99acres.com. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-white">Help</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;