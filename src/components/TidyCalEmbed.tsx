import { useEffect, useRef } from "react";

interface TidyCalEmbedProps {
  path: string;
  className?: string;
}

const TidyCalEmbed = ({ path, className }: TidyCalEmbedProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSrc = "https://asset-tidycal.b-cdn.net/js/embed.js";

    function loadTidyCal() {
      if ((window as any).TidyCal && ref.current) {
        (window as any).TidyCal.load();
      }
    }

    // If script not present, add it
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = loadTidyCal;
      document.body.appendChild(script);
    } else {
      // If script already loaded, try to load the embed
      setTimeout(loadTidyCal, 100);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={className ? `tidycal-embed ${className}` : "tidycal-embed"}
      data-path={path}
    />
  );
};

export default TidyCalEmbed;