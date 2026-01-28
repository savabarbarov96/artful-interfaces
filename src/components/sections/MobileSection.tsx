import { useEffect, useRef, useState, useCallback } from "react";

const MobileSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Ping-pong video playback
  const handleVideoTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.playbackRate > 0 && video.currentTime >= video.duration - 0.05) {
      video.playbackRate = -1;
    }
    if (video.playbackRate < 0 && video.currentTime <= 0.05) {
      video.playbackRate = 1;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1;

    const onEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener("timeupdate", handleVideoTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("timeupdate", handleVideoTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, [handleVideoTimeUpdate]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white flex flex-col"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Text overlay — top area */}
      <div className="relative z-10 container pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10">
        <div className="max-w-2xl ml-auto mr-0 md:mr-[5%] lg:mr-[8%] text-right">
          {/* Label */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-label text-primary/80 tracking-[0.18em]">
              Responsive дизайн
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`text-display-md text-foreground mt-3 mb-5 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Перфектно на{" "}
            <span className="text-accent-italic">всяко</span> устройство
          </h2>

          {/* Body text */}
          <p
            className={`font-body text-lg md:text-xl text-foreground/70 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Знаем, че вашите клиенти ви намират през телефона, затова ние
            гарантираме, че всичко което правим работи на всички устройства и
            екрани безупречно.
          </p>
        </div>
      </div>

      {/* Video — fills remaining space */}
      <div
        className={`relative flex-1 flex items-center justify-center px-4 pb-8 md:pb-12 transition-all duration-1000 delay-300 ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-[0.97]"
        }`}
      >
        {/* Soft glow behind */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 55% 60%, hsl(217 91% 50% / 0.06), transparent 70%)",
          }}
        />

        <div className="relative w-full max-w-5xl mx-auto md:ml-auto md:mr-[3%] lg:mr-[5%]">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_hsl(222_47%_11%/0.18)]">
            <video
              ref={videoRef}
              src="/clients/Mobile_section.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default MobileSection;
