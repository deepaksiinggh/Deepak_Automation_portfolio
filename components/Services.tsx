"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaVials } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const SERVICES = [
  {
    icon: <FaLaptopCode size={28} />,
    accent: "#FF6B6B",
    title: "Automation Developer",
    desc: "I design and implement scalable test automation frameworks — from scratch or on top of existing suites — using Selenium, Java, and TestNG. Every script is built for reliability, reusability, and seamless CI/CD integration.",
    tags: ["Selenium", "TestNG", "Java", "CI/CD"],
  },
  {
    icon: <IoPhonePortraitOutline size={28} />,
    accent: "#4D96FF",
    title: "Web Development",
    desc: "Whether starting from scratch or enhancing an existing site, I build functional, user-friendly web applications using React, Next.js, and clean code practices — optimised for performance and great UX.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: <FaVials size={28} />,
    accent: "#9B5DE5",
    title: "QA & Test Strategy",
    desc: "From test planning and case design to execution and reporting, I handle the full QA lifecycle with precision — ensuring comprehensive coverage and actionable insights for every release.",
    tags: ["Test Plans", "Postman", "API Testing", "Reporting"],
  },
  {
    icon: <FaGitAlt size={28} />,
    accent: "#6BCB77",
    title: "DevOps Integration",
    desc: "I connect test suites into GitHub Actions and CI pipelines so quality gates run automatically on every push — catching regressions before they reach production.",
    tags: ["GitHub Actions", "Git", "Pipelines", "Automation"],
  },
];

const Services = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .svc-root {
          font-family: 'DM Sans', sans-serif;
          background: #0A0A12;
          color: #F0F0FF;
          position: relative;
          overflow: hidden;
          padding: 7rem 1.5rem 6rem;
        }

        .svc-root::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,107,107,.5), rgba(155,93,229,.5), transparent);
        }

        .svc-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 40% at 5% 50%,  rgba(255,107,107,.08) 0%, transparent 70%),
            radial-gradient(ellipse 45% 35% at 95% 30%, rgba(77,150,255,.08)  0%, transparent 70%);
          pointer-events: none;
        }

        .svc-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        .svc-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
        }

        /* eyebrow */
        .eyebrow { display:flex; align-items:center; gap:.75rem; margin-bottom:1.5rem; }
        .eyebrow-line { width:40px; height:2px; background:linear-gradient(90deg,#FF6B6B,#FFD93D); border-radius:2px; }
        .eyebrow-text { font-size:.78rem; letter-spacing:.18em; text-transform:uppercase; color:#FFD93D; font-weight:500; }

        /* headline */
        .svc-headline {
          font-family:'Syne',sans-serif;
          font-size:clamp(1.6rem,3.5vw,2.6rem);
          font-weight:800; line-height:1.2; margin-bottom:.75rem;
          background:linear-gradient(135deg,#fff 0%,#FF6B6B 55%,#FFD93D 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        .svc-sub {
          font-size:1rem; line-height:1.8; color:#9999BB;
          max-width:640px; margin-bottom:3.5rem;
        }

        /* cards grid */
        .svc-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media(min-width:640px)  { .svc-cards { grid-template-columns: 1fr 1fr; } }
        @media(min-width:1024px) { .svc-cards { grid-template-columns: repeat(4,1fr); } }

        /* card */
        .svc-card {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 20px;
          padding: 1.75rem 1.5rem;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity .65s ease, transform .65s ease,
                      border-color .3s, box-shadow .3s;
        }
        .svc-card.vis { opacity:1; transform:translateY(0); }
        .svc-card:hover {
          border-color: var(--accent);
          box-shadow: 0 0 0 1px var(--accent), 0 16px 48px rgba(0,0,0,.5);
          transform: translateY(-6px) !important;
        }

        /* glow blob inside card */
        .svc-card::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 140px; height: 140px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          filter: blur(50px);
          transition: opacity .4s;
          pointer-events: none;
        }
        .svc-card:hover::before { opacity: .18; }

        /* icon circle */
        .svc-icon {
          display: inline-flex;
          align-items: center; justify-content: center;
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          color: var(--accent);
          margin-bottom: 1.25rem;
          transition: background .3s, transform .3s;
        }
        .svc-card:hover .svc-icon {
          background: color-mix(in srgb, var(--accent) 15%, transparent);
          transform: scale(1.08) rotate(-4deg);
        }

        .svc-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem; font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
          color: #F0F0FF;
          margin-bottom: .75rem;
        }

        .svc-card-desc {
          font-size: .88rem; line-height: 1.75;
          color: #8888AA; margin-bottom: 1.25rem;
        }

        /* tags */
        .svc-tags { display:flex; flex-wrap:wrap; gap:.4rem; }
        .svc-tag {
          font-size: .7rem; font-weight:500; letter-spacing:.05em;
          padding: .25rem .7rem; border-radius:999px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
          color: #8888AA;
          transition: all .25s;
        }
        .svc-card:hover .svc-tag {
          border-color: color-mix(in srgb, var(--accent) 50%, transparent);
          color: var(--accent);
        }

        /* bottom cta strip */
        .svc-cta {
          display:flex; align-items:center; justify-content:center;
          gap:1rem; margin-top:3.5rem;
          flex-wrap:wrap;
        }
        .svc-cta-line {
          flex:1; max-width:200px; height:1px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.15));
        }
        .svc-cta-line.rev {
          background:linear-gradient(90deg,rgba(255,255,255,.15),transparent);
        }
        .svc-cta-text {
          font-family:'Syne',sans-serif; font-size:.85rem;
          color:#8888AA; letter-spacing:.1em; text-transform:uppercase;
        }

        /* fade-up for non-card elements */
        .fu { opacity:0; transform:translateY(24px); transition: opacity .65s ease, transform .65s ease; }
        .fu.vis { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.1s} .d2{transition-delay:.2s}
      `}</style>

      <div id="services" className="svc-root" ref={ref}>
        <div className="svc-grid-overlay" />

        <div className="svc-inner">
          <div className={`eyebrow fu ${mounted ? "vis" : ""}`}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text">What I do</span>
          </div>

          <h1 className={`svc-headline fu d1 ${mounted ? "vis" : ""}`}>
            Services I offer
          </h1>

          <p className={`svc-sub fu d2 ${mounted ? "vis" : ""}`}>
            From analysing automation needs to designing robust test frameworks and delivering reliable solutions, I manage every stage with precision — ensuring efficient, scalable, and maintainable coverage.
          </p>

          <div className="svc-cards">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`svc-card ${visible ? "vis" : ""}`}
                style={{
                  "--accent": s.accent,
                  transitionDelay: visible ? `${i * 0.12}s` : "0s",
                } as React.CSSProperties}
              >
                <div className="svc-icon">{s.icon}</div>
                <div className="svc-card-title">{s.title}</div>
                <p className="svc-card-desc">{s.desc}</p>
                <div className="svc-tags">
                  {s.tags.map((t) => (
                    <span className="svc-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`svc-cta fu ${visible ? "vis" : ""}`} style={{ transitionDelay: ".6s" }}>
            <span className="svc-cta-line" />
            <span className="svc-cta-text">Let&#39;s build something great</span>
            <span className="svc-cta-line rev" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
