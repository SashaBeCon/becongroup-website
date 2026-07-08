"use client";

import * as React from "react";

interface RailNode {
  kicker: string;
  title: string;
  desc?: string;
}

interface SignalStripProps {
  /** Exactly three nodes: Signal → System → Outcomes (blue → blue → orange). */
  items: [RailNode, RailNode, RailNode];
}

/** Idle re-sweep cadence (ms) while the rail stays in view. Set to 0 to
 *  disable the idle loop and rely solely on replay-on-re-entry. */
const IDLE_RESWEEP_MS = 12000;

/**
 * Pipeline rail — the convergence spine. Three node dots joined by gradient
 * beams. The light sweeps start → system → lands (adding `.play`), then the
 * landing dot breathes. It replays each time the rail scrolls back into view,
 * and re-sweeps slowly while it stays on screen. Motion lives in globals.css;
 * this only toggles the `.play` class. With JS off or with
 * `prefers-reduced-motion`, the rail stays in its static state.
 */
export function SignalStrip({ items }: SignalStripProps) {
  const tones = ["a", "b", "c"] as const;
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: leave the rail static.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const play = () => {
      el.classList.remove("play");
      void el.offsetWidth; // reflow so the animation restarts
      el.classList.add("play");
    };

    if (!("IntersectionObserver" in window)) {
      play();
      return;
    }

    let armed = true; // can fire a scroll-in play
    let visible = false;
    let timer: ReturnType<typeof setInterval> | undefined;

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = undefined;
      }
    };
    const startTimer = () => {
      stopTimer();
      if (IDLE_RESWEEP_MS > 0) {
        timer = setInterval(() => {
          if (visible) play();
        }, IDLE_RESWEEP_MS);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const ratio = entry.intersectionRatio;
          if (ratio >= 0.4) {
            visible = true;
            if (armed) {
              armed = false; // don't re-fire until it leaves and returns
              play();
              startTimer();
            }
          } else if (ratio < 0.1) {
            visible = false;
            armed = true; // re-arm so scrolling back replays it
            stopTimer();
          }
        }
      },
      { threshold: [0, 0.1, 0.4] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stopTimer();
    };
  }, []);

  return (
    <div className="rail-track" ref={ref}>
      {items.map((n, i) => (
        <React.Fragment key={n.title}>
          <div className={`node ${tones[i]}`}>
            <div className="dot" />
            <div className="l">{n.kicker}</div>
            <div className="t">{n.title}</div>
            {n.desc ? <p>{n.desc}</p> : null}
          </div>
          {i < items.length - 1 ? <div className={`beam ${i === 0 ? "ab" : "bc"}`} /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}
