
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-dark to-dark-secondary">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Ready to Transform Your Customer Success Operations?
        </h2>
        <p className="font-inter text-lg text-gray-300 mb-8">
          Let's discuss how I can help you implement and optimize Vitally for your growing business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.location.href = "mailto:tomas@mattegreenmedia.com"}
          >
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-md flex items-center gap-2 justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
