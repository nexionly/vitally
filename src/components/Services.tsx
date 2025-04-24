
import { Database, Zap, ChartBar, Layers3, Users, Shield, FileSpreadsheet, Wrench } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Expert Implementation",
    description: "Get Vitally set up right the first time with proper configuration, data mapping, and integrations that create a reliable foundation for success"
  },
  {
    icon: Zap,
    title: "Strategic Automation",
    description: "Transform your CS workflow with custom playbooks and automations that help your team act proactively and drive consistent outcomes"
  },
  {
    icon: ChartBar,
    title: "Health Score Design",
    description: "Develop health scores that actually predict risk and opportunity, giving you actionable insights to reduce churn and drive growth"
  },
  {
    icon: Layers3,
    title: "Data Strategy",
    description: "Unlock the hidden value in your customer data with thoughtful segmentation and analytics that prove CS impact"
  },
  {
    icon: Users,
    title: "Team Enablement",
    description: "Empower your CS team with the knowledge and best practices they need to leverage Vitally effectively"
  },
  {
    icon: Shield,
    title: "Ongoing Optimization",
    description: "Keep your Vitally instance running at peak performance with continuous refinement and updates as your business evolves"
  },
  {
    icon: FileSpreadsheet,
    title: "Custom Reporting",
    description: "Create insightful dashboards and reports that demonstrate the ROI of your Customer Success efforts"
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description: "Get expert technical assistance whenever you need it, keeping your CS operations running smoothly"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-vitally-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          From Complex to{" "}
          <span className="bg-gradient-to-r from-vitally-purple to-vitally-blue bg-clip-text text-transparent">
            Seamless
          </span>
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto text-lg">
          I specialize in transforming Vitally from a powerful tool into your strategic advantage, handling the technical complexity so your team can focus on what matters most: your customers.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl text-white hover:transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col border border-vitally-purple/20 hover:border-vitally-purple/50"
            >
              <service.icon className="w-10 h-10 text-vitally-purple mb-4" />
              <h3 className="font-montserrat text-xl font-semibold mb-2 bg-gradient-to-r from-vitally-purple to-vitally-blue bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="font-inter text-gray-300 mt-auto">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
