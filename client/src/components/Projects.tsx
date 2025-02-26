import React from "react";
import { Card, CardContent } from "./ui/card";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    title: "Modern Office Complex",
    category: "Commercial"
  },
  {
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    title: "Luxury Residences",
    category: "Residential"
  },
  {
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    title: "Corporate Headquarters",
    category: "Commercial"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
          Discover our portfolio of exceptional construction projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <p className="text-sm font-medium text-accent mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
