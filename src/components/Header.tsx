
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b">
      <div className="googly-container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-googly-blue to-googly-purple">
            Twelve Tribe
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-googly-blue transition-colors">
            Home
          </Link>
          <Link to="/add-ons" className="text-sm font-medium hover:text-googly-blue transition-colors">
            Add Ons
          </Link>
          <Link to="/faq" className="text-sm font-medium hover:text-googly-blue transition-colors">
            FAQ
          </Link>
          
          {/* Developer dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Developer View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Application Pages</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/" className="w-full">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/add-ons" className="w-full">Add Ons</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/faq" className="w-full">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/login" className="w-full">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/dashboard" className="w-full">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/admin" className="w-full">Admin Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Checkout Flow</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link to="/create" className="w-full">Create Ad</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/create/upload" className="w-full">Upload Assets</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/create/business" className="w-full">Business Details</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/create/keywords" className="w-full">Keyword Targeting</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/create/budget" className="w-full">Budget Setup</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/create/checkout" className="w-full">Checkout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link to="/create">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-b animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-sm font-medium hover:text-googly-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/add-ons"
              className="text-sm font-medium hover:text-googly-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Ons
            </Link>
            <Link
              to="/faq"
              className="text-sm font-medium hover:text-googly-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            
            {/* Mobile Developer Menu with expanded items */}
            <div className="mt-2 border-t pt-2">
              <p className="text-sm font-semibold mb-2">Developer View</p>
              <div className="space-y-2 pl-2">
                <p className="text-xs font-medium text-gray-500">Application Pages</p>
                <Link
                  to="/dashboard"
                  className="block text-sm hover:text-googly-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin"
                  className="block text-sm hover:text-googly-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
                <p className="text-xs font-medium text-gray-500 mt-2">Checkout Flow</p>
                <Link
                  to="/create"
                  className="block text-sm hover:text-googly-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Ad
                </Link>
                <Link
                  to="/create/upload"
                  className="block text-sm hover:text-googly-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Upload Assets
                </Link>
                <Link
                  to="/create/business"
                  className="block text-sm hover:text-googly-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Business Details
                </Link>
                <Link
                  to="/create/keywords"
                  className="block text-sm hover:text-googly-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Keyword Targeting
                </Link>
                <Link
                  to="/create/budget"
                  className="block text-sm hover:text-googly-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Budget Setup
                </Link>
                <Link
                  to="/create/checkout"
                  className="block text-sm hover:text-googly-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Checkout
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </Link>
              <Link to="/create" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
