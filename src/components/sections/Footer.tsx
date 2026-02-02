import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = {
    services: [
      { label: "Уебсайт / лендинг", href: "/website" },
      { label: "AI бизнес интеграция", href: "/ai-integration" },
      { label: "Софтуер за настаняване", href: "/housing-software" },
      { label: "Всички услуги", href: "/#services" },
    ],
    company: [
      { label: "За нас", href: "/about" },
      { label: "Проекти", href: "/#work" },
      { label: "Контакти", href: "/#contact" },
    ],
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/automation-aid/",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-white border-t border-border">
      {/* Top accent border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Main footer content */}
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6 group">
              <span className="text-2xl font-display text-foreground group-hover:text-primary transition-colors duration-300">
                Automation Aid
              </span>
            </a>
            <p className="text-foreground font-display text-xl leading-relaxed max-w-md mb-8 font-medium italic">
              Премиум уеб решения за амбициозни бизнеси. Създаваме уебсайтове, които не просто изглеждат добре – те работят за вашия успех.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {links.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-body font-semibold text-foreground uppercase tracking-wider mb-6">
              Услуги
            </h3>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground font-body hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-body font-semibold text-foreground uppercase tracking-wider mb-6">
              Компания
            </h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground font-body hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground font-body">
              © {new Date().getFullYear()} Automation Aid. Всички права запазени.
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-6">
              <a
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors duration-300"
              >
                Политика за поверителност
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors duration-300"
              >
                Условия за ползване
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative orb */}
      <div className="glow-orb glow-orb-copper w-[300px] h-[300px] -bottom-40 right-1/4 opacity-10" />
    </footer>
  );
};

export default Footer;
