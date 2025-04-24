
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import DebugInfo from "@/components/DebugInfo";
import { useEffect, useState } from "react";

const Index = () => {
  const [showDebug, setShowDebug] = useState(false);
  
  useEffect(() => {
    // Show debug info if "debug=true" is in the URL
    const urlParams = new URLSearchParams(window.location.search);
    setShowDebug(import.meta.env.DEV || urlParams.get('debug') === 'true');
    
    // Log navigation for troubleshooting
    console.log("App initialized at:", window.location.href);
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
