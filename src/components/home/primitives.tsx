import { useEffect, useRef, useState } from "react";

/** Toggles `.aa-in` on the returned ref's element when it enters the viewport. */
export const useReveal = <T extends HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

/** Registration crosshair mark. */
export const Cross = ({ className = "" }: { className?: string }) => (
  <span className={`aa-cross inline-block ${className}`} aria-hidden="true" />
);

interface SectionHeadProps {
  index: string;
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
}

/** Numbered technical section header: `01 / ЕТИКЕТ` rule + display title. */
export const SectionHead = ({ index, label, title, lead, dark = false, align = "left" }: SectionHeadProps) => {
  const tone = dark ? "text-paper" : "text-ink";
  const faint = dark ? "text-paper/50" : "text-ink/65";
  const rule = dark ? "aa-rule-light" : "aa-rule-ink";

  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-4 mb-6 ${align === "center" ? "justify-center" : ""}`}>
        <span className={`aa-label ${dark ? "text-signal" : "text-machine-deep"}`}>{index}</span>
        <span className={`h-px w-10 ${rule}`} />
        <span className={`aa-label ${faint}`}>{label}</span>
      </div>
      <h2 className={`aa-display text-[clamp(1.9rem,4.6vw,3.4rem)] ${tone}`}>{title}</h2>
      {lead ? (
        <p
          className={`font-plex text-base md:text-lg leading-relaxed mt-5 max-w-2xl ${
            dark ? "text-paper/70" : "text-ink/70"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
};
