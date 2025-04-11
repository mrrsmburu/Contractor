import React from "react";
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Textarea } from "../components/textarea"// Ensure this path is correct or update it to the correct module path
import { Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        form.reset(); // Clear form
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    // <section id="contact" className="py-20 px-4 bg-muted">
      <div id="contact" className="max-w-7xl mx-auto">
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
    // </section>
  );
};

export default Contact;