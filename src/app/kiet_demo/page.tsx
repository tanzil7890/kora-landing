"use client";

import { useEffect } from 'react';

// Extend the Window interface to include outhadChatbotConfig
declare global {
  interface Window {
    outhadChatbotConfig: {
      token: string;
      baseUrl: string;
    };
  }
}

export default function KietDemo() {
  useEffect(() => {
    // Set up the chatbot configuration
    window.outhadChatbotConfig = {
      token: 'f3AsP40F44L0Rog1',
      baseUrl: 'https://cloud.outhad.com'
    };

    // Create and add the embed script
    const script = document.createElement('script');
    script.src = 'https://cloud.outhad.com/embed.min.js';
    script.id = 'f3AsP40F44L0Rog1';
    script.defer = true;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById('f3AsP40F44L0Rog1');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        #outhad-chatbot-bubble-button {
          background-color: #1C64F2 !important;
        }
        #outhad-chatbot-bubble-window {
          width: 24rem !important;
          height: 40rem !important;
        }
      `}</style>
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="w-full max-w-6xl h-[80vh] min-h-[600px] shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://cloud.outhad.com/chatbot/f3AsP40F44L0Rog1"
            style={{ width: "100%", height: "100%" }}
            frameBorder="0"
            allow="microphone">
          </iframe>
        </div>
        <div className="mt-4 text-gray-600 text-sm font-medium">
          Powered by Outhad AI
        </div>
      </div>
    </>
  );
}
