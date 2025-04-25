
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Log navigation for troubleshooting
    console.log("Index component rendered at:", window.location.href);
    console.log("Base path:", document.querySelector('base')?.getAttribute('href'));
    console.log("ENV MODE:", import.meta.env.MODE);
  }, []);
  
  return (
    <div className="bg-dark min-h-screen">
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
