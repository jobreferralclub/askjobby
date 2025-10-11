import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, Award, TrendingUp, CheckCircle, Calendar, Heart, Sparkles } from "lucide-react";
import askJobbyLogo from "@/assets/askjobby-logo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// Declare TidyCal global for TypeScript
declare global {
  interface Window {
    TidyCal?: {
      init: () => void;
    };
  }
}

const Index = () => {
  const embedRef = useRef(null);

  useEffect(() => {
    // Clean up any existing TidyCal instances
    const existingIframes = document.querySelectorAll('iframe[src*="tidycal"]');
    existingIframes.forEach(iframe => iframe.remove());
    
    // Remove existing script to force fresh load
    const existingScript = document.querySelector('script[src*="tidycal"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Clear TidyCal from window
    if (window.TidyCal) {
      delete window.TidyCal;
    }

    // Add cache-busting parameter
    const timestamp = new Date().getTime();
    const script = document.createElement("script");
    script.src = `https://asset-tidycal.b-cdn.net/js/embed.js?v=${timestamp}`;
    script.async = true;
    script.onload = () => {
      console.log('TidyCal script loaded');
      // Wait for DOM to be fully ready and check if element exists
      const checkAndInit = () => {
        if (embedRef.current && window.TidyCal && typeof window.TidyCal.init === 'function') {
          console.log('Initializing TidyCal...');
          try {
            window.TidyCal.init();
            console.log('TidyCal initialized successfully');
          } catch (error) {
            console.error('Error initializing TidyCal:', error);
          }
        } else {
          console.log('Waiting for embed element...');
          setTimeout(checkAndInit, 500);
        }
      };
      setTimeout(checkAndInit, 100);
    };
    script.onerror = () => {
      console.error('Failed to load TidyCal script');
    };
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      const iframes = document.querySelectorAll('iframe[src*="tidycal"]');
      iframes.forEach(iframe => iframe.remove());
    };
  }, []);

  const whyFreeReasons = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion for Empowerment",
      description: "We believe everyone deserves access to quality career guidance, regardless of their financial situation."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Building Community",
      description: "By offering free sessions, we create a supportive community of professionals helping each other grow."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Sharing Knowledge",
      description: "Our mission is to democratize career success by freely sharing insights and strategies that work."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Your Success is Our Success",
      description: "Seeing you advance in your career and achieve your goals is the greatest reward for our work."
    }
  ];

  const weeklySessionBenefits = [
    "Live Q&A with career experts every Friday",
    "Real-time guidance on your career challenges",
    "Industry insights and job market trends",
    "Networking with like-minded professionals",
    "Practical tips you can apply immediately",
    "Supportive community of career-driven individuals"
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
            <Link to="/" className="text-primary font-semibold">Home</Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-smooth">About</Link>
            <Link to="/career-tips" className="text-foreground/80 hover:text-primary transition-smooth">Career Tips</Link>
            <Link to="/past-sessions" className="text-foreground/80 hover:text-primary transition-smooth">Past Sessions</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-smooth">Contact</Link>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-24 md:pt-32">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img src={askJobbyLogo} alt="AskJobby" className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full animate-float" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">AskJobby</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto">
              Free Weekly Career Coaching Sessions Every Friday
            </p>
            <p className="text-lg text-foreground/70 mb-2 max-w-2xl mx-auto">
              Join our live online sessions where we cover key areas to boost your career: 1. Resume Review, 2. How to Get Shortlisted, 3. Interview Preparation, 4. Top 10 Jobs of the Week.
            </p>
            <p className="text-base md:text-lg font-semibold text-primary/90 mb-8">Fridays • 7:30 AM PST • 10:30 AM EST • 8:00 PM IST</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="xl" asChild>
                <a href="https://tidycal.com/raysaranya/askjobby" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Join Weekly Free Session
                </a>
              </Button>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-foreground/60">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary" />
                <span>Free Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Every Friday</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Embed */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto rounded-xl card-gradient card-shadow p-6 md:p-10 border border-border">
      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient text-center">Book Your Spot</h3>
      <p className="text-center text-primary font-semibold mb-6">Fridays • 7:30 AM PST • 10:30 AM EST • 8:00 PM IST</p>
      <div
        ref={embedRef}
        className="tidycal-embed"
        data-path="raysaranya/askjobby"
      />
    </div>
  </div>
</section>

      {/* Weekly Session Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Free Weekly Sessions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Join Our Friday Career Coaching Sessions
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Every Friday, we host live online sessions where professionals like you gather to learn, grow, and get answers to their career questions. 
              It's completely free, interactive, and designed to give you actionable insights you can apply immediately to your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6">What You'll Experience:</h3>
              <div className="space-y-4">
                {weeklySessionBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-right">
              <Card className="p-6 card-gradient card-shadow">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Every Friday</h4>
                  <p className="text-foreground/70 mb-4">
                    Join our live session to get real-time career guidance, ask questions, and connect with professionals on similar journeys.
                  </p>
                  <div className="text-3xl font-bold text-gradient mb-2">100% Free</div>
                  <p className="text-sm text-foreground/60 mb-6">No hidden costs, ever</p>
                  <Button variant="cta" size="lg" className="w-full" asChild>
                    <a href="https://tidycal.com/raysaranya/askjobby" target="_blank" rel="noopener noreferrer">
                      Register Now
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Our Mission</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Why Is It Free?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We believe career growth shouldn't be limited by financial barriers. Here's why we offer our sessions for free:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFreeReasons.map((reason, index) => (
              <Card key={index} className="p-6 card-gradient card-shadow hover:scale-105 transition-bounce animate-scale-in">
                <div className="text-primary mb-4">{reason.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="book" className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Join our free Friday sessions and be part of a community committed to professional growth. Get real answers, actionable strategies, and the support you need to succeed.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href="https://tidycal.com/raysaranya/askjobby" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Join Weekly Free Session
              </a>
            </Button>
            <p className="mt-4 text-sm text-foreground/60">
              Every Friday • Live Q&A • 100% Free • No Registration Fee
            </p>
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
                © 2025 AskJobby.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;