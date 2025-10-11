import { useEffect, useRef } from "react";

// Declare TidyCal global for TypeScript
declare global {
  interface Window {
    TidyCal?: {
      init: () => void;
    };
  }
}

const BookSession = () => {
  const embedRef = useRef(null);

  useEffect(() => {
    // Load script if not already loaded
    if (!document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;
      script.onload = () => {
        console.log('TidyCal script loaded');
        // Wait for DOM to be fully ready
        setTimeout(() => {
          if (window.TidyCal && typeof window.TidyCal.init === 'function') {
            console.log('Initializing TidyCal...');
            window.TidyCal.init();
          }
        }, 1000);
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded, try to initialize after a delay
      setTimeout(() => {
        if (window.TidyCal && typeof window.TidyCal.init === 'function') {
          console.log('Initializing TidyCal...');
          window.TidyCal.init();
        }
      }, 1000);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "48px 16px", background: "#0e0544", color: "#f7f3d6" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Book Your Session</h1>
        <p style={{ opacity: 0.8, marginBottom: 24 }}>Fridays • 7:30 AM PST • 10:30 AM EST • 8:00 PM IST</p>
        <div
          ref={embedRef}
          className="tidycal-embed"
          data-path="raysaranya/askjobby"
        />
      </div>
    </div>
  );
};

export default BookSession;