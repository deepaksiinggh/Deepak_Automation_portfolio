"use client";

import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const ACCENTS = ["#FF6B6B", "#FFD93D", "#9B5DE5", "#4D96FF", "#6BCB77", "#FF6B6B"];

interface ProjectLinksProps {
  github?: string;
  demo?: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ github, demo }) => {
  if (!github && !demo) return null;
  return (
    <div className="proj-overlay">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="proj-icon-btn" aria-label="GitHub">
          <Github size={18} />
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="proj-icon-btn" aria-label="Live demo">
          <ExternalLink size={18} />
        </a>
      )}
    </div>
  );
};

const Portfolio = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .port-root {
          font-family: 'DM Sans', sans-serif;
          background: #0A0A12;
          color: #F0F0FF;
          position: relative;
          overflow: hidden;
          padding: 7rem 1.5rem 6rem;
        }

        .port-root::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(77,150,255,.5), rgba(107,203,119,.4), transparent);
        }

        .port-root::after {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 50% 40% at 15% 20%, rgba(77,150,255,.09) 0%, transparent 70%),
            radial-gradient(ellipse 45% 35% at 85% 75%, rgba(107,203,119,.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .port-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        .port-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
        }

        /* eyebrow */
        .eyebrow { display:flex; align-items:center; gap:.75rem; margin-bottom:1.5rem; }
        .eyebrow-line { width:40px; height:2px; background:linear-gradient(90deg,#4D96FF,#6BCB77); border-radius:2px; }
        .eyebrow-text { font-size:.78rem; letter-spacing:.18em; text-transform:uppercase; color:#FFD93D; font-weight:500; }

        .port-headline {
          font-family:'Syne',sans-serif;
          font-size:clamp(1.6rem,3.5vw,2.6rem);
          font-weight:800; line-height:1.2; margin-bottom:.75rem;
          background:linear-gradient(135deg,#fff 0%,#4D96FF 55%,#6BCB77 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        .port-sub {
          font-size:1rem; line-height:1.8; color:#9999BB;
          max-width:560px; margin: 0 auto 3rem;
          text-align: center;
        }

        .port-header { text-align: center; }

        /* cards grid */
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media(min-width:640px)  { .proj-grid { grid-template-columns: 1fr 1fr; } }
        @media(min-width:1024px) { .proj-grid { grid-template-columns: repeat(3,1fr); } }

        /* card */
        .proj-card {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity .6s ease,
            transform .6s ease,
            border-color .3s,
            box-shadow .3s;
        }
        .proj-card.vis { opacity:1; transform:translateY(0); }
        .proj-card:hover {
          border-color: var(--a);
          box-shadow: 0 0 0 1px var(--a), 0 20px 60px rgba(0,0,0,.5);
          transform: translateY(-6px) !important;
        }

        /* image wrapper */
        .proj-img-wrap {
          position: relative;
          overflow: hidden;
          height: 190px;
        }
        .proj-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
          display: block;
        }
        .proj-card:hover .proj-img-wrap img { transform: scale(1.07); }

        /* image gradient overlay (always visible, softens bottom) */
        .proj-img-wrap::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(10,10,18,.85) 100%);
          pointer-events: none;
        }

        /* hover links overlay */
        .proj-overlay {
          position: absolute; inset: 0; z-index: 2;
          display: flex; align-items: center; justify-content: center;
          gap: 1rem;
          background: rgba(10,10,18,.6);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity .3s ease;
        }
        .proj-card:hover .proj-overlay { opacity: 1; }

        .proj-icon-btn {
          display: flex; align-items: center; justify-content: center;
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.2);
          color: #fff;
          text-decoration: none;
          transition: background .25s, transform .25s, border-color .25s;
        }
        .proj-icon-btn:hover {
          background: var(--a);
          border-color: var(--a);
          transform: scale(1.12);
        }

        /* card body */
        .proj-body { padding: 1.4rem 1.4rem 1.6rem; }

        /* accent bar at top of body */
        .proj-accent-bar {
          width: 32px; height: 3px; border-radius: 999px;
          background: var(--a);
          margin-bottom: .9rem;
          transition: width .3s ease;
        }
        .proj-card:hover .proj-accent-bar { width: 56px; }

        .proj-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem; font-weight: 700;
          color: #F0F0FF;
          margin-bottom: .5rem;
          transition: color .25s;
        }
        .proj-card:hover .proj-title { color: var(--a); }

        .proj-desc {
          font-size: .875rem; line-height: 1.7;
          color: #8888AA; margin-bottom: 1.1rem;
        }

        /* tags */
        .proj-tags { display: flex; flex-wrap: wrap; gap: .4rem; }
        .proj-tag {
          font-size: .7rem; font-weight: 500; letter-spacing: .05em;
          padding: .25rem .7rem; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
          color: #8888AA;
          transition: all .25s;
        }
        .proj-card:hover .proj-tag {
          border-color: color-mix(in srgb, var(--a) 45%, transparent);
          color: var(--a);
        }

        /* bottom strip */
        .port-cta {
          display:flex; align-items:center; justify-content:center;
          gap:1rem; margin-top:3.5rem; flex-wrap:wrap;
        }
        .port-cta-line {
          flex:1; max-width:200px; height:1px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.15));
        }
        .port-cta-line.rev { background:linear-gradient(90deg,rgba(255,255,255,.15),transparent); }
        .port-cta-text {
          font-family:'Syne',sans-serif; font-size:.85rem;
          color:#8888AA; letter-spacing:.1em; text-transform:uppercase;
        }

        /* fade-up helpers */
        .fu { opacity:0; transform:translateY(24px); transition:opacity .65s ease,transform .65s ease; }
        .fu.vis { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.1s} .d2{transition-delay:.2s}
      `}</style>

      <div id="portfolio" className="port-root" ref={ref}>
        <div className="port-grid-bg" />

        <div className="port-inner">
          {/* header */}
          <div className="port-header">
            <div className={`eyebrow fu ${mounted ? "vis" : ""}`} style={{ justifyContent: "center" }}>
              <span className="eyebrow-line" />
              <span className="eyebrow-text">My Projects</span>
              <span className="eyebrow-line" style={{ background: "linear-gradient(90deg,#6BCB77,#4D96FF)" }} />
            </div>

            <h1 className={`port-headline fu d1 ${mounted ? "vis" : ""}`}>
              Things I&#39;ve built
            </h1>

            <p className={`port-sub fu d2 ${mounted ? "vis" : ""}`}>
              A selection of recent projects showcasing my skills in automation engineering and web development.
            </p>
          </div>

          {/* grid */}
          <div className="proj-grid">
            {projects.map((project, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <div
                  key={i}
                  className={`proj-card ${visible ? "vis" : ""}`}
                  style={{
                    "--a": accent,
                    transitionDelay: visible ? `${i * 0.1}s` : "0s",
                  } as React.CSSProperties}
                >
                  {/* image */}
                  <div className="proj-img-wrap">
                    <img src={project.image} alt={project.title} />
                    <ProjectLinks github={project.github} demo={project.demo} />
                  </div>

                  {/* body */}
                  <div className="proj-body">
                    <div className="proj-accent-bar" />
                    <h3 className="proj-title">{project.title}</h3>
                    <p className="proj-desc">{project.description}</p>
                    <div className="proj-tags">
                      {project.tags.map((tag, ti) => (
                        <span className="proj-tag" key={ti}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* bottom cta */}
          <div className={`port-cta fu ${visible ? "vis" : ""}`} style={{ transitionDelay: ".7s" }}>
            <span className="port-cta-line" />
            <span className="port-cta-text">More on GitHub</span>
            <span className="port-cta-line rev" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;