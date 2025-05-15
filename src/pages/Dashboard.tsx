
import React, { useState } from 'react';
import ChatBot from '@/components/ChatBot';
import TopNavigation from '@/components/dashboard/TopNavigation';
import SideDrawer from '@/components/dashboard/SideDrawer';
import VerificationOverlay from '@/components/dashboard/VerificationOverlay';
import DashboardContent from '@/components/dashboard/DashboardContent';

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showVerificationOverlay, setShowVerificationOverlay] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <TopNavigation onMenuClick={() => setShowDrawer(true)} />
      
      {/* Drawer Navigation */}
      <SideDrawer 
        isOpen={showDrawer} 
        onClose={() => setShowDrawer(false)} 
      />
      
      {/* Verification Overlay */}
      <VerificationOverlay 
        isOpen={showVerificationOverlay}
        onClose={() => setShowVerificationOverlay(false)}
      />
      
      {/* Main Dashboard Content */}
      <main className="flex-1">
        <DashboardContent />
      </main>
      
      <ChatBot />
    </div>
  );
};

export default Dashboard;
