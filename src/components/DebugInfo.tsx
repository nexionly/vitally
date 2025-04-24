
import { useState, useEffect } from 'react';

const DebugInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [debugInfo, setDebugInfo] = useState({});
  
  useEffect(() => {
    const info = {
      publicURL: window.location.origin + window.location.pathname,
      base: document.querySelector('base')?.getAttribute('href') || 'No base tag',
      currentPath: window.location.pathname,
      currentHash: window.location.hash,
      fullLocation: window.location.href,
      origin: window.location.origin,
      userAgent: navigator.userAgent,
      envMode: import.meta.env.MODE || 'unknown',
    };
    setDebugInfo(info);
    
    // Log debug info to console as well
    console.log("Debug Info:", info);
  }, [window.location.href]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={() => setIsVisible(!isVisible)} 
        className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm"
      >
        {isVisible ? 'Hide Debug' : 'Debug'}
      </button>
      
      {isVisible && (
        <div className="bg-white border shadow-lg rounded-md p-4 mt-2 max-w-md text-xs overflow-auto max-h-60">
          <h3 className="font-bold mb-2 text-sm">Debug Information</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(debugInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DebugInfo;
