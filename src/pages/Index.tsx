import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, Award, TrendingUp, CheckCircle, ArrowRight, Calendar, Globe, Target } from "lucide-react";
import askJobbyLogo from "@/assets/askjobby-logo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const careerTips = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Set Clear Career Goals",
      description: "Define your professional aspirations and create a roadmap to achieve them with actionable milestones."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Stay ahead by constantly upgrading your skills and adapting to industry trends and changes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Build Professional Networks",
      description: "Cultivate meaningful relationships within your industry to unlock new opportunities and insights."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Personal Branding",
      description: "Develop a strong online presence and professional brand that reflects your expertise and values."
    }
  ];

  const benefits = [
    "1-on-1 personalized career coaching sessions",
    "Industry-specific guidance and insights",
    "Resume and LinkedIn profile optimization",
    "Interview preparation and mock sessions",
    "Salary negotiation strategies",
    "Career transition planning and support"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/90 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={askJobbyLogo} alt="AskJobby" className="w-12 h-12 rounded-full" />
            <h1 className="text-xl font-bold text-gradient">AskJobby</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-smooth">About</a>
            <a href="#tips" className="text-foreground/80 hover:text-primary transition-smooth">Career Tips</a>
            <a href="#book" className="text-foreground/80 hover:text-primary transition-smooth">Book Session</a>
          </nav>
          <Button variant="hero" size="sm" asChild>
            <a href="https://tidycal.com/team/askjobby/askjobby-session" target="_blank" rel="noopener noreferrer">
              Book Now
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
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img src={askJobbyLogo} alt="AskJobby" className="w-24 h-24 mx-auto rounded-full animate-float glow-effect" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">AskJobby</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto">
              Accelerate Your Career Growth with Expert Guidance
            </p>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Transform your professional journey with personalized career coaching sessions designed to unlock your potential and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="xl" asChild>
                <a href="https://tidycal.com/team/askjobby/askjobby-session" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Session Today
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-foreground/60">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary" />
                <span>5.0 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Why Choose AskJobby?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Your Partner in Professional Success
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At AskJobby, we believe every professional deserves personalized guidance to reach their career aspirations. 
              Our expert coaching sessions are tailored to your unique situation, helping you navigate challenges and seize opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
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
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">60-Minute Sessions</h4>
                  <p className="text-foreground/70 mb-4">
                    Comprehensive coaching sessions designed to provide maximum value and actionable insights.
                  </p>
                  <div className="text-3xl font-bold text-gradient mb-2">$99</div>
                  <p className="text-sm text-foreground/60">Per session</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Career Tips Section */}
      <section id="tips" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Free Knowledge</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Career Growth Tips & Insights
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Get started with these proven strategies that successful professionals use to advance their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerTips.map((tip, index) => (
              <Card key={index} className="p-6 card-gradient card-shadow hover:scale-105 transition-bounce animate-scale-in">
                <div className="text-primary mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{tip.description}</p>
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
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Take the first step towards your professional success. Book a personalized coaching session today and start your journey to career excellence.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href="https://tidycal.com/team/askjobby/askjobby-session" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Your Session Now
              </a>
            </Button>
            <p className="mt-4 text-sm text-foreground/60">
              Available for sessions worldwide • Flexible scheduling • Money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={askJobbyLogo} alt="AskJobby" className="w-10 h-10 rounded-full" />
              <span className="text-lg font-semibold text-gradient">AskJobby</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-foreground/60 text-sm">
                © 2024 AskJobby. Empowering careers worldwide.
              </p>
              <p className="text-foreground/50 text-xs mt-1">
                Professional career coaching and development services
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;