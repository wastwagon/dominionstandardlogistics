import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { HeroSlide } from "../content/images";

type Props = {
  slides: readonly HeroSlide[];
  intervalMs?: number;
  /** Full-bleed hero: hide per-slide captions; lighter controls */
  variant?: "default" | "immersive";
};

export default function HeroSlider({
  slides,
  intervalMs = 6500,
  variant = "default",
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const len = slides.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + len) % len);
    },
    [len],
  );

  const goTo = useCallback((i: number) => {
    setIndex(((i % len) + len) % len);
  }, [len]);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [paused, intervalMs, len]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  const immersive = variant === "immersive";

  return (
    <div
      ref={wrapRef}
      className={`hero-slider${immersive ? " hero-slider--immersive" : ""}`}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured logistics capabilities"
      aria-live="polite"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="hero-slider__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        id={`${id}-track`}
      >
        {slides.map((slide, i) => (
          <div className="hero-slider__slide" key={`${slide.label}-${i}`} aria-hidden={i !== index}>
            <img
              src={slide.src}
              alt={slide.alt}
              width={1400}
              height={1050}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
              decoding="async"
            />
            {!immersive && (
              <div className="hero-slider__caption">
                <strong>{slide.label}</strong>
                <span>{slide.blurb}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        className="hero-slider__arrow hero-slider__arrow--prev"
        aria-controls={`${id}-track`}
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        className="hero-slider__arrow hero-slider__arrow--next"
        aria-controls={`${id}-track`}
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="hero-slider__dots" role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1} of ${len}`}
            className={`hero-slider__dot${i === index ? " is-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
