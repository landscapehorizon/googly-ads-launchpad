
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Check, BarChart, Plus, TrendingUp } from 'lucide-react';

const DashboardContent: React.FC = () => {
  // Mock state to track if the user has subscribed to Pixel Perfect
  const [hasPixelSubscription] = useState(false);

  return (
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
          {hasPixelSubscription && (
            <TabsTrigger value="pixel">Pixel Metrics</TabsTrigger>
          )}
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
        
        {hasPixelSubscription && (
          <TabsContent value="pixel">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-bold mb-4">Pixel Perfect Metrics</h2>
              <p className="text-gray-600 mb-6">
                Track how users interact with your website after clicking on your ads.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Visitors</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">0</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Conversions</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">0</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Conversion Rate</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">0%</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 mb-2">
                  No data available yet. Make sure your pixel is installed correctly.
                </p>
                <Button variant="outline" size="sm">
                  Installation Guide
                </Button>
              </div>
            </div>
          </TabsContent>
        )}
      </Tabs>
      
      {/* Pixel Perfect Upsell (shown only if not subscribed) */}
      {!hasPixelSubscription && (
        <div className="mb-8 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg border border-purple-200 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-bold mb-2">Upgrade to Pixel Perfect</h2>
              <p className="text-gray-600">
                Track how users interact with your website after clicking on your ads.
                Get detailed metrics and improve your ad performance.
              </p>
              <p className="font-medium text-purple-600 mt-2">
                Only $14.99 per month
              </p>
            </div>
            <Link to="/pixel-perfect">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <TrendingUp size={16} className="mr-2" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      )}
      
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
  );
};

export default DashboardContent;
