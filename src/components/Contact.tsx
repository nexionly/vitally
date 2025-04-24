
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-vitally-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform Vitally from a{" "}
          <span className="bg-gradient-to-r from-vitally-purple to-vitally-blue bg-clip-text text-transparent">
            Tool into a Growth Engine?
          </span>
        </h2>
        <p className="font-inter text-lg text-gray-300 mb-8">
          Stop letting Vitally's potential go untapped. Whether you're struggling with implementation, looking to optimize your current setup, or need ongoing expert management, I'm here to help accelerate your Vitally ROI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-vitally-purple hover:bg-vitally-purple-dark text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 justify-center transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = "mailto:tomas@mattegreenmedia.com"}
          >
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
          <Button
            variant="outline"
            className="border-vitally-purple text-vitally-purple hover:bg-vitally-purple/10 font-semibold py-3 px-6 rounded-full flex items-center gap-2 justify-center transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = "https://cal.com/tomas-williams/30min"}
          >
            <MessageSquare className="w-4 h-4" />
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
};
