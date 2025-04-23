import { Database, Zap, ChartBar, Layers3, Users, Shield } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Unification",
    description: "Seamlessly integrate scattered customer data from your tech stack into a single unified platform"
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
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Technical Expertise for Your Vitally Success
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Leverage our deep technical knowledge to unlock Vitally's full potential and transform how you operate Customer Success
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-dark p-8 rounded-lg text-white hover:transform hover:-translate-y-1 transition-transform duration-300">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-montserrat text-xl font-semibold mb-3">{service.title}</h3>
              <p className="font-inter text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
