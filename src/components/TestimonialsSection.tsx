
import React from 'react';

const testimonials = [
  {
    quote: "I was spending hours trying to figure out Google Ads. With iamgoogly.ai, I launched my first campaign in 10 minutes. The results were immediate!",
    author: "Sarah T.",
    role: "Boutique Owner",
    avatar: null
  },
  {
    quote: "As a solo entrepreneur, I don't have time to become an ads expert. This platform made it ridiculously simple to get my services in front of the right people.",
    author: "Michael R.",
    role: "Consultant",
    avatar: null
  },
  {
    quote: "The flat fee structure is so refreshing. No more guessing how much I'm really paying. Plus, the performance has been fantastic!",
    author: "Jessica M.",
    role: "Real Estate Agent",
    avatar: null
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="googly-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="googly-gradient-text">Real Results</span> From Real Businesses
          </h2>
          <p className="text-gray-600">
            Here's what our customers are saying about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border relative"
            >
              <div className="absolute -top-3 -left-3 text-5xl text-googly-blue opacity-20">"</div>
              <div className="mb-6 pt-4">
                <p className="text-gray-700 italic relative z-10">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-googly-light-blue rounded-full flex items-center justify-center mr-3">
                  <span className="text-googly-blue font-medium">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
