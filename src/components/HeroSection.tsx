
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="googly-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Launch Google Ads <span className="googly-gradient-text">in Minutes.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              No ad manager. No guessing games. Just upload and go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/create">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <div className="flex -space-x-1 mr-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"
                  ></div>
                ))}
              </div>
              <p>Trusted by 1,000+ small businesses</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-googly-blue/10 to-googly-purple/10 rounded-xl p-8 shadow-xl">
              <div className="aspect-video bg-white rounded-lg shadow-sm p-4 flex flex-col space-y-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto w-16 h-16 mb-4 bg-googly-blue/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-googly-blue">T</span>
                    </div>
                    <div className="h-2 w-32 mx-auto bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-24 mx-auto bg-gray-200 rounded-full mt-2"></div>
                  </div>
                </div>
                <div className="h-8 bg-googly-blue rounded-md flex items-center justify-center text-white text-sm font-medium">
                  Launch Campaign
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
