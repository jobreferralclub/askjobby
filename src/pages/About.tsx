import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Briefcase, Globe, Lightbulb, ArrowRight } from "lucide-react";
import askJobbyLogo from "@/assets/askjobby-logo.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const weeklyContent = [
    {
      day: "Monday",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI Tools of the Week",
      description: "Discover the latest AI tools and technologies that can enhance your productivity and career growth. Stay ahead with cutting-edge innovations.",
      color: "from-primary/20 to-primary/5"
    },
    {
      day: "Tuesday",
      icon: <Briefcase className="w-8 h-8" />,
      title: "Top Jobs in India",
      description: "Explore the most sought-after job opportunities across India. Get insights into trending roles, salary ranges, and top hiring companies.",
      color: "from-accent/20 to-accent/5"
    },
    {
      day: "Wednesday",
      icon: <Globe className="w-8 h-8" />,
      title: "Top Jobs in US",
      description: "Access curated listings of premier job opportunities in the United States. Learn about visa requirements, relocation tips, and career paths.",
      color: "from-primary/20 to-primary/5"
    },
    {
      day: "Thursday",
      icon: <Calendar className="w-8 h-8" />,
      title: "Interview Tips",
      description: "Master your interviews with expert tips and strategies. From behavioral questions to technical rounds, get prepared for success.",
      color: "from-accent/20 to-accent/5"
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
            <Link to="/about" className="text-primary font-semibold">About</Link>
            <Link to="/career-tips" className="text-foreground/80 hover:text-primary transition-smooth">Career Tips</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-smooth">Contact</Link>
          </nav>
          <Button variant="hero" size="sm" asChild>
            <a href="https://www.linkedin.com/in/raysaranya/" target="_blank" rel="noopener noreferrer">
              Join Session
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4">About Our Weekly Sessions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Your Weekly Dose of Career Excellence
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Every Friday, join our free online sessions where we share valuable career insights, 
              industry trends, and practical guidance to help you navigate your professional journey with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Content Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              What We Share Throughout the Week
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-4">
              Stay connected with us on LinkedIn for daily career insights and updates. 
              Here's what you can expect each day of the week:
            </p>
            <Button variant="outline" size="lg" asChild className="mt-4">
              <a href="https://www.linkedin.com/in/raysaranya/" target="_blank" rel="noopener noreferrer">
                Follow on LinkedIn <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {weeklyContent.map((content, index) => (
              <Card 
                key={index} 
                className={`p-8 card-gradient card-shadow hover:scale-105 transition-bounce animate-scale-in bg-gradient-to-br ${content.color}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary flex-shrink-0">
                    {content.icon}
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-3">{content.day}</Badge>
                    <h3 className="text-xl font-bold mb-3">{content.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 card-gradient card-shadow max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Friday - Live Session</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Join our comprehensive weekly live session every Friday where we dive deep into career strategies, 
                answer your questions in real-time, and provide personalized guidance to help you achieve your professional goals.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href="https://www.linkedin.com/in/raysaranya/" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Register for Friday Session
                </a>
              </Button>
            </Card>
          </div>
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
                © 2024 AskJobby. Empowering careers worldwide.
              </p>
              <p className="text-foreground/50 text-xs mt-1">
                Weekly free career coaching sessions every Friday
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
