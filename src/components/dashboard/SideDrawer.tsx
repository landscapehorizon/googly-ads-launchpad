
import React from 'react';
import { Link } from 'react-router-dom';
import { X, LogOut, User, HelpCircle, MessageCircle } from 'lucide-react';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex">
      <div className="bg-black bg-opacity-50 w-full" onClick={onClose}></div>
      <div className="bg-white w-64 shadow-xl transform transition-transform animate-fade-in">
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold">Menu</span>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard/account" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md text-sm">
                <User size={16} className="mr-2" />
                Account
              </Link>
            </li>
            <li>
              <Link to="/dashboard/faq" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md text-sm">
                <HelpCircle size={16} className="mr-2" />
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/dashboard/support" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md text-sm">
                <MessageCircle size={16} className="mr-2" />
                Support
              </Link>
            </li>
            <li className="border-t mt-4 pt-4">
              <Link to="/logout" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md text-sm text-red-600">
                <LogOut size={16} className="mr-2" />
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
