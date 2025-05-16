
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
