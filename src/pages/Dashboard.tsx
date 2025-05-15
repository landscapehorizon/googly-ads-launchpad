
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Menu, X, LogOut, User, HelpCircle, MessageCircle, 
  Upload, Clock, Check, BarChart, Plus
} from 'lucide-react';
import ChatBot from '@/components/ChatBot';

interface Document {
  id: string;
  type: string;
  status: string;
}

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showVerificationOverlay, setShowVerificationOverlay] = useState(true);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleDocumentUpload = () => {
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setSelectedDocument({
        id: 'doc-' + Date.now(),
        type: 'W-9',
        status: 'pending'
      });
    }, 1500);
  };

  const handleSubmitVerification = () => {
    // In a real app, you would submit the document to your backend
    if (selectedDocument) {
      setTimeout(() => {
        setShowVerificationOverlay(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setShowDrawer(true)}
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
      
      {/* Drawer Navigation */}
      {showDrawer && (
        <div className="fixed inset-0 z-30 flex">
          <div className="bg-black bg-opacity-50 w-full" onClick={() => setShowDrawer(false)}></div>
          <div className="bg-white w-64 shadow-xl transform transition-transform animate-fade-in">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold">Menu</span>
              <button onClick={() => setShowDrawer(false)}>
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
      )}
      
      {/* Verification Overlay */}
      {showVerificationOverlay && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full m-4 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Verification Required</h2>
            <p className="text-gray-600 mb-4">
              Google Ads requires a verification process before allowing advertising across their network. 
              Please upload one of the following documents:
            </p>
            <ul className="mb-4 ml-5 list-disc text-gray-600">
              <li>W-9 form</li>
              <li>IRS-issued document with business name, address, and EIN</li>
              <li>Driver's License (front and back JPG images)</li>
            </ul>
            
            {selectedDocument ? (
              <div className="bg-gray-50 p-3 rounded-md border mb-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                      <Upload size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{selectedDocument.type}</p>
                      <p className="text-xs text-gray-500">
                        Status: {selectedDocument.status === 'pending' ? 'Ready to submit' : selectedDocument.status}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedDocument(null)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-4">
                <Button
                  onClick={handleDocumentUpload}
                  variant="outline"
                  className="w-full justify-center"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Upload Document'}
                </Button>
              </div>
            )}
            
            <Button 
              className="w-full" 
              disabled={!selectedDocument} 
              onClick={handleSubmitVerification}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
      
      {/* Main Dashboard Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Dashboard Welcome */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Welcome to your dashboard!</h1>
            <p className="text-gray-600">
              Track your campaigns, launch new ads, and monitor performance all in one place.
            </p>
          </div>
          
          {/* Promotional Banner */}
          <div className="bg-gradient-to-r from-googly-blue to-googly-purple rounded-lg p-4 mb-8 text-white">
            <div className="flex items-center">
              <span className="text-3xl mr-2">🔥</span>
              <p className="font-medium">
                Save 10% on your second ad, 15% on your third, 20% on four or more!
              </p>
            </div>
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="pending" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="pending">Pending Ads</TabsTrigger>
              <TabsTrigger value="published">Published Ads</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pending">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold">Ads Under Review</h2>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs flex items-center">
                    <Clock size={14} className="mr-1" />
                    In Progress
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="inline-flex mx-auto w-16 h-16 items-center justify-center bg-amber-100 text-amber-500 rounded-full mb-3">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-medium mb-2">Your Ad Campaign is Being Prepared</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We're setting up your campaign based on the information you provided. This usually takes 1-2 business days.
                  </p>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-1/3"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Est. completion: 2 days</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="published">
              <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
                <div className="inline-flex mx-auto w-16 h-16 items-center justify-center bg-gray-100 text-gray-400 rounded-full mb-3">
                  <Check size={24} />
                </div>
                <h3 className="font-medium mb-2">No Published Ads Yet</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Your ads will appear here once they've been reviewed and published.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="performance">
              <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
                <div className="inline-flex mx-auto w-16 h-16 items-center justify-center bg-gray-100 text-gray-400 rounded-full mb-3">
                  <BarChart size={24} />
                </div>
                <h3 className="font-medium mb-2">No Performance Data Yet</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Performance metrics will be available once your ads are live.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Launch New Ad Button */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold mb-1">Ready to Create Another Campaign?</h2>
                <p className="text-gray-600">
                  Launch a new ad to reach even more potential customers.
                </p>
              </div>
              <Link to="/create">
                <Button className="ml-4">
                  <Plus size={16} className="mr-2" />
                  Launch New Ad
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <ChatBot />
    </div>
  );
};

export default Dashboard;
