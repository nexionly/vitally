
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-vitally-bg-dark bg-gradient-vitally overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6 animate-fade-up text-white tracking-tight leading-none">
          Stop Wrestling with Vitally.{" "}
          <span className="bg-gradient-to-r from-vitally-purple to-vitally-blue bg-clip-text text-transparent block mt-2">
            Start Driving Results.
          </span>
        </h1>
        <p className="font-inter text-lg md:text-xl text-gray-300 mb-8 animate-fade-up max-w-2xl mx-auto">
          I go beyond basic setup to unlock the full power of your Vitally investment. Get expert implementation, seamless integration, and ongoing optimization that drives measurable outcomes - without draining your internal resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button 
            className="bg-vitally-purple hover:bg-vitally-purple-dark text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book My Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
