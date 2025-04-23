
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Your Strategic Partner for Vitally Success
        </h1>
        <p className="font-inter text-lg md:text-xl text-gray-300 mb-8 animate-fade-up">
          Working hand-in-hand with your CS leadership and teams, we transform Vitally from a powerful platform into your competitive advantage. From technical implementation to strategic optimization, we're your dedicated partner in driving customer success excellence.
        </p>
        <Button 
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 mx-auto animate-fade-up"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};
