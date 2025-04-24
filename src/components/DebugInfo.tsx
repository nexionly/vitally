
import { useState, useEffect } from 'react';

const DebugInfo = () => {
  const [isVisible, setIsVisible] = useState(true); // Default to visible for troubleshooting
  const [debugInfo, setDebugInfo] = useState<Record<string, any>>({});
  
  useEffect(() => {
    const gatherDebugInfo = () => {
      // Get all relevant information for debugging
      const info = {
        url: {
          href: window.location.href,
          origin: window.location.origin,
          pathname: window.location.pathname,
          hash: window.location.hash,
          search: window.location.search,
        },
        base: document.querySelector('base')?.getAttribute('href') || 'No base tag',
        meta: {
          viewport: document.querySelector('meta[name="viewport"]')?.getAttribute('content'),
          description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
        },
        scripts: Array.from(document.querySelectorAll('script')).map(s => ({
          src: s.getAttribute('src'),
          type: s.getAttribute('type'),
        })),
        styles: Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => ({
          href: l.getAttribute('href'),
        })),
        environment: {
          userAgent: navigator.userAgent,
          envMode: import.meta.env.MODE || 'unknown',
          isProd: import.meta.env.PROD,
          isDev: import.meta.env.DEV,
        },
        timestamp: new Date().toISOString(),
      };
      
      setDebugInfo(info);
      console.log("Debug Info:", info);
    };
    
    // Gather info immediately and when URL changes
    gatherDebugInfo();
    
    const handleHashChange = () => {
      console.log("URL changed, updating debug info");
      gatherDebugInfo();
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={() => setIsVisible(!isVisible)} 
        className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm"
      >
        {isVisible ? 'Hide Debug' : 'Debug'}
      </button>
      
      {isVisible && (
        <div className="bg-white border shadow-lg rounded-md p-4 mt-2 max-w-md text-xs overflow-auto max-h-80">
          <h3 className="font-bold mb-2 text-sm">Debug Information</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(debugInfo, null, 2)}</pre>
          
          <div className="mt-4 pt-2 border-t border-gray-200">
            <h4 className="font-bold text-xs mb-1">Actions</h4>
            <button 
              onClick={() => window.location.reload()} 
              className="mr-2 px-2 py-1 bg-blue-600 text-white rounded text-xs"
            >
              Reload Page
            </button>
            <button 
              onClick={() => {
                console.clear();
                console.log("Console cleared at", new Date().toISOString());
              }}
              className="px-2 py-1 bg-gray-600 text-white rounded text-xs"
            >
              Clear Console
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugInfo;
