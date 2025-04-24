
import { useState } from 'react';

const DebugInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const debugInfo = {
    publicURL: window.location.origin + window.location.pathname,
    baseHref: document.querySelector('base')?.getAttribute('href') || 'No base tag',
    currentPath: window.location.pathname,
    currentHash: window.location.hash,
    windowLocation: window.location.toString(),
    userAgent: navigator.userAgent,
  };

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
