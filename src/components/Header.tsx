import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/5f0bce7a-38e6-4daf-b989-6c44279836ea.png";
import { useProjectWizard } from "@/components/wizard/ProjectWizard";

const serviceLinks = [
  { href: "/website", label: "Изработка на уебсайт" },
  { href: "/ai-integration", label: "AI Интеграция" },
  { href: "/housing-software", label: "Софтуер за настаняване" },
  { href: "/ecommerce-store", label: "Онлайн магазин" },
  { href: "/launch-your-business", label: "Стартиране на бизнес" },
  { href: "/automation-for-business", label: "Автоматизация за самонаети" },
  { href: "/ai-agents", label: "AI агенти" },
  { href: "/mvp-development", label: "MVP разработка" },
  { href: "/ai-training", label: "AI обучение" },
  { href: "/compliance", label: "Съответствие" },
];

const navLinks = [
  { href: "/about", label: "За нас" },
  { href: "#contact", label: "Контакти" },
];

const Header = () => {
  const { openWizard } = useProjectWizard();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(window.scrollY / totalHeight, 1));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setIsDropdownOpen(false), 150);
  };

  // Light text over the dark hero, ink text once scrolled onto paper
  const linkTone = "text-ink/70 hover:text-ink";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-2.5" : "py-4"}`}
      >
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled ? "opacity-100 bg-white/92 backdrop-blur-md border-b border-ink/10" : "opacity-0"
          }`}
        />

        <div className="container relative">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-sm overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img src={logoImg} alt="Automation Aid лого" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <span
                className="font-heading text-sm md:text-base tracking-wide text-ink transition-colors duration-300"
              >
                Automation Aid
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`relative px-5 py-2 font-plexmono text-xs uppercase tracking-[0.14em] transition-colors duration-300 flex items-center gap-1.5 ${linkTone}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Услуги
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                    isDropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white border border-ink/15 rounded-sm overflow-hidden min-w-[260px] shadow-[0_24px_60px_-16px_rgba(15,23,42,0.25)]">
                    {serviceLinks.map((link, i) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-center justify-between px-5 py-3.5 font-plex text-sm text-ink/75 hover:text-ink hover:bg-bone transition-all duration-200 border-b border-ink/10 last:border-0 group"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <span>{link.label}</span>
                        <span className="font-plexmono text-[10px] text-signal/70">{String(i + 1).padStart(2, "0")}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.map((link) => {
                const classes = `relative px-5 py-2 font-plexmono text-xs uppercase tracking-[0.14em] transition-colors duration-300 ${linkTone}`;
                return link.href.startsWith("/") ? (
                  <Link key={link.href} to={link.href} className={classes}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} className={classes}>
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={openWizard}
              className="hidden md:inline-flex items-center gap-2 bg-signal text-white font-plex font-semibold text-xs uppercase tracking-[0.1em] px-5 py-2.5 rounded-sm transition-all duration-300 hover:brightness-110 hover:shadow-[0_12px_28px_-10px_hsl(var(--aa-signal)/0.7)] group"
            >
              Заяви проекта сега
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile menu toggle */}
            <button
              className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-sm border transition-colors duration-300 ${
                "text-ink border-ink/20"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`absolute transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              >
                <Menu className="w-5 h-5" />
              </span>
              <span
                className={`absolute transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
              >
                <X className="w-5 h-5" />
              </span>
            </button>
          </nav>
        </div>

        {/* Scroll progress */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-transparent">
          <div className="h-full bg-signal transition-all duration-100" style={{ width: `${scrollProgress * 100}%` }} />
        </div>
      </header>

      {/* Mobile menu — full ink panel */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-400 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Full-screen panel */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 aa-grid-paper pointer-events-none" aria-hidden="true" />

        <div
          className={`relative h-full flex flex-col px-7 pt-24 pb-8 overflow-y-auto transition-transform duration-400 ease-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="space-y-1">
            <div>
              <button
                className="flex items-center justify-between gap-3 py-4 font-heading text-2xl text-ink hover:text-signal transition-colors duration-300 w-full text-left border-b border-ink/10"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease-out 75ms, transform 0.4s ease-out 75ms, color 0.3s",
                }}
              >
                Услуги
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ${
                  isMobileServicesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 py-2 space-y-0.5 border-l border-signal/40 ml-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2.5 font-plex text-lg text-ink/70 hover:text-ink transition-colors duration-300"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link, index) => {
              const styles = {
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.4s ease-out ${(index + 2) * 75}ms, transform 0.4s ease-out ${(index + 2) * 75}ms, color 0.3s`,
              } as const;
              const classes =
                "block py-4 font-heading text-2xl text-ink hover:text-signal transition-colors duration-300 border-b border-ink/10";

              return link.href.startsWith("/") ? (
                <Link key={link.href} to={link.href} className={classes} onClick={() => setIsMobileMenuOpen(false)} style={styles}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={classes} onClick={() => setIsMobileMenuOpen(false)} style={styles}>
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Close button below the menu items */}
          <button
            className="mt-8 flex items-center justify-center gap-2.5 w-full border border-signal text-signal font-plex font-semibold text-sm uppercase tracking-[0.08em] py-3.5 rounded-sm hover:bg-signal/5 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Затвори менюто"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: "opacity 0.4s ease-out 0.2s, background-color 0.3s",
            }}
          >
            <X className="w-4 h-4" />
            Затвори
          </button>

          {/* CTA pinned to the bottom */}
          <div
            className="mt-auto pt-10"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.5s ease-out 0.25s",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openWizard();
              }}
              className="flex items-center justify-center gap-3 w-full bg-signal text-white font-plex font-semibold text-sm uppercase tracking-[0.08em] py-4 rounded-sm"
            >
              Заяви проекта сега
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
            <div className="h-px aa-rule-ink mt-6" />
            <p className="text-center font-plexmono text-xs text-ink/65 tracking-wider mt-4">Отнема под 2 минути · Отговор до 24 часа</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
