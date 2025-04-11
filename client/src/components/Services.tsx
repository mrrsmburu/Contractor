import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Building, Hammer, PenTool, Users } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Construction",
    description: "Full-scale construction projects from groundbreaking to completion."
  },
  {
    icon: PenTool,
    title: "Design & Planning",
    description: "Architectural design and detailed project planning services."
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Expert renovation and remodeling for residential and commercial spaces."
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Professional consultation and project management services."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
          Comprehensive construction and development services tailored to your needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <service.icon className="h-12 w-12 mb-4 text-accent mx-auto" />
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;