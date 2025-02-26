import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="relative min-h-screen pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Modern construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
          Building Your Vision, <br />Crafting Excellence
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Premium construction services with unmatched attention to detail and commitment to quality
        </p>
        <Button 
          className="animate-slide-up bg-accent hover:bg-accent/90 text-primary font-semibold"
          style={{ animationDelay: "0.4s" }}
        >
          Explore Our Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
