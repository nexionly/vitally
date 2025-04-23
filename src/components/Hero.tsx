
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-dark to-dark-secondary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-6 animate-fade-up bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Your Strategic Partner for Vitally Success
        </h1>
        <p className="font-inter text-lg md:text-xl text-gray-300 mb-8 animate-fade-up">
          As your dedicated Vitally consultant, I work hand-in-hand with your CS leadership and teams to transform Vitally from a powerful platform into your competitive advantage. From technical implementation to strategic optimization, I'm your partner in driving customer success excellence.
        </p>
        <Button 
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 mx-auto animate-fade-up transition-all duration-300 hover:scale-105 hover:shadow-lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};
