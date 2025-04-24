
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import DebugInfo from "@/components/DebugInfo";

const Index = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Hero />
      <Services />
      <Contact />
      {import.meta.env.DEV && <DebugInfo />}
    </div>
  );
};

export default Index;
