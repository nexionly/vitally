
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import DebugInfo from "@/components/DebugInfo";
import { useEffect, useState } from "react";

const Index = () => {
  const [showDebug, setShowDebug] = useState(true); // Always show debug for troubleshooting
  
  useEffect(() => {
    // Log navigation for troubleshooting
    console.log("Index component rendered at:", window.location.href);
    console.log("Base path:", document.querySelector('base')?.getAttribute('href'));
    console.log("ENV MODE:", import.meta.env.MODE);
    
    // Add window error handler for better debugging
    const originalOnError = window.onerror;
    window.onerror = function(message, source, lineno, colno, error) {
      console.error("Global error caught:", { message, source, lineno, colno, error });
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error);
      }
      return false;
    };
    
    return () => {
      // Restore original handler
      window.onerror = originalOnError;
    };
  }, []);
  
  return (
    <div className="bg-dark min-h-screen">
      <Hero />
      <Services />
      <Contact />
      {showDebug && <DebugInfo />}
    </div>
  );
};

export default Index;
