import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import askJobbyLogo from "@/assets/askjobby-logo.jpg";

type SessionItem = {
  id: string;
  imageUrl: string;
  linkUrl: string;
  date: string;
};

const STORAGE_KEY = "pre_sessions_items";
const AUTH_KEY = "admin_auth";

function getItems(): SessionItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveItems(items: SessionItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [date, setDate] = useState("");
  const isAuthed = useMemo(() => typeof window !== "undefined" && localStorage.getItem(AUTH_KEY) === "true", []);
  const [authed, setAuthed] = useState(isAuthed);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      localStorage.setItem(AUTH_KEY, "true");
      setAuthed(true);
    } else {
      alert("Invalid credentials");
    }
  }

  function handleLogout() {
    localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  }

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    // dd-mm-yyyy validation
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateRegex.test(date)) {
      alert("Please enter date in dd-mm-yyyy format");
      return;
    }
    if (!linkUrl) {
      alert("Please provide a link URL");
      return;
    }

    const persist = (finalImageUrl: string) => {
      const current = getItems();
      const newItem: SessionItem = {
        id: `${Date.now()}`,
        imageUrl: finalImageUrl,
        linkUrl,
        date,
      };
      const updated = [newItem, ...current];
      saveItems(updated);
      setImageUrl("");
      setImageFile(null);
      setLinkUrl("");
      setDate("");
      alert("Added to Pre Sessions");
    };

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = typeof reader.result === "string" ? reader.result : "";
        persist(result);
      };
      reader.readAsDataURL(imageFile);
    } else if (imageUrl) {
      persist(imageUrl);
    } else {
      alert("Please upload an image or provide an image URL");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/90 border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={askJobbyLogo} alt="AskJobby" className="w-16 h-16 rounded-full" />
            <h1 className="text-xl font-bold text-gradient">AskJobby</h1>
          </Link>
          {authed && (
            <Button variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
          )}
        </div>
      </header>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-xl">
          {!authed ? (
            <Card className="p-8 card-gradient card-shadow">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Admin Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="admin123" />
                </div>
                <Button type="submit" variant="cta" className="w-full">Login</Button>
              </form>
            </Card>
          ) : (
            <Card className="p-8 card-gradient card-shadow">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Add Pre Session</h2>
              <form onSubmit={handleAdd} className="space-y-4">
                <div>
                  <Label htmlFor="imageFile">Image Upload</Label>
                  <Input id="imageFile" type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files && e.target.files[0] ? e.target.files[0] : null)} />
                </div>
                <div>
                  <Label htmlFor="image">Or Image URL</Label>
                  <Input id="image" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." />
                </div>
                <div>
                  <Label htmlFor="link">Link URL</Label>
                  <Input id="link" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} placeholder="https://..." />
                </div>
                <div>
                  <Label htmlFor="date">Date (dd-mm-yyyy)</Label>
                  <Input id="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="dd-mm-yyyy" />
                </div>
                <Button type="submit" variant="cta" className="w-full">Add</Button>
              </form>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default Admin;


