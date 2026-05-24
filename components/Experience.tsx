"use client";

import React, { useEffect, useRef, useState } from "react";
import { skills } from "@/data/experience";

// Assign a cycling accent colour to each skill card
const ACCENTS = ["#FF6B6B", "#FFD93D", "#9B5DE5", "#4D96FF", "#6BCB77", "#FF6B6B"];

const Experience = () => {
  const [mounted, setMounted]     = useState(false);
  const [visible, setVisible]     = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .exp-root {
          font-family: 'DM Sans', sans-serif;
          background: #0A0A12;
          color: #F0F0FF;
          position: relative;
          overflow: hidden;
          padding: 7rem 1.5rem 6rem;
        }

        /* top divider glow */
        .exp-root::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg,transparent,rgba(155,93,229,.5),rgba(255,217,61,.4),transparent);
        }

        /* mesh bg */
        .exp-root::after {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 50% 40% at 90% 10%, rgba(155,93,229,.09) 0%, transparent 70%),
            radial-gradient(ellipse 45% 35% at 5%  80%, rgba(77,150,255,.09)  0%, transparent 70%);
          pointer-events: none;
        }

        .exp-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        .exp-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
        }

        /* ── eyebrow ── */
        .eyebrow { display:flex; align-items:center; gap:.75rem; margin-bottom:1.5rem; }
        .eyebrow-line { width:40px; height:2px; background:linear-gradient(90deg,#9B5DE5,#FFD93D); border-radius:2px; }
        .eyebrow-text { font-size:.78rem; letter-spacing:.18em; text-transform:uppercase; color:#FFD93D; font-weight:500; }

        /* ── headline ── */
        .exp-headline {
          font-family:'Syne',sans-serif;
          font-size:clamp(1.6rem,3.5vw,2.6rem);
          font-weight:800; line-height:1.2; margin-bottom:.75rem;
          background:linear-gradient(135deg,#fff 0%,#9B5DE5 55%,#FFD93D 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .exp-sub {
          font-size:1rem; line-height:1.8; color:#9999BB;
          max-width:560px; margin-bottom:3rem;
        }

        /* ── skills grid ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media(min-width:480px)  { .skills-grid { grid-template-columns: repeat(3,1fr); } }
        @media(min-width:768px)  { .skills-grid { grid-template-columns: repeat(4,1fr); } }
        @media(min-width:1024px) { .skills-grid { grid-template-columns: repeat(6,1fr); } }

        /* ── skill card ── */
        .skill-card {
          position: relative;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 16px;
          padding: 1.25rem .75rem;
          text-align: center;
          cursor: default;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px) scale(.97);
          transition:
            opacity .55s ease,
            transform .55s ease,
            border-color .3s,
            box-shadow .3s;
        }
        .skill-card.vis {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .skill-card:hover {
          border-color: var(--a);
          box-shadow: 0 0 0 1px var(--a), 0 12px 36px rgba(0,0,0,.45);
          transform: translateY(-5px) scale(1.03) !important;
        }

        /* glow spot */
        .skill-card::before {
          content: '';
          position: absolute;
          inset: -1px; border-radius: inherit;
          background: radial-gradient(circle at 50% 0%, var(--a), transparent 65%);
          opacity: 0;
          transition: opacity .35s;
          pointer-events: none;
        }
        .skill-card:hover::before { opacity: .12; }

        /* top accent bar */
        .skill-card::after {
          content: '';
          position: absolute;
          top: 0; left: 20%; right: 20%;
          height: 2px; border-radius: 0 0 4px 4px;
          background: var(--a);
          opacity: 0;
          transition: opacity .35s;
        }
        .skill-card:hover::after { opacity: 1; }

        .skill-name {
          font-family: 'Syne', sans-serif;
          font-size: .85rem;
          font-weight: 700;
          letter-spacing: .04em;
          color: #C0C0E0;
          transition: color .3s;
          position: relative; z-index: 1;
        }
        .skill-card:hover .skill-name { color: #F0F0FF; }

        /* coloured dot */
        .skill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--a);
          margin: 0 auto .65rem;
          opacity: .5;
          transition: opacity .3s, transform .3s;
        }
        .skill-card:hover .skill-dot { opacity: 1; transform: scale(1.4); }

        /* ── fade-up helpers ── */
        .fu { opacity:0; transform:translateY(24px); transition:opacity .65s ease,transform .65s ease; }
        .fu.vis { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.12s} .d2{transition-delay:.24s}

        /* ── bottom strip ── */
        .exp-cta {
          display:flex; align-items:center; justify-content:center;
          gap:1rem; margin-top:3.5rem; flex-wrap:wrap;
        }
        .exp-cta-line {
          flex:1; max-width:200px; height:1px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.15));
        }
        .exp-cta-line.rev { background:linear-gradient(90deg,rgba(255,255,255,.15),transparent); }
        .exp-cta-text {
          font-family:'Syne',sans-serif; font-size:.85rem;
          color:#8888AA; letter-spacing:.1em; text-transform:uppercase;
        }

        /* ── count badge ── */
        .skill-count {
          display: inline-flex;
          align-items: center;
          gap:.4rem;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 999px;
          padding: .3rem .85rem;
          font-size:.78rem; color:#8888AA;
          margin-bottom:2.5rem;
        }
        .skill-count span {
          font-family:'Syne',sans-serif;
          font-weight:700; color:#9B5DE5;
        }
      `}</style>

      <div id="skills" className="exp-root" ref={ref}>
        <div className="exp-grid-overlay" />

        <div className="exp-inner">
          {/* eyebrow */}
          <div className={`eyebrow fu ${mounted ? "vis" : ""}`}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Skills &amp; Experience</span>
          </div>

          <h1 className={`exp-headline fu d1 ${mounted ? "vis" : ""}`}>
            My tech toolbox
          </h1>

          <p className={`exp-sub fu d1 ${mounted ? "vis" : ""}`}>
            Technologies and tools I work with day-to-day to build, test, and ship reliable software.
          </p>

          {/* count badge */}
          <div className={`skill-count fu d2 ${mounted ? "vis" : ""}`}>
            <span>{skills.length}</span> skills and counting
          </div>

          {/* grid */}
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <div
                  key={skill.name + i}
                  className={`skill-card ${visible ? "vis" : ""}`}
                  style={{
                    "--a": accent,
                    transitionDelay: visible ? `${i * 0.055}s` : "0s",
                  } as React.CSSProperties}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="skill-dot" />
                  <div className="skill-name">{skill.name}</div>
                </div>
              );
            })}
          </div>

          {/* bottom cta */}
          <div className={`exp-cta fu ${visible ? "vis" : ""}`} style={{ transitionDelay: ".65s" }}>
            <span className="exp-cta-line" />
            <span className="exp-cta-text">Always learning, always shipping</span>
            <span className="exp-cta-line rev" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;