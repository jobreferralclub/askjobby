// TidyCalEmbed.tsx
import { useEffect } from "react";

const TidyCalEmbed: React.FC = () => {
  useEffect(() => {
    // Only add the script once
    const existingScript = document.querySelector(
      'script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div className="tidycal-embed" data-path="raysaranya/askjobby"></div>;
};

export default TidyCalEmbed;
