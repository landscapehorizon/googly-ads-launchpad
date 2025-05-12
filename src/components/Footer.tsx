
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-12 pb-8">
      <div className="googly-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-googly-blue to-googly-purple">
              twelvetribe.com
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Launch Google Ads in minutes. No ad manager. No guessing games. Just upload and go.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-googly-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-googly-blue transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-googly-blue transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-googly-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-600 hover:text-googly-blue transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-googly-blue transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-googly-blue transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-googly-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-600 hover:text-googly-blue transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Twelve Tribe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
