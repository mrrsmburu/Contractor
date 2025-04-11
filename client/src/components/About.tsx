import React from "react";
import { Building2, Users, Trophy, CheckCircle } from "lucide-react";


const About = () => {
  const stats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "150+", label: "Expert Team" },
    { icon: Trophy, value: "25+", label: "Years Experience" },
    { icon: CheckCircle, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted">
      <div  className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">Building Excellence Since 1998</h2>
            <p className="text-secondary">
              With over two decades of experience in the construction industry, we've built our reputation on quality, 
              innovation, and unwavering commitment to client satisfaction. Our team of experts brings passion and 
              precision to every project, ensuring exceptional results that stand the test of time.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Our team at work"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-accent/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;