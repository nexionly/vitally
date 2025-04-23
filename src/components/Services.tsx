
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
    <section className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Collaborative Expertise & Strategic Partnership
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          We don't just implement solutions – we partner with your team to co-create success. Our collaborative approach ensures that every technical implementation and strategic initiative drives lasting value.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-dark p-6 rounded-lg text-white hover:transform hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-montserrat text-xl font-semibold mb-2">{service.title}</h3>
              <p className="font-inter text-gray-300 mt-auto">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
