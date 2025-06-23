import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { ArrowRight, Info } from 'lucide-react';

const steps = [
  "Account Setup",
  "Upload Assets",
  "Business Details",
  "Keyword Targeting",
  "Budget Setup",
  "Checkout"
];

const BusinessDetails = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [brandName, setBrandName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [hoursOpen, setHoursOpen] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/create/keywords');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="googly-container py-8">
          <StepIndicator currentStep={currentStep} steps={steps} />
          
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 border">
            <h1 className="text-2xl font-bold mb-6">Business Details</h1>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="brandName">Brand Name</Label>
                <Input
                  id="brandName"
                  placeholder="Your Business Name"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Label htmlFor="description">What do you sell or promote?</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info size={16} className="text-gray-400 ml-1 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Google Ads does not permit advertising that includes illegal products or services, dangerous or dishonest behavior, inappropriate content, or violations of user privacy and data policies.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Textarea
                  id="description"
                  placeholder="Describe your products or services in a few sentences..."
                  className="min-h-[100px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="website">Website or Landing Page URL</Label>
                <Input
                  id="website"
                  placeholder="https://your-website.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="businessAddress">Business Address (if applicable)</Label>
                <Textarea
                  id="businessAddress"
                  placeholder="Enter your business address (optional)"
                  className="min-h-[80px]"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">
                  This information will appear in your Business Profile ads.
                </p>
              </div>
              
              <div>
                <Label htmlFor="hoursOpen">Hours of Operation (Optional)</Label>
                <Input
                  id="hoursOpen"
                  placeholder="e.g., Mon-Fri: 9am-5pm, Sat: 10am-2pm"
                  value={hoursOpen}
                  onChange={(e) => setHoursOpen(e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">
                  This information will appear in your Business Profile ads.
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => navigate('/create/upload')}>
                  Back
                </Button>
                <Button onClick={handleNext}>
                  Next Step <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default BusinessDetails;
