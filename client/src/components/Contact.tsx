import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-secondary mb-8">
              Ready to start your project? Contact us today and let's discuss how we can bring your vision to life.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-accent mr-4 group-hover:text-primary transition-colors" />
                <a href="tel:+1234567890" className="text-secondary hover:text-primary transition-colors">
                  +1 234 567 890
                </a>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-accent mr-4 group-hover:text-primary transition-colors" />
                <a href="mailto:contact@construction.com" className="text-secondary hover:text-primary transition-colors">
                  contact@construction.com
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="h-5 w-5 text-accent mr-4 group-hover:text-primary transition-colors" />
                <p className="text-secondary">123 Construction Ave, Building City, BC 12345</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Input placeholder="Your Name" required />
            <Input placeholder="Email Address" type="email" required />
            <Input placeholder="Phone Number" type="tel" />
            <Textarea 
              placeholder="Tell us about your project" 
              className="h-32 resize-none"
              required
            />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;