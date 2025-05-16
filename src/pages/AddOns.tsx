
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AddOns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-2">Add-On Products</h1>
          <p className="text-gray-600 mb-8">
            Enhance your advertising experience with our premium add-on products
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pixel Perfect Card */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Pixel Perfect</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Track your Google Ads performance with our easy to implement tracking pixel
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold">$14.99</span>
                  <span className="text-gray-500">per month</span>
                </div>
                <Link to="/pixel-perfect">
                  <Button className="w-full">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Placeholder for future add-ons */}
            <div className="border rounded-lg overflow-hidden shadow-sm bg-gray-50">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <h3 className="text-gray-400 text-xl font-bold">Coming Soon</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  More add-on products will be available soon
                </p>
                <div className="h-12 mt-11"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddOns;
