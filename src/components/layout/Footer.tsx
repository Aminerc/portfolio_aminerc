import { useEffect, useState } from "react";

import { socials } from "../../constants";
import { config } from "../../constants/config";

const iconMap = {
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M4.983 3.5a2.5 2.5 0 1 1-.002 5.002 2.5 2.5 0 0 1 .002-5.002Zm-.75 6.75h1.5A.75.75 0 0 1 6.5 11v9.25a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V11a.75.75 0 0 1 .75-.75Zm5 0h1.44a.75.75 0 0 1 .75.75v.522c.53-.778 1.42-1.522 2.963-1.522 2.308 0 3.807 1.502 3.807 4.62v5.88a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-5.19c0-1.557-.559-2.457-1.674-2.457-1.2 0-1.91.809-1.91 2.457v5.19a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V11a.75.75 0 0 1 .75-.75Z" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.516c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.728-4.043-1.642-4.043-1.642-.546-1.4-1.334-1.773-1.334-1.773-1.09-.76.082-.744.082-.744 1.205.086 1.84 1.253 1.84 1.253 1.07 1.854 2.807 1.319 3.492 1.008.108-.794.417-1.32.76-1.625-2.665-.31-5.466-1.362-5.466-6.06 0-1.34.469-2.438 1.235-3.297-.124-.31-.536-1.564.117-3.26 0 0 1.008-.33 3.301 1.258a11.34 11.34 0 0 1 3.004-.413c1.02.005 2.046.141 3.003.413 2.293-1.588 3.298-1.258 3.298-1.258.655 1.696.243 2.95.119 3.26.77.86 1.233 1.957 1.233 3.297 0 4.71-2.805 5.745-5.476 6.048.429.374.813 1.108.813 2.235 0 1.615-.015 2.92-.015 3.318 0 .323.216.7.826.58C20.565 22.313 24 17.815 24 12.516 24 5.87 18.627.5 12 .5Z" />
    </svg>
  ),
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50 w-full border-t border-tertiary bg-primary/85 px-4 py-3 backdrop-blur-sm"
      role="contentinfo"
      aria-label="Pied de page"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 text-center sm:flex-row sm:justify-between">
        <div className="flex flex-col text-secondary text-xs sm:text-left">
          <span>
            © 2025 {config.html.fullName} &middot; Data · Solutions digitales ·
            Business Intelligence
          </span>
          <span>Fait avec ❤️, patience et intelligence artificielle 📈.</span>
        </div>
        <div className="flex items-center gap-3 text-secondary">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary/20 transition-colors duration-200 hover:border-white hover:text-white"
            >
              {iconMap[social.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
