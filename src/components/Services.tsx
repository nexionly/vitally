
import { Database, Zap, ChartBar, Layers3, Users, Shield, FileSpreadsheet, Wrench } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Unification",
    description: "Seamlessly integrate scattered customer data from your tech stack into a single unified platform with proven data models"
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Build powerful, scalable automations that save time and transform reactive teams into proactive ones"
  },
  {
    icon: ChartBar,
    title: "Dynamic Health Scoring",
    description: "Configure dynamic health scores and insightful dashboards that accurately reflect your success metrics"
  },
  {
    icon: Layers3,
    title: "Data-Driven Insights",
    description: "Transform thousands of data points into actionable insights that drive customer success"
  },
  {
    icon: Users,
    title: "Journey Optimization",
    description: "Streamline customer onboarding and project management with optimized processes and automation"
  },
  {
    icon: Shield,
    title: "Enhanced Collaboration",
    description: "Enable seamless collaboration between teams and customers with shared insights and objectives"
  },
  {
    icon: FileSpreadsheet,
    title: "Process Development",
    description: "Create repeatable customer success processes that align with your business goals and scale as you grow"
  },
  {
    icon: Wrench,
    title: "Team Enablement",
    description: "Train and empower your team with the skills and knowledge to maximize Vitally's potential"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Technical Expertise & Strategic Enablement
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          We combine deep technical knowledge with strategic implementation to transform how you operate Customer Success
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
