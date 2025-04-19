
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-googly-blue hover:bg-googly-dark-blue shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="text-white" size={24} />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-fade-in">
          <div className="bg-googly-blue p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-googly-blue font-bold">G</span>
              </div>
              <h3 className="text-white font-medium">Chat with Googly</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-googly-dark-blue"
            >
              <X size={18} />
            </Button>
          </div>
          
          <div className="h-80 p-4 overflow-y-auto border-b">
            <div className="mb-4">
              <div className="bg-googly-light-blue p-3 rounded-lg inline-block max-w-xs">
                <p className="text-sm">
                  Hi there! I'm Googly, your friendly AI assistant. How can I help you with your Google Ads today?
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-googly-blue"
              />
              <Button className="rounded-l-none">Send</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
