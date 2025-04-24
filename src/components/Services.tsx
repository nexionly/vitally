
import { Database, Zap, ChartBar, Layers3, Users, Shield, FileSpreadsheet, Wrench } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Collaborative Implementation",
    description: "Work closely with your team to integrate and customize Vitally, ensuring it aligns perfectly with your existing workflows and objectives"
  },
  {
    icon: Zap,
    title: "Strategic Automation",
    description: "Partner with your CS leadership to identify, design, and implement automations that drive team efficiency and customer engagement"
  },
  {
    icon: ChartBar,
    title: "Success Metrics Design",
    description: "Collaborate with stakeholders to develop and implement meaningful health scores and KPIs that truly reflect your business goals"
  },
  {
    icon: Layers3,
    title: "Data Strategy",
    description: "Guide your team in transforming raw data into actionable insights, creating a data-driven culture of customer success"
  },
  {
    icon: Users,
    title: "Team Empowerment",
    description: "Provide hands-on training and enablement, ensuring your team maximizes Vitally's potential while building internal expertise"
  },
  {
    icon: Shield,
    title: "Change Management",
    description: "Support your organization through the transformation, ensuring smooth adoption and sustainable success"
  },
  {
    icon: FileSpreadsheet,
    title: "Process Co-Creation",
    description: "Work alongside your team to develop and implement scalable processes that drive consistent customer outcomes"
  },
  {
    icon: Wrench,
    title: "Ongoing Optimization",
    description: "Maintain a long-term partnership to continuously refine and enhance your Vitally implementation as your business evolves"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-vitally-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Strategic Expertise &{" "}
          <span className="bg-gradient-to-r from-vitally-purple to-vitally-blue bg-clip-text text-transparent">
            Personalized Partnership
          </span>
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto text-lg">
          I don't just implement solutions – I partner with your team to co-create success. My collaborative approach ensures that every technical implementation and strategic initiative drives lasting value.
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
