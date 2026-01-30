import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/5f0bce7a-38e6-4daf-b989-6c44279836ea.png";

const serviceLinks = [
  { href: "/website", label: "Изработка на уебсайт" },
  { href: "/ai-integration", label: "AI Интеграция" },
  { href: "/housing-software", label: "Софтуер за настаняване" },
];

const Header = () => {
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
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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

  const navLinks = [
    { href: "#work", label: "Проекти" },
    { href: "#contact", label: "Контакти" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "py-3"
            : "py-5"
          }`}
      >
        {/* Background with blur */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${isScrolled
              ? "opacity-100 bg-white/90 backdrop-blur-md shadow-sm"
              : "opacity-0"
            }`}
        />

        {/* Bottom border */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${isScrolled ? 'opacity-100 bg-border' : 'opacity-0'
            }`}
        />

        <div className="container relative">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-blue flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={logoImg}
                  alt="AutomationAid logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className={`text-lg font-display transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'
                } group-hover:text-primary`}>
                Automation Aid
              </span>
            </Link>

            {/* Navigation links - Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {/* Услуги dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`relative px-5 py-2 text-sm font-medium font-body transition-colors duration-300 group flex items-center gap-1 ${isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
                    }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Услуги
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full group-hover:w-6 transition-all duration-300 ${isScrolled ? 'bg-primary' : 'bg-white'
                    }`} />
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                    isDropdownOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div
                    className="bg-white rounded-xl border border-border shadow-lg overflow-hidden min-w-[240px]"
                    style={{
                      boxShadow: '0 12px 40px -8px hsl(222 47% 11% / 0.12), 0 0 0 1px hsl(220 13% 91% / 0.8)',
                    }}
                  >
                    {serviceLinks.map((link, i) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-5 py-3.5 text-sm font-body font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 border-b border-border/50 last:border-0"
                        onClick={() => setIsDropdownOpen(false)}
                        style={{ transitionDelay: `${i * 30}ms` }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other nav links */}
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium font-body transition-colors duration-300 group ${isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
                    }`}
                  style={{ transitionDelay: `${(index + 1) * 50}ms` }}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full group-hover:w-6 transition-all duration-300 ${isScrolled ? 'bg-primary' : 'bg-white'
                    }`} />
                </a>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="sm"
              className={`hidden md:flex font-medium rounded-xl px-5 transition-all duration-300 group ${isScrolled
                  ? 'bg-blue-gradient hover:shadow-blue text-white'
                  : 'bg-white hover:bg-white/90 text-primary'
                }`}
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Безплатна консултация
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border transition-colors duration-300 ${isScrolled
                  ? 'text-foreground border-border hover:border-primary/30'
                  : 'text-white border-white/30 hover:border-white/50'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                <Menu className="w-5 h-5" />
              </span>
              <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <X className="w-5 h-5" />
              </span>
            </button>
          </nav>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/20">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-white/98 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <div
          className={`relative h-full flex flex-col justify-center px-8 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
            }`}
        >
          <nav className="space-y-2">
            {/* Услуги with expandable sub-links */}
            <div>
              <button
                className="flex items-center gap-2 py-4 text-3xl font-display text-foreground hover:text-primary transition-colors duration-300 w-full text-left"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                style={{
                  transitionDelay: '75ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 0.4s ease-out',
                }}
              >
                Услуги
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ${
                  isMobileServicesOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 pb-2 space-y-1 border-l-2 border-primary/20 ml-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2.5 text-xl font-display text-muted-foreground hover:text-primary transition-colors duration-300"
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

            {/* Other nav links */}
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-4 text-3xl font-display text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  transitionDelay: `${(index + 2) * 75}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 0.4s ease-out',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div
            className="mt-12"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out 0.3s',
            }}
          >
            <Button
              size="lg"
              className="w-full bg-blue-gradient hover:shadow-blue text-white font-medium rounded-xl py-6"
              asChild
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Безплатна консултация
              </a>
            </Button>
          </div>

          {/* Decorative element */}
          <div
            className="absolute bottom-12 left-8 right-8"
            style={{
              opacity: isMobileMenuOpen ? 0.5 : 0,
              transition: 'opacity 0.5s ease-out 0.4s',
            }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <p className="text-center text-muted-foreground text-sm font-body mt-6">
              Отговаряме до 24 часа
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
