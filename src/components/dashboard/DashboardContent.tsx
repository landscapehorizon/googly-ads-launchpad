

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Clock, Check, BarChart, Plus, Eye, MousePointer, DollarSign, Target, Calendar, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DashboardContent: React.FC = () => {
  // Mock published ads data
  const [publishedAds, setPublishedAds] = useState([
    {
      id: 1,
      title: "Best Pizza Delivery in Town",
      status: "active",
      isActive: true,
      createdDate: "2024-01-15",
      budget: "$50/day",
      impressions: 8430,
      clicks: 234,
      ctr: "2.78%",
      spent: "$142.50",
      location: "New York, NY"
    },
    {
      id: 2,
      title: "Fresh Organic Groceries",
      status: "active",
      isActive: true,
      createdDate: "2024-01-20",
      budget: "$35/day",
      impressions: 5670,
      clicks: 187,
      ctr: "3.30%",
      spent: "$98.20",
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      title: "Professional House Cleaning",
      status: "paused",
      isActive: false,
      createdDate: "2024-01-10",
      budget: "$25/day",
      impressions: 3240,
      clicks: 89,
      ctr: "2.75%",
      spent: "$67.80",
      location: "Chicago, IL"
    }
  ]);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [adToToggle, setAdToToggle] = useState<number | null>(null);
  const [immediateShutoff, setImmediateShutoff] = useState(false);
  const { toast } = useToast();

  const handleToggleAd = (adId: number, currentStatus: boolean) => {
    if (currentStatus) {
      // If ad is currently active and user wants to turn it off, show confirmation
      setAdToToggle(adId);
      setShowConfirmDialog(true);
    } else {
      // If ad is currently off and user wants to turn it on, activate immediately
      setPublishedAds(prev => prev.map(ad => 
        ad.id === adId 
          ? { ...ad, isActive: true, status: 'active' }
          : ad
      ));
      toast({
        title: "Ad Activated",
        description: "Your ad is now live and will start appearing across the Google network.",
      });
    }
  };

  const confirmToggleOff = () => {
    if (adToToggle) {
      setPublishedAds(prev => prev.map(ad => 
        ad.id === adToToggle 
          ? { ...ad, isActive: false, status: 'paused' }
          : ad
      ));
      
      const shutoffMessage = immediateShutoff 
        ? "Your ad has been immediately paused and is no longer appearing across the Google network."
        : "Your ad will continue running through the remainder of your payment cycle, then automatically turn off.";
      
      toast({
        title: "Ad Paused",
        description: shutoffMessage,
      });
    }
    setShowConfirmDialog(false);
    setAdToToggle(null);
    setImmediateShutoff(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to your dashboard!</h1>
        <p className="text-gray-600">
          Track your campaigns, launch new ads, and monitor performance all in one place.
        </p>
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
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Published Ads</h2>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs flex items-center">
                <Check size={14} className="mr-1" />
                {publishedAds.filter(ad => ad.isActive).length} Active
              </div>
            </div>
            
            <div className="space-y-4">
              {publishedAds.map((ad) => (
                <Card key={ad.id} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div>
                          <CardTitle className="text-base">{ad.title}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              Created {ad.createdDate}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {ad.location}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          ad.isActive 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {ad.isActive ? 'Active' : 'Paused'}
                        </div>
                        <div className="flex items-center space-x-2">
                          <label htmlFor={`ad-toggle-${ad.id}`} className="text-sm font-medium">
                            {ad.isActive ? 'On' : 'Off'}
                          </label>
                          <Switch
                            id={`ad-toggle-${ad.id}`}
                            checked={ad.isActive}
                            onCheckedChange={() => handleToggleAd(ad.id, ad.isActive)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Budget</p>
                        <p className="font-semibold">{ad.budget}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Impressions</p>
                        <p className="font-semibold">{ad.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Clicks</p>
                        <p className="font-semibold">{ad.clicks}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">CTR</p>
                        <p className="font-semibold">{ad.ctr}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Spent</p>
                        <p className="font-semibold">{ad.spent}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="performance">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Campaign Performance</h2>
              <div className="text-sm text-gray-500">Last 30 days</div>
            </div>
            
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Impressions</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,847</div>
                  <p className="text-xs text-green-600">+15.3% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clicks</CardTitle>
                  <MousePointer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">486</div>
                  <p className="text-xs text-green-600">+8.2% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.78%</div>
                  <p className="text-xs text-gray-500">Industry avg: 2.1%</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$234.56</div>
                  <p className="text-xs text-gray-500">of $300 budget</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Performance Summary */}
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-medium text-green-800 mb-2">🎯 Campaign Performance</h3>
                <p className="text-sm text-green-700">
                  Your ads are performing 79% better than industry average! Your click-through rate of 3.78% 
                  is significantly higher than the typical 2.1% for your industry.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Top Performing Keywords</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>local restaurant delivery</span>
                      <span className="text-green-600">4.2% CTR</span>
                    </div>
                    <div className="flex justify-between">
                      <span>best pizza near me</span>
                      <span className="text-green-600">3.9% CTR</span>
                    </div>
                    <div className="flex justify-between">
                      <span>food delivery service</span>
                      <span className="text-green-600">3.1% CTR</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Daily Performance Trend</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span>42 clicks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday</span>
                      <span>38 clicks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday</span>
                      <span>51 clicks</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>Today</span>
                      <span>47 clicks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Ready to Create Another Campaign Section - Moved to bottom */}
      <div className="mb-8 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg border border-purple-200 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Ready to Create Another Campaign?</h2>
            <p className="text-gray-600">
              Launch a new ad to reach even more potential customers.
            </p>
          </div>
          <Link to="/create/budget">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus size={16} className="mr-2" />
              Launch New Ad
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Turn Off Advertisement?</AlertDialogTitle>
            <AlertDialogDescription>
              Turning off this ad creative will stop the advertisement from appearing across the Google network. 
              You can turn it back on anytime.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="flex items-start space-x-2 py-4">
            <Checkbox 
              id="immediate-shutoff" 
              checked={immediateShutoff}
              onCheckedChange={(checked) => setImmediateShutoff(checked as boolean)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="immediate-shutoff"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Immediate shutdown
              </label>
              <p className="text-xs text-muted-foreground">
                When checkbox is enabled, this ad will immediately shut off. When left unchecked, the ad will run through the remainder of your payment cycle before turning off.
              </p>
            </div>
          </div>
          
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => {
              setShowConfirmDialog(false);
              setImmediateShutoff(false);
            }}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmToggleOff}>
              Turn Off Ad
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DashboardContent;

