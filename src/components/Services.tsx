
import { TrendingUp, Users, Rocket } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Implementation Strategy",
    description: "Custom Vitally setup aligned with your unique CS workflows and objectives"
  },
  {
    icon: Users,
    title: "Team Enablement",
    description: "Comprehensive training and documentation for your CS team"
  },
  {
    icon: TrendingUp,
    title: "Optimization & Scale",
    description: "Ongoing support to maximize ROI as your customer base grows"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Services Tailored for Growth
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-dark p-8 rounded-lg text-white">
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
