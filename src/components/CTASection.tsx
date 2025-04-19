
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-googly-blue to-googly-purple">
      <div className="googly-container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Launch Your First Google Ad?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get your business in front of potential customers in minutes. No technical skills required.
          </p>
          <Link to="/create">
            <Button size="lg" className="bg-white text-googly-blue hover:bg-gray-100">
              Get Started Now <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
