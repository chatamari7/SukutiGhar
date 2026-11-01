"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviewSummary, reviews, type Review } from "@/data/reviews";

const ORANGE = "#fb8e28";
const BLUE = "#1a4fb9";

function GoogleG({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.1 24.6c0-1.6-.1-3.1-.4-4.6H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.7c4.3-4 6.9-9.9 6.9-17z" />
      <path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.9 2.3-8.5 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

function Stars({ size = 22 }: { size?: number }) {
  return (
    <span className="flex gap-[4px]" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill={ORANGE}
            d="M12 .6l3.5 7.6 8.3 1-6.1 5.7 1.6 8.2L12 19l-7.3 4.1 1.6-8.2L.2 9.2l8.3-1z"
          />
        </svg>
      ))}
    </span>
  );
}

function StoreBadge() {
  return (
    <span className="flex h-[59px] w-[59px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
      <svg width="44" height="39" viewBox="0 0 38 34" aria-hidden="true">
        <path fill="#1a73e8" d="M4 0h30l4 11c0 3-2.3 5-5 5-2.3 0-4.2-1.4-5-3.3C27.2 14.6 25.3 16 23 16s-4.2-1.4-5-3.300C17.200 14.600 15.300 16 13 16s-4.200-1.400-5-3.300C7.200 14.600 5.300 16 3.500 16 .8 16-1 14 0 11L4 0zm1.800 3L2.700 11c.2.9 1 1.500 1.800 1.500 1.100 0 2-.8 2-2L5.800 3zM9 3l-.4 7.500c0 1.200.9 2 2 2 1.200 0 2-.8 2-2L13 3H9zm7 0l-.2 7.500c0 1.200.9 2 2.200 2s2.200-.8 2.200-2L19.800 3H16zm7 0l.5 7.500c.1 1.200.9 2 2 2 1.200 0 2-.8 2-2L27 3h-4zm7.500 0L31 10.500c0 1.200.9 2 2 2 .9 0 1.600-.6 1.800-1.500L31.700 3H30.500z" />
        <path fill="#1a73e8" d="M3 18h4v14h8V22h8v10h8V18h4v16H3z" />
      </svg>
    </span>
  );
}

function ReviewCard({ review, className = "" }: { review: Review; className?: string }) {
  return (
    <article className={`relative flex h-[272px] flex-col bg-[#fafafa] px-[20px] pt-[19px] ${className}`}>
      <span className="absolute right-[15px] top-[12px]">
        <GoogleG />
      </span>
      <div className="flex items-start gap-[11px]">
        {review.avatar ? (
          <Image src={review.avatar} alt="" width={59} height={59} className="h-[59px] w-[59px] shrink-0 rounded-full" />
        ) : (
          <span
            className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full font-arial text-[30px] text-white"
            style={{ backgroundColor: review.color }}
            aria-hidden="true"
          >
            {review.initial}
          </span>
        )}
        <div className="pt-[2px] font-arial">
          <p className="text-[17.4px] font-bold leading-[24px]" style={{ color: BLUE }}>
            {review.name}
          </p>
          <p className="mt-[8px] text-[16.3px] leading-[20px] text-[#686868]">{review.when}</p>
        </div>
      </div>
      <div className="mt-[17px]">
        <Stars />
      </div>
      <p className="mt-[12px] whitespace-pre-line font-arial text-[18.7px] leading-[30px] text-[#333]">{review.text}</p>
    </article>
  );
}

export default function Reviews() {
  // `active` is the dot index; the first visible review is (active + 1) % n.
  // Initial state (2) reproduces the reference: dot 3 active, reviews in original order.
  const n = reviews.length;
  const [active, setActive] = useState(n - 1);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((delta: number) => setActive((a) => (a + delta + n) % n), [n]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => go(1), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, go]);

  const first = (active + 1) % n;
  const visible = Array.from({ length: n }, (_, i) => reviews[(first + i) % n]);

  return (
    <section
      id="reviews"
      aria-label="Google reviews"
      className="bg-white pb-8 pt-8 lg:h-[490px] lg:pb-0 lg:pt-[42px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex justify-center">
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-yellow text-black lg:h-[69px] lg:w-[69px]">
          <svg viewBox="0 0 38 28" aria-hidden="true" className="h-[20px] w-[27px] lg:h-[27px] lg:w-[37px]" fill="currentColor">
            <circle cx="8.5" cy="19" r="8.2" />
            <path d="M.3 19C.3 9.5 5 3.2 13.6.6l1.8 4.6C10.600 7 8.600 10 8.500 14z" />
            <circle cx="28.5" cy="19" r="8.2" />
            <path d="M20.300 19c0-9.500 4.700-15.800 13.300-18.400l1.800 4.600C30.600 7 28.600 10 28.500 14z" />
          </svg>
        </span>
      </div>

      <div className="mx-auto mt-8 flex w-[calc(100%-32px)] max-w-shell flex-col gap-8 lg:mt-[54px] lg:h-[272px] lg:flex-row lg:items-center lg:gap-0 lg:pr-[8px]">
        {/* Google summary */}
        <div className="flex items-start gap-[12px] lg:w-[383px] lg:shrink-0 lg:pl-[19px]">
          <StoreBadge />
          <div className="font-arial text-[#333]">
            <p className="text-[17.5px] font-bold leading-[20px]">{reviewSummary.name}</p>
            <div className="mt-[3px] flex items-center gap-[6px]">
              <span className="text-[25.5px] font-bold leading-[30px]" style={{ color: ORANGE }}>
                {reviewSummary.rating}
              </span>
              <Stars size={25} />
            </div>
            <p className="mt-[3px] text-[17.6px] leading-[22px] text-[#6c6a6f]">Based on {reviewSummary.count} reviews</p>
            <p className="mt-[8px] text-[17.6px] leading-[22px] text-[#6c6a6f]">
              powered by{" "}
              <span className="font-bold">
                <span style={{ color: "#4285f4" }}>G</span>
                <span style={{ color: "#ea4335" }}>o</span>
                <span style={{ color: "#fbbc05" }}>o</span>
                <span style={{ color: "#4285f4" }}>g</span>
                <span style={{ color: "#34a853" }}>l</span>
                <span style={{ color: "#ea4335" }}>e</span>
              </span>
            </p>
            <a
              href={reviewSummary.writeReviewHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[12px] inline-flex h-[40px] w-[164px] items-center justify-center gap-[6px] rounded-full bg-[#3578e5] font-arial text-[16.3px] font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#2a68cf]"
            >
              review us on
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white">
                <GoogleG size={14} />
              </span>
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex min-w-0 flex-1 items-center">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous reviews"
            className="mr-[8px] flex h-[40px] w-[24px] shrink-0 items-center justify-center text-[#9a9a9a] transition-colors hover:text-black lg:mr-[24px]"
          >
            <ChevronLeft strokeWidth={1.25} className="h-[30px] w-[30px]" />
          </button>
          <div className="relative min-w-0 flex-1" aria-live="polite">
            <div className="grid gap-[25px] sm:grid-cols-2 min-[1400px]:grid-cols-3">
              {visible.map((r, i) => (
                <ReviewCard
                  key={r.name}
                  review={r}
                  className={i === 1 ? "hidden sm:flex" : i === 2 ? "hidden min-[1400px]:flex" : ""}
                />
              ))}
            </div>
            <div className="absolute left-0 right-0 top-[calc(100%+22px)] flex items-center justify-center gap-[15px] lg:pr-[12px]" role="tablist" aria-label="Review pages">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Show review set ${i + 1}`}
                  onClick={() => setActive(i)}
                  className="flex h-[12px] w-[10px] items-center justify-center"
                >
                  <span
                    className="block rounded-full"
                    style={{
                      width: i === active ? 10 : 8,
                      height: i === active ? 10 : 8,
                      backgroundColor: i === active ? BLUE : "#d7d7d7",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next reviews"
            className="ml-[8px] flex h-[40px] w-[24px] shrink-0 items-center justify-center text-[#9a9a9a] transition-colors hover:text-black lg:ml-[12px]"
          >
            <ChevronRight strokeWidth={1.25} className="h-[30px] w-[30px]" />
          </button>
        </div>
      </div>
      <div className="h-10 lg:hidden" />
    </section>
  );
}
