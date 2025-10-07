import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Calendar, MessageSquare } from "lucide-react";
import askJobbyLogo from "@/assets/askjobby-logo.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "raysaranya@gmail.com",
      link: "mailto:raysaranya@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (425) 209-7368",
      link: "tel:+14252097368",
      description: "Call us for immediate assistance"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with us",
      link: "https://www.linkedin.com/in/raysaranya/",
      description: "Follow for daily career insights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/90 border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={askJobbyLogo} alt="AskJobby" className="w-16 h-16 rounded-full" />
            <h1 className="text-xl font-bold text-gradient">AskJobby</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-smooth">Home</Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-smooth">About</Link>
            <Link to="/career-tips" className="text-foreground/80 hover:text-primary transition-smooth">Career Tips</Link>
            <Link to="/past-sessions" className="text-foreground/80 hover:text-primary transition-smooth">Past Sessions</Link>
            <Link to="/contact" className="text-primary font-semibold">Contact</Link>
          </nav>
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer px-3 py-2 rounded-md bg-secondary text-secondary-foreground">Menu</summary>
              <div className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-background shadow-lg flex flex-col">
                <Link to="/" className="px-4 py-2 hover:bg-accent/10">Home</Link>
                <Link to="/about" className="px-4 py-2 hover:bg-accent/10">About</Link>
                <Link to="/career-tips" className="px-4 py-2 hover:bg-accent/10">Career Tips</Link>
                <Link to="/past-sessions" className="px-4 py-2 hover:bg-accent/10">Past Sessions</Link>
                <Link to="/contact" className="px-4 py-2 hover:bg-accent/10">Contact</Link>
                <a href="https://tidycal.com/raysaranya/askjobby" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:bg-accent/10">Join Session</a>
              </div>
            </details>
          </div>
          <Button variant="hero" size="sm" asChild>
            <a href="https://tidycal.com/raysaranya/askjobby" target="_blank" rel="noopener noreferrer">
              Join Session
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Let's Connect
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-2">
              Have questions about our weekly sessions or need career guidance? 
              We're here to help you navigate your professional journey.
            </p>
            <p className="text-base md:text-lg font-semibold text-primary/90">Fridays • 7:30 AM PST • 10:30 AM EST • 8:00 PM IST</p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="p-8 card-gradient card-shadow hover:scale-105 transition-bounce animate-scale-in text-center"
              >
                <div className="text-primary mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-sm text-foreground/60 mb-4">{info.description}</p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.value}
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 card-gradient card-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-primary flex-shrink-0">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Join Weekly Sessions</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    Register for our free Friday career coaching sessions. Get live guidance, 
                    ask questions, and connect with professionals on their career journey.
                  </p>
                  <Button variant="cta" size="lg" asChild className="w-full">
                    <a href="https://tidycal.com/raysaranya/askjobby" target="_blank" rel="noopener noreferrer">
                      Register Now
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 card-gradient card-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-primary flex-shrink-0">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Follow on LinkedIn</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    Stay updated with daily career tips, job opportunities, AI tools, and interview 
                    strategies. Join our growing community of professionals.
                  </p>
                  <Button variant="professional" size="lg" asChild className="w-full">
                    <a href="https://www.linkedin.com/in/raysaranya/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Follow Us
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <Card className="p-12 card-gradient card-shadow max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">
              Weekly Session Schedule
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Live career coaching sessions every Friday. We cover career guidance, 
              answer your questions, and provide actionable strategies for professional growth.
            </p>
            <div className="inline-flex items-center space-x-2 text-foreground/70 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-semibold">Every Friday</span>
            </div>
            <p className="text-base md:text-lg font-semibold text-primary/90">7:30 AM PST • 10:30 AM EST • 8:00 PM IST</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={askJobbyLogo} alt="AskJobby" className="w-10 h-10 rounded-full" />
              <span className="text-lg font-semibold text-gradient">AskJobby</span>
            </Link>
            <div className="text-center md:text-right">
              <p className="text-foreground/60 text-sm">
                © 2025 AskJobby.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
