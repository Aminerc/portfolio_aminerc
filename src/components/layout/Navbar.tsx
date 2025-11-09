import { useEffect, useState } from "react";

import { styles } from "../../constants/styles";
import { navLinks, socials } from "../../constants";
import { pdp, menu, close } from "../../assets";
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

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
          aria-label="Retour à l'accueil"
        >
          <img src={pdp} alt="Photo de profil d'Amine Ouardi" className="h-9 w-9 object-contain rounded-full" loading="eager" />
          <div className="flex flex-col">
            <p className="flex cursor-pointer text-[18px] font-bold text-white">
              {config.html.title}
            </p>
            <span className="text-[10px] text-secondary/50 italic lowercase -mt-1">
              mis à jour le 09 11 2025
            </span>
          </div>
        </a>

        <ul className="hidden list-none flex-row gap-10 sm:flex" role="menubar" aria-label="Menu de navigation">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
              role="none"
            >
              <a 
                href={`#${nav.id}`}
                role="menuitem"
                aria-current={active === nav.id ? "page" : undefined}
                className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary p-2 rounded"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 sm:flex">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="text-secondary transition-colors duration-200 hover:text-white"
            >
              {iconMap[social.icon]}
            </a>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <button
            type="button"
            aria-expanded={toggle}
            aria-controls="mobile-menu"
            aria-label={toggle ? "Fermer le menu" : "Ouvrir le menu"}
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary p-2 rounded"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="h-[28px] w-[28px] object-contain"
              aria-hidden="true"
            />
          </button>

          <div
            id="mobile-menu"
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
            role="menu"
            aria-orientation="vertical"
            aria-label="Menu mobile"
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  role="none"
                >
                  <a 
                    href={`#${nav.id}`}
                    role="menuitem"
                    aria-current={active === nav.id ? "page" : undefined}
                    className="block w-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-3" role="none">
                {socials.map((social) => (
                  <a
                    key={`mobile-${social.name}`}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary/30 text-secondary transition-colors duration-200 hover:border-white hover:text-white"
                  >
                    {iconMap[social.icon]}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
