"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  "Good food brings us together.",
  "Your feedback keeps us growing.",
];

const words = lines.flatMap((line) => line.split(" "));

export function TaglineReveal() {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => {
        setVisibleWords(new Set(words.map((_, index) => index)));
      });
      return () => cancelAnimationFrame(frame);
    }

    const observers = wordRefs.current.map((word, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleWords((current) => new Set(current).add(index));
            observer.disconnect();
          }
        },
        { threshold: 0.8, rootMargin: "0px 0px -20% 0px" },
      );

      if (word) observer.observe(word);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  let wordIndex = 0;

  return (
    <p className="heading-2 max-w-2xl text-[#1F1F1F]">
      {lines.map((line) => (
        <span key={line} className="block">
          {line.split(" ").map((word) => {
            const index = wordIndex++;
            return (
              <span
                key={`${word}-${index}`}
                ref={(element) => {
                  wordRefs.current[index] = element;
                }}
                className={`mr-3 inline-block opacity-30 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:opacity-100 motion-reduce:transition-none ${
                  visibleWords.has(index) ? "opacity-100" : ""
                }`}
                style={{
                  transitionDelay: `${Math.min(index * 45, 360)}ms`,
                }}
              >
                {word}
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
