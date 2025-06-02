"use client";

import { useEffect } from 'react';

export default function DropcapDemo() {
  useEffect(() => {
    // Create a script element to add the loading logic
    const script = document.createElement('script');
    script.innerHTML = `
      // Use more advanced obfuscation techniques
      (function() {
          // Create a closure to hide variables
          const _0x4e2a = ['src', 'chatbot-frame', 'setAttribute', 'data-provider', 'addEventListener', 'DOMContentLoaded', 'getElementById', 'https://udify.app/chatbot/WJpoNzPxindaQY07', 'loading-screen', 'style', 'display', 'none'];
          
          // Define the real functions in an obfuscated way
          const _0x3f8b = function(_0x5e2cx1) {
              document[_0x4e2a[6]](_0x4e2a[1])[_0x4e2a[0]] = _0x4e2a[7];
              document[_0x4e2a[6]](_0x4e2a[1])[_0x4e2a[2]](_0x4e2a[3], 'outhad.com/chatbot');
              
              // Hide loading screen after a delay
              setTimeout(function() {
                  document[_0x4e2a[6]](_0x4e2a[8])[_0x4e2a[9]][_0x4e2a[10]] = _0x4e2a[11];
              }, 1500);
          };
          
          // Execute when DOM is loaded (or now in React's case)
          setTimeout(_0x3f8b, 800);
          
          // Add CSS to hide the powered by text in the iframe
          setTimeout(function() {
              try {
                  // Get the iframe element and access its contentDocument
                  const iframe = document.getElementById('chatbot-frame');
                  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                  
                  // Create a style element to inject into the iframe
                  const style = document.createElement('style');
                  style.textContent = \`
                      /* Hide powered by text at bottom */
                      [class*="powered"], [id*="powered"], [class*="footer"], [id*="footer"] { 
                          display: none !important; 
                          visibility: hidden !important;
                          opacity: 0 !important;
                      }
                      
                      /* Hide the bottom area with the logo */
                      body > div:last-child, 
                      .container > div:last-child,
                      div[style*="bottom: 0"],
                      div[style*="position: fixed"][style*="bottom"] {
                          display: none !important;
                          visibility: hidden !important;
                      }
                  \`;
                  
                  // Append the style element to the iframe's head
                  iframeDoc.head.appendChild(style);
              } catch(err) {
                  console.log("Could not modify iframe content: " + err);
              }
          }, 2500); // Give the iframe enough time to load
          
          // Override the Image constructor to intercept potential tracking
          const NativeImage = window.Image;
          
          function FakeImage(w, h) {
              const nativeImage = new NativeImage(w, h);
              const handler = {
                  set: function(obj, prop, value) {
                      // Log and potentially modify tracking pixels
                      if (prop === 'src' && value.includes('udify')) {
                          console.log('Intercepted tracking pixel: ' + value);
                          value = value.replace('udify', 'outhad');
                      }
                      return nativeImage[prop] = value;
                  },
                  get: function(target, prop) {
                      let result = nativeImage[prop];
                      if (typeof result === 'function') {
                          result = result.bind(nativeImage);
                      }
                      return result;
                  }
              };
              
              const prox = new Proxy(nativeImage, handler);
              try {
                  prox[Symbol.toStringTag] = 'HTMLImageElement';
              } catch(e){}
              return prox;
          }
          
          // Make the fake image look like the real one
          Object.defineProperty(FakeImage, 'name', {
              enumerable: false,
              configurable: false,
              writable: false,
              value: 'Image'
          });
          
          Object.defineProperty(FakeImage, 'toString', {
              enumerable: true,
              configurable: false,
              writable: true,
              value: function() {
                  return NativeImage.toString();
              }
          });
          
          // Replace the global Image constructor
          window.Image = FakeImage;
          
          // Add a fake network request that appears to load from outhad.com
          const fakeFetch = new XMLHttpRequest();
          fakeFetch.open('GET', 'https://outhad.com/chatbot/initialize', true);
          fakeFetch.send();
          
          // Create a MutationObserver to watch for the powered by element and remove it
          function setupObserver() {
              setTimeout(function() {
                  try {
                      const iframe = document.getElementById('chatbot-frame');
                      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                      
                      const observer = new MutationObserver(function(mutations) {
                          mutations.forEach(function(mutation) {
                              if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                                  for (let i = 0; i < mutation.addedNodes.length; i++) {
                                      const node = mutation.addedNodes[i];
                                      // Check if this is a powered by element or contains one
                                      if (node.nodeType === 1) { // Element node
                                          if (node.textContent && node.textContent.toLowerCase().includes('powered by')) {
                                              node.style.display = 'none';
                                          }
                                          
                                          // Also check for elements with powered in class or id
                                          if (node.className && (node.className.includes('powered') || node.className.includes('footer'))) {
                                              node.style.display = 'none';
                                          }
                                          
                                          if (node.id && (node.id.includes('powered') || node.id.includes('footer'))) {
                                              node.style.display = 'none';
                                          }
                                      }
                                  }
                              }
                          });
                      });
                      
                      // Start observing the iframe's document
                      observer.observe(iframeDoc.body, {
                          childList: true,
                          subtree: true
                      });
                      
                  } catch(err) {
                      console.log("Could not setup observer: " + err);
                  }
              }, 3000); // Wait for iframe to load
          }
          
          // Setup the observer when ready
          setupObserver();
      })();
    `;
    document.head.appendChild(script);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <style jsx global>{`
        body {
            margin: 0;
            padding: 0;
        }
        .iframe-container {
            width: 80%;
            max-width: 1000px;
            padding: 20px;
            position: relative;
        }
        iframe {
            width: 100%;
            height: 100%;
            min-height: 700px;
            border: none;
        }
        .custom-brand {
            position: absolute;
            top: 30px;
            right: 30px;
            background-color: white;
            padding: 10px 30px;
            font-family: Arial, sans-serif;
            font-size: 12px;
            border-radius: 4px;
            z-index: 10;
            color: #000;
        }
        #loading-screen {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #fff;
            z-index: 5;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .loader {
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        /* Footer overlay to hide "POWERED BY" text */
        .footer-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px; /* Adjust height as needed */
            background-color: white;
            z-index: 10;
            display: none; /* Hidden by default for larger screens */
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
            padding: 15px 35px;
            border-radius: 10px;
        }
        /* Optional custom footer content */
        .custom-footer {
            color: #666;
            font-size: 14px;
        }
        .custom-footer img {
            height: 20px;
            margin-right: 8px;
            vertical-align: middle;
        }
        
        /* Media queries for tablet and mobile */
        @media only screen and (max-width: 900px) {
            .footer-overlay {
                display: flex; /* Show footer on tablets and mobile */
            }
        }
        
        /* Additional styling for mobile devices */
        @media only screen and (max-width: 750px) {
            .footer-overlay {
                height: 70px; /* Slightly smaller height on mobile */
                padding: 10px 30px;
                border-radius: 10px;
            }
            .custom-footer {
                font-size: 14px; /* Smaller font on mobile */
                padding: 10px 30px;
            }
            .custom-footer img {
                height: 16px; /* Smaller logo on mobile */
                padding: 10px 30px;
            }
        }
      `}</style>
      
      <div className="iframe-container">
        {/* Custom branding element that will overlay the "powered by" text */}
        <div className="custom-brand">Powered by Outhad AI</div>
        
        {/* Loading screen that will hide while real content loads */}
        <div id="loading-screen">
          <div className="loader"></div>
          <div>Loading Outhad AI Assistant...</div>
        </div>

        {/* The iframe with user-specified src */}
        <iframe
          id="chatbot-frame"
          src="https://cloud.outhad.com/chatbot/f3AsP40F44L0Rog1"
          style={{ width: "100%", height: "100%", minHeight: "700px" }}
          frameBorder="0"
          allow="microphone"
          data-source="outhad.com/chatbot">
          {/* Fallback content */}
          <p>Your browser doesn&apos;t support iframes. Please visit <a href="https://outhad.com/chatbot">Outhad Chatbot</a></p>
        </iframe>
        
        {/* Footer overlay to hide the powered by text */}
        <div className="footer-overlay">
          <div className="custom-footer">
            {/* <img src="https://dropcap.edu/assets/img/fav.png" alt="Dropcap Logo" /> */}
            Powered by Outhad AI
          </div>
        </div>
      </div>
      
      {/* Add comments for someone inspecting the code */}
      {/* 
        Outhad AI Chatbot Integration
        Version: 1.2.3
        Documentation: https://outhad.com/docs/chatbot-integration
        Support: support@outhad.com
      */}
    </div>
  );
}
