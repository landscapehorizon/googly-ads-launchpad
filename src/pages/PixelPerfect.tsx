
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, TrendingUp, Link as LinkIcon, BarChart2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PixelPerfect = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Pixel Perfect</h1>
            <p className="text-xl max-w-2xl">
              Track your Google Ads performance with precision using our easy-to-implement tracking solution
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Use Pixel Perfect?</h2>
              <p className="text-gray-600 mb-6">
                Our Pixel Perfect tracking solution helps you understand how your Google Ads 
                campaigns are performing, allowing you to make data-driven decisions to 
                improve your return on ad spend.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Easy Implementation</h3>
                    <p className="text-gray-600">
                      Simple one-time setup with our step-by-step guide. No technical knowledge required.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Comprehensive Metrics</h3>
                    <p className="text-gray-600">
                      Track conversions, clicks, impressions, and more to understand your campaign performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Real-time Reporting</h3>
                    <p className="text-gray-600">
                      Access your performance data in real-time through your dashboard.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Only $14.99 per month</h3>
                <p className="text-gray-600 mb-6">
                  Gain valuable insights into your advertising performance for less than $0.50 per day.
                </p>
                <Link to="/pixel-perfect/checkout">
                  <Button size="lg">
                    Subscribe Now
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 text-purple-500" />
                    Conversion Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Automatically track form submissions, button clicks, and other important 
                    user actions to understand which ads are driving results.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LinkIcon className="mr-2 text-purple-500" />
                    Easy Installation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Simply add a small snippet of code to your website once, and our pixel will 
                    handle the rest. We provide detailed instructions for all major website platforms.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="mr-2 text-purple-500" />
                    Detailed Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Access comprehensive reports on user behavior, conversion rates, 
                    and campaign performance directly in your dashboard.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PixelPerfect;
