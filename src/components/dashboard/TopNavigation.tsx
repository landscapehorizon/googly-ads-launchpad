
import React from 'react';
import { Menu, User } from 'lucide-react';

interface TopNavigationProps {
  onMenuClick: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="mr-4 text-gray-700 hover:text-googly-blue transition-colors"
          >
            <Menu size={24} />
          </button>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-googly-blue to-googly-purple">
            Twelve Tribe
          </span>
        </div>
        
        <div className="flex items-center">
          <div className="w-8 h-8 bg-googly-light-blue rounded-full flex items-center justify-center">
            <User size={16} className="text-googly-blue" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
