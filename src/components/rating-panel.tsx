"use client";

import { CheckCircle, Star, WarningCircle } from "@phosphor-icons/react";
import { useEffect, useState, type FormEvent } from "react";

type RatingSummary = {
  average: number;
  count: number;
};

type SubmissionState = "idle" | "submitting" | "success";

const ratingDescriptions = [
  "",
  "Needs work",
  "Fair",
  "Good",
  "Very good",
  "Excellent",
];

export function RatingPanel() {
  const [summary, setSummary] = useState<RatingSummary>({
    average: 0,
    count: 0,
  });
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRatings() {
      try {
        const response = await fetch("/api/ratings", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Unable to load ratings");
        const data = (await response.json()) as RatingSummary;
        setSummary(data);
      } catch (loadError) {
        if (loadError instanceof DOMException && loadError.name === "AbortError") {
          return;
        }
        setError("Ratings could not load. You can still share your rating.");
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void loadRatings();
    return () => controller.abort();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!rating || submissionState === "submitting") return;

    setSubmissionState("submitting");
    setError("");

    try {
      const response = await fetch("/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating }),
      });
      const data = (await response.json()) as RatingSummary & {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(data.message || "Your rating could not be saved.");
      }

      setSummary({ average: data.average, count: data.count });
      setSubmissionState("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Your rating could not be saved. Please try again.",
      );
      setSubmissionState("idle");
    }
  }

  const displayedRating = hoveredRating ?? rating ?? 0;

  return (
    <div className="rounded-3xl bg-[#181818] p-4 text-white shadow-[0_24px_64px_rgba(0,0,0,0.24)]">
      <div className="rounded-lg bg-[#272727] p-4" aria-live="polite">
        {isLoading ? (
          <div aria-label="Loading ratings">
            <div className="skeleton h-8 w-24 rounded bg-[#313131]" />
            <div className="skeleton mt-2 h-4 w-32 rounded bg-[#313131]" />
          </div>
        ) : summary.count > 0 ? (
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="caption-3 uppercase tracking-[0.2em] text-[#e8aa42]">
                Guest average
              </p>
              <p className="body-5 mt-2 text-[#b8b8b8]">
                {summary.count} {summary.count === 1 ? "rating" : "ratings"} shared
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="heading-2">{summary.average.toFixed(1)}</span>
              <Star
                size={28}
                weight="fill"
                className="text-[#e8aa42]"
                aria-hidden="true"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Star size={28} className="text-[#e8aa42]" aria-hidden="true" />
            <div>
              <p className="title-2">No ratings yet</p>
              <p className="body-5 text-[#b8b8b8]">
                Be the first to share your experience.
              </p>
            </div>
          </div>
        )}
      </div>

      {submissionState === "success" ? (
        <div className="p-4 pt-8 text-center" role="status">
          <CheckCircle
            size={40}
            weight="fill"
            className="mx-auto text-[#e8aa42]"
            aria-hidden="true"
          />
          <h3 className="title-1 mt-4">Thank you for your rating</h3>
          <p className="body-3 mt-2 text-[#b8b8b8]">
            Your {rating} star rating is now included in the average.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-2 pt-6">
          <fieldset disabled={submissionState === "submitting"}>
            <legend className="title-2">How was your visit?</legend>
            <div
              className="mt-3 flex gap-1"
              onMouseLeave={() => setHoveredRating(null)}
            >
              {[1, 2, 3, 4, 5].map((value) => {
                const isFilled = value <= displayedRating;
                return (
                  <label
                    key={value}
                    onMouseEnter={() => setHoveredRating(value)}
                    className="cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 active:scale-[0.98]"
                  >
                    <input
                      type="radio"
                      name="restaurant-rating"
                      value={value}
                      checked={rating === value}
                      onChange={() => setRating(value)}
                      aria-label={`${value} ${value === 1 ? "star" : "stars"}`}
                      className="peer sr-only"
                    />
                    <span className="block rounded-lg p-2 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#e8aa42]">
                      <Star
                        size={36}
                        weight={isFilled ? "fill" : "regular"}
                        className={
                          isFilled ? "text-[#e8aa42]" : "text-[#777777]"
                        }
                        aria-hidden="true"
                      />
                    </span>
                  </label>
                );
              })}
            </div>
            <p className="caption-4 mt-2 text-[#b8b8b8]" aria-live="polite">
              {rating
                ? `${rating} out of 5 · ${ratingDescriptions[rating]}`
                : "Choose from 1 to 5 stars"}
            </p>
          </fieldset>

          {error ? (
            <p
              role="alert"
              className="caption-4 mt-4 flex items-start gap-2 text-[#f0a58e]"
            >
              <WarningCircle size={16} className="mt-0.5 flex-none" aria-hidden="true" />
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={!rating || submissionState === "submitting"}
            className="button-md mt-6 w-full rounded-full bg-[#e8aa42] px-3 py-2 text-[#1F1F1F] transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2c66f] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#313131] disabled:text-[#9B9B9B]"
          >
            {submissionState === "submitting"
              ? "Saving your rating…"
              : rating
                ? "Share your rating"
                : "Choose a star rating"}
          </button>
        </form>
      )}
    </div>
  );
}
