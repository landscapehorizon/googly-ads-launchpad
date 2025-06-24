
import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { PieChart, Settings, Home, HelpCircle, LogOut } from 'lucide-react';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-64 p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Twelve Tribe</h2>
            <p className="text-sm text-muted-foreground">Advertising Platform</p>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" onClick={onClose}>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/campaigns" onClick={onClose}>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <PieChart className="mr-2 h-4 w-4" />
                    Campaigns
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/settings" onClick={onClose}>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/admin" onClick={onClose}>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <Settings className="mr-2 h-4 w-4" />
                    Admin Panel
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <ul className="space-y-2">
              <li>
                <Link to="/help" onClick={onClose}>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Help & Support
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={onClose}>
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600" size="sm">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawer;
