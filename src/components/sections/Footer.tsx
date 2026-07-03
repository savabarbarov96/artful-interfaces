import { ArrowUpRight } from "lucide-react";

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
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-bone border-t border-ink/10">
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6 group">
              <span className="font-heading text-xl text-ink group-hover:text-signal transition-colors duration-300">
                Automation Aid
              </span>
            </a>
            <p className="font-plex text-base md:text-lg text-ink/70 leading-relaxed max-w-md mb-8">
              Изработка на уебсайтове, AI интеграции и автоматизации за амбициозни бизнеси. Създаваме сайтове,
              които не просто изглеждат добре — те работят за вашия растеж всеки ден.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/automation-aid/"
                className="w-11 h-11 rounded-sm bg-white border border-ink/15 flex items-center justify-center text-ink/70 hover:text-signal hover:border-signal/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="aa-label text-ink/65 mb-6">Услуги</h3>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-plex text-sm text-ink/70 hover:text-ink transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-signal" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="aa-label text-ink/65 mb-6">Компания</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-plex text-sm text-ink/70 hover:text-ink transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-signal" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-plexmono text-xs text-ink/60 tracking-wide">
              © {new Date().getFullYear()} Automation Aid. Всички права запазени.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="/privacy-policy"
                className="font-plexmono text-xs text-ink/60 hover:text-ink tracking-wide transition-colors duration-300"
              >
                Политика за поверителност
              </a>
              <a
                href="#"
                className="font-plexmono text-xs text-ink/60 hover:text-ink tracking-wide transition-colors duration-300"
              >
                Условия за ползване
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
