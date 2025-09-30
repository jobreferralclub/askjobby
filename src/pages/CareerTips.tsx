import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Clock, 
  Briefcase,
  Brain,
  Award,
  CheckCircle,
  Lightbulb,
  Shield,
  Zap
} from "lucide-react";
import askJobbyLogo from "@/assets/askjobby-logo.jpg";
import { Link } from "react-router-dom";

const CareerTips = () => {
  const tips = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Set Clear Career Milestones",
      description: "Define specific, measurable goals for each quarter. Break down your annual career objectives into actionable monthly targets that you can track and celebrate.",
      category: "Goal Setting"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Master Time Management",
      description: "Use the 80/20 rule: focus 80% of your energy on the 20% of tasks that drive the most results. Prioritize high-impact work and learn to delegate effectively.",
      category: "Productivity"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Build Strategic Relationships",
      description: "Network with intention. Connect with professionals who inspire you, and add value to your network before asking for favors. Quality over quantity always wins.",
      category: "Networking"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Communicate with Impact",
      description: "Practice clear, concise communication. In meetings, emails, and presentations, get to the point quickly and back your ideas with data and examples.",
      category: "Communication"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Embrace Continuous Learning",
      description: "Dedicate at least 30 minutes daily to learning new skills. Stay updated with industry trends through courses, podcasts, and reading relevant publications.",
      category: "Growth"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Handle Workplace Politics Wisely",
      description: "Stay professional and neutral in office conflicts. Focus on building alliances through competence and reliability rather than taking sides in disputes.",
      category: "Professional Skills"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Document Your Achievements",
      description: "Keep a running log of your accomplishments, metrics improved, and positive feedback. This becomes invaluable during performance reviews and job searches.",
      category: "Career Growth"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Master Work-Life Balance",
      description: "Set clear boundaries between work and personal time. Disconnect after hours, take regular breaks, and prioritize your physical and mental health.",
      category: "Well-being"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Be Solution-Oriented",
      description: "When presenting problems to your manager, always come with potential solutions. This demonstrates initiative and positions you as a problem-solver.",
      category: "Leadership"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Understand Your Company's Goals",
      description: "Align your work with organizational objectives. Understand how your role contributes to the bigger picture and communicate this in your updates.",
      category: "Strategy"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Take Calculated Risks",
      description: "Don't be afraid to volunteer for challenging projects or new responsibilities. Growth happens outside your comfort zone, and visibility leads to opportunities.",
      category: "Career Growth"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Seek Regular Feedback",
      description: "Don't wait for annual reviews. Request regular feedback from managers and peers to course-correct quickly and show your commitment to improvement.",
      category: "Development"
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
            <Link to="/career-tips" className="text-primary font-semibold">Career Tips</Link>
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
            <Badge variant="secondary" className="mb-4">Expert Guidance</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Career Tips for Corporate Success
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Navigate your corporate career with confidence using these proven strategies and insights. 
              These actionable tips will help you advance professionally and thrive in your workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <Card 
                key={index} 
                className="p-6 card-gradient card-shadow hover:scale-105 transition-bounce animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="text-primary flex-shrink-0">
                    {tip.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">{tip.category}</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <Card className="p-12 card-gradient card-shadow max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Want Personalized Guidance?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Join our free weekly sessions every Friday for live career coaching, 
              Q&A sessions, and personalized advice tailored to your career goals.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href="https://www.linkedin.com/in/raysaranya/" target="_blank" rel="noopener noreferrer">
                Register for Free Session
              </a>
            </Button>
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

export default CareerTips;
