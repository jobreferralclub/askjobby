import { useEffect } from "react";

const BookSession = () => {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "48px 16px", background: "#0e0544", color: "#f7f3d6" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Book Your Session</h1>
        <p style={{ opacity: 0.8, marginBottom: 24 }}>Fridays • 7:30 AM PST • 10:30 AM EST • 8:00 PM IST</p>
        <div
          dangerouslySetInnerHTML={{ __html: `<div class="tidycal-embed" data-path="raysaranya/askjobby"></div><script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>` }}
        />
      </div>
    </div>
  );
};

export default BookSession;


