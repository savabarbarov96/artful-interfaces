import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, X } from "lucide-react";
import { Cross } from "@/components/home/primitives";

/* ------------------------------------------------------------------ */
/* Context — opens the wizard from anywhere (header, heroes, sections) */
/* ------------------------------------------------------------------ */

const WizardContext = createContext<{ openWizard: () => void }>({ openWizard: () => {} });

export const useProjectWizard = () => useContext(WizardContext);

export const ProjectWizardProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WizardContext.Provider value={{ openWizard: () => setIsOpen(true) }}>
      {children}
      <ProjectWizard open={isOpen} onOpenChange={setIsOpen} />
    </WizardContext.Provider>
  );
};

/* ------------------------------------------------------------------ */
/* Questionnaire data                                                  */
/* ------------------------------------------------------------------ */

type Goal = "build" | "expand" | "automate";

const goalOptions: { id: Goal; title: string; description: string }[] = [
  {
    id: "build",
    title: "Да изградя нов бизнес",
    description: "Стартирам нещо ново и ми трябва дигитална основа",
  },
  {
    id: "expand",
    title: "Да разширя бизнеса си",
    description: "Имам работещ бизнес и искам повече клиенти онлайн",
  },
  {
    id: "automate",
    title: "Да автоматизирам задачи",
    description: "Губя време в рутинни процеси, които машина може да върши",
  },
];

const goalLabels: Record<Goal, string> = {
  build: "Изграждане на нов бизнес",
  expand: "Разширяване на съществуващ бизнес",
  automate: "Автоматизация на рутинни задачи",
};

// Step 2 copy + focus options shift with the chosen goal
const focusCopy: Record<Goal, { title: string; lead: string; options: string[] }> = {
  build: {
    title: "С какво да започнем?",
    lead: "Изберете какво да включва дигиталната основа на новия ви бизнес.",
    options: ["Уебсайт", "Онлайн магазин", "Резервации / записване", "AI интеграция", "Уеб приложение", "Друго"],
  },
  expand: {
    title: "Какво да добавим?",
    lead: "Изберете областите, с които да разширим присъствието ви.",
    options: ["Нов уебсайт", "Онлайн магазин", "AI интеграция", "Автоматизация на процеси", "Резервации / записване", "Друго"],
  },
  automate: {
    title: "Какво да автоматизираме?",
    lead: "Изберете къде губите най-много време.",
    options: ["Обработка на запитвания", "AI чатбот", "Оферти и документи", "Резервации / записване", "Връзка между системи", "Друго"],
  },
};

const aboutPlaceholder: Record<Goal, string> = {
  build: "напр. кафене в София, онлайн курсове, услуги за дома…",
  expand: "напр. салон за красота, счетоводна кантора, магазин…",
  automate: "напр. всяка оферта я пиша ръчно по 30 минути…",
};

const budgetOptions = ["До 100 € / месец", "100 – 300 € / месец", "Над 300 € / месец", "Още не знам"];
const timelineOptions = ["Възможно най-скоро", "До 1 месец", "1 – 3 месеца", "Само проучвам"];

const TOTAL_STEPS = 4;

/* ------------------------------------------------------------------ */
/* Shared UI bits                                                      */
/* ------------------------------------------------------------------ */

const chipClasses = (active: boolean) =>
  `px-3.5 py-2.5 rounded-sm font-plex text-sm border text-left transition-all duration-200 ${
    active ? "bg-ink text-paper border-ink" : "bg-white text-ink/75 border-ink/20 hover:border-ink/50 hover:text-ink"
  }`;

const fieldClasses =
  "w-full h-12 px-4 rounded-sm border border-ink/20 bg-white font-plex text-sm text-ink placeholder:text-ink/50 focus:outline-none focus:border-machine focus:shadow-[0_0_0_3px_hsl(var(--aa-teal)/0.12)] transition-all duration-300";

const StepHead = ({ title, lead }: { title: string; lead: string }) => (
  <div className="mb-6">
    <h2 className="font-heading text-xl md:text-2xl text-ink mb-2">{title}</h2>
    <p className="font-plex text-sm text-ink/65 leading-relaxed">{lead}</p>
  </div>
);

/* ------------------------------------------------------------------ */
/* The wizard                                                          */
/* ------------------------------------------------------------------ */

const ProjectWizard = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [focus, setFocus] = useState<string[]>([]);
  const [about, setAbout] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [contactHint, setContactHint] = useState(false);

  // Fresh questionnaire every time the wizard opens
  useEffect(() => {
    if (open) {
      setStep(0);
      setSubmitted(false);
      setGoal(null);
      setFocus([]);
      setAbout("");
      setBudget("");
      setTimeline("");
      setContact({ name: "", email: "", phone: "" });
      setContactHint(false);
    }
  }, [open]);

  const toggleFocus = (option: string) => {
    setFocus((prev) => (prev.includes(option) ? prev.filter((f) => f !== option) : [...prev, option]));
  };

  const buildMailto = () => {
    const subject = `Заявка за проект — ${goal ? goalLabels[goal] : "Общо запитване"}`;
    const bodyLines = [
      "Тип: Заявка за проект (въпросник от сайта)",
      `Цел: ${goal ? goalLabels[goal] : "Не е избрана"}`,
      `Фокус: ${focus.length ? focus.join(", ") : "Не е посочен"}`,
      `За проекта: ${about.trim() || "Не е попълнено"}`,
      `Бюджет: ${budget || "Не е посочен"}`,
      `Срок: ${timeline || "Не е посочен"}`,
      "",
      "Контакти:",
      `Име: ${contact.name.trim() || "Не е попълнено"}`,
      `Email: ${contact.email.trim() || "Не е попълнен"}`,
      `Телефон: ${contact.phone.trim() || "Не е попълнен"}`,
    ];
    return `mailto:slav@automationaid.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const handleSubmit = () => {
    // Soft nudge only — one contact channel is the whole point of the wizard,
    // but nothing is format-validated and the second click always goes through.
    if (!contact.email.trim() && !contact.phone.trim() && !contactHint) {
      setContactHint(true);
      return;
    }
    window.location.href = buildMailto();
    setSubmitted(true);
  };

  const focusStep = goal ? focusCopy[goal] : focusCopy.build;
  const progress = submitted ? 1 : (step + 1) / TOTAL_STEPS;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-ink/45 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed z-[80] inset-0 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:max-w-[600px] sm:max-h-[92vh] bg-white text-ink sm:border sm:border-ink/15 sm:shadow-[0_40px_90px_-24px_rgba(15,23,42,0.35)] flex flex-col overflow-hidden focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:data-[state=open]:zoom-in-95"
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="sr-only">Заявка за проект</DialogPrimitive.Title>

          <div className="absolute inset-0 aa-grid-paper opacity-60 pointer-events-none" aria-hidden="true" />
          <Cross className="absolute top-3 left-3 text-ink/25 pointer-events-none hidden sm:block" />

          {/* Top bar */}
          <div className="relative flex items-center justify-between px-6 md:px-8 pt-5 pb-4 border-b border-ink/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              <span className="aa-label text-ink/70">Заявка за проект</span>
            </div>
            <div className="flex items-center gap-4">
              {!submitted && (
                <span className="font-plexmono text-[11px] tracking-[0.15em] text-ink/55">
                  {String(step + 1).padStart(2, "0")} / {String(TOTAL_STEPS).padStart(2, "0")}
                </span>
              )}
              <DialogPrimitive.Close
                className="w-8 h-8 flex items-center justify-center rounded-sm border border-ink/15 text-ink/60 hover:text-ink hover:border-ink/40 transition-colors"
                aria-label="Затвори"
              >
                <X className="w-4 h-4" />
              </DialogPrimitive.Close>
            </div>
          </div>

          {/* Progress rule */}
          <div className="relative h-px bg-ink/10 flex-shrink-0">
            <div className="h-full bg-signal transition-all duration-500 ease-out" style={{ width: `${progress * 100}%` }} />
          </div>

          {/* Body */}
          <div className="relative flex-1 overflow-y-auto px-6 md:px-8 py-7 md:py-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-6">
                <span className="w-14 h-14 rounded-sm bg-machine/10 border border-machine/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-machine-deep" />
                </span>
                <h2 className="font-heading text-xl md:text-2xl text-ink mb-3">Заявката е готова!</h2>
                <p className="font-plex text-sm text-ink/70 leading-relaxed max-w-sm mb-7">
                  Отворихме имейла с попълнения бриф — просто натиснете „Изпрати“ в пощата си и той пристига при нас.
                </p>
                <div className="w-full max-w-sm text-left border border-ink/15 bg-bone rounded-sm divide-y divide-ink/10 mb-7">
                  {[
                    "Преглеждаме брифа ви внимателно",
                    "До 24 часа получавате конкретно предложение",
                    "Решавате без никакъв ангажимент",
                  ].map((item, i) => (
                    <div key={item} className="flex items-center gap-3 px-4 py-3">
                      <span className="font-plexmono text-[11px] text-signal">0{i + 1}</span>
                      <span className="font-plex text-sm text-ink/80">{item}</span>
                    </div>
                  ))}
                </div>
                <DialogPrimitive.Close className="inline-flex items-center gap-2 border border-ink/25 text-ink font-plex font-medium text-sm uppercase tracking-[0.08em] px-7 py-3 rounded-sm hover:border-ink/60 hover:bg-ink/5 transition-all duration-300">
                  Затвори
                </DialogPrimitive.Close>
              </div>
            ) : step === 0 ? (
              <>
                <StepHead
                  title="Какво искате да постигнете?"
                  lead="Изберете посоката — въпросникът отнема под 2 минути."
                />
                <div className="space-y-3">
                  {goalOptions.map((option, i) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setGoal(option.id);
                        setFocus([]);
                        setStep(1);
                      }}
                      className={`group w-full flex items-center gap-4 text-left border rounded-sm px-5 py-4 transition-all duration-250 ${
                        goal === option.id
                          ? "border-ink bg-bone"
                          : "border-ink/15 bg-white hover:border-ink/50 hover:bg-bone/60"
                      }`}
                    >
                      <span className="font-plexmono text-[11px] text-signal/80 flex-shrink-0">0{i + 1}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-plex font-semibold text-sm md:text-base text-ink mb-0.5">
                          {option.title}
                        </span>
                        <span className="block font-plex text-xs md:text-sm text-ink/60 leading-snug">
                          {option.description}
                        </span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-ink/30 group-hover:text-signal group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </>
            ) : step === 1 ? (
              <>
                <StepHead title={focusStep.title} lead={focusStep.lead} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {focusStep.options.map((option) => {
                    const active = focus.includes(option);
                    return (
                      <button key={option} type="button" onClick={() => toggleFocus(option)} className={chipClasses(active)}>
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0 transition-colors ${
                              active ? "bg-signal border-signal" : "border-ink/30 bg-white"
                            }`}
                          >
                            {active && <Check className="w-3 h-3 text-white" />}
                          </span>
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <label htmlFor="wizard-about" className="block font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/65 mb-2">
                  За какво става дума? <span className="text-ink/45 normal-case tracking-normal">(по избор)</span>
                </label>
                <input
                  id="wizard-about"
                  type="text"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder={goal ? aboutPlaceholder[goal] : aboutPlaceholder.build}
                  className={fieldClasses}
                />
              </>
            ) : step === 2 ? (
              <>
                <StepHead
                  title="Бюджет и срокове"
                  lead="Ориентировъчно е достатъчно — плановете ни започват от 99 € на месец."
                />
                <p className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/65 mb-2.5">Месечен бюджет</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setBudget(budget === option ? "" : option)}
                      className={chipClasses(budget === option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <p className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/65 mb-2.5">Кога да е готово</p>
                <div className="grid grid-cols-2 gap-2">
                  {timelineOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setTimeline(timeline === option ? "" : option)}
                      className={chipClasses(timeline === option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <StepHead
                  title="Как да се свържем с вас?"
                  lead="Оставете телефон или email — до 24 часа получавате конкретно предложение за проекта."
                />
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="wizard-name" className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/65">
                      Име <span className="text-ink/45 normal-case tracking-normal">(по избор)</span>
                    </label>
                    <input
                      id="wizard-name"
                      type="text"
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                      placeholder="Вашето име"
                      className={fieldClasses}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-3">
                    <div className="space-y-1.5">
                      <label htmlFor="wizard-phone" className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/65">
                        Телефон
                      </label>
                      <input
                        id="wizard-phone"
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        placeholder="+359 888 123 456"
                        className={fieldClasses}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="wizard-email" className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/65">
                        Email
                      </label>
                      <input
                        id="wizard-email"
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        placeholder="email@example.com"
                        className={fieldClasses}
                      />
                    </div>
                  </div>
                  {contactHint && (
                    <p className="font-plex text-xs text-signal leading-relaxed">
                      Без телефон или email няма как да ви изпратим предложението — но ако предпочитате, натиснете
                      бутона отново и ще изпратим заявката както е.
                    </p>
                  )}
                  <div className="flex items-center gap-2.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-machine animate-pulse flex-shrink-0" />
                    <p className="font-plexmono text-[11px] text-ink/55 tracking-wide">
                      Без обвързване · Без скрити такси · Отговор до 24 часа
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer nav */}
          {!submitted && (
            <div className="relative flex items-center justify-between gap-3 px-6 md:px-8 py-4 border-t border-ink/10 bg-bone/70 flex-shrink-0">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 font-plexmono text-[11px] uppercase tracking-[0.14em] text-ink/60 hover:text-ink px-2 py-2 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Назад
                </button>
              ) : (
                <span className="font-plexmono text-[11px] text-ink/45 tracking-wide">Под 2 минути</span>
              )}

              {step > 0 && step < TOTAL_STEPS - 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="group inline-flex items-center gap-2.5 bg-ink text-white font-plex font-semibold text-xs uppercase tracking-[0.1em] px-6 py-3 rounded-sm transition-all duration-300 hover:bg-ink-soft"
                >
                  Продължи
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}

              {step === TOTAL_STEPS - 1 && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="group inline-flex items-center gap-2.5 bg-signal text-white font-plex font-semibold text-xs uppercase tracking-[0.1em] px-6 py-3 rounded-sm transition-all duration-300 hover:brightness-110 hover:shadow-[0_14px_32px_-10px_hsl(var(--aa-signal)/0.7)]"
                >
                  Заяви проекта сега
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ProjectWizard;
