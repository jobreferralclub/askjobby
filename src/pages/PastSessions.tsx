import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import askJobbyLogo from "@/assets/askjobby-logo.jpg";
import { Link } from "react-router-dom";

type SessionItem = {
  id: string;
  imageUrl: string;
  linkUrl: string;
  date: string;
};

const STORAGE_KEY = "pre_sessions_items";

function getStoredItems(): SessionItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

const PastSessions = () => {
  const itemsFromStorage = getStoredItems();
  const fallback: SessionItem[] = [
    { id: "d1", imageUrl: "https://images.unsplash.com/photo-1581093571252-77236a7f62b8?q=80&w=1200&auto=format&fit=crop", linkUrl: "https://tidycal.com/raysaranya/askjobby", date: "01-11-2025" },
    { id: "d2", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop", linkUrl: "https://tidycal.com/raysaranya/askjobby", date: "08-11-2025" },
    { id: "d3", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", linkUrl: "https://tidycal.com/raysaranya/askjobby", date: "15-11-2025" },
    { id: "d4", imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop", linkUrl: "https://tidycal.com/raysaranya/askjobby", date: "22-11-2025" },
  ];
  const items = itemsFromStorage.length > 0 ? itemsFromStorage : fallback;

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
            <Link to="/past-sessions" className="text-primary font-semibold">Past Sessions</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-smooth">Contact</Link>
          </nav>
          <Button variant="hero" size="sm" asChild>
            <a href="https://tidycal.com/raysaranya/askjobby" target="_blank" rel="noopener noreferrer">Join Session</a>
          </Button>
        </div>
      </header>

      {/* Grid */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient text-center">Past Sessions</h2>
          <p className="text-center text-foreground/70 mb-10">Fridays • 7:30 AM PST • 10:30 AM EST • 8:00 PM IST</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {itemsFromStorage.length === 0 && (
              <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-foreground/60">Showing sample cards. Add via admin to replace.</div>
            )}
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden card-gradient card-shadow">
                <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                  <div className="relative">
                    <img src={item.imageUrl} alt="Past Session" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-background/70 px-3 py-2 text-sm font-semibold">
                      {item.date}
                    </div>
                  </div>
                </a>
              </Card>
            ))}
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
              <p className="text-foreground/60 text-sm">© 2025 AskJobby.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PastSessions;


