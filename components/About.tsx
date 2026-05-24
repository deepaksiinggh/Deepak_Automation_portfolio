"use client";

import React, { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "Java",       pct: 85, color: "#FFD93D" },
  { name: "Selenium",   pct: 90, color: "#FF6B6B" },
  { name: "Playwright", pct: 78, color: "#4D96FF" },
  { name: "JavaScript", pct: 85, color: "#00C2A8" }, 
{ name: "MySQL", pct: 85, color: "#00758F" },      
  { name: "TestNG",     pct: 88, color: "#9B5DE5" },
  
  { name: "React",      pct: 72, color: "#6BCB77" },
  { name: "Postman",    pct: 80, color: "#FF6B6B" },
];

const STATS = [
  { value: "10+", label: "Projects Automated" },
  { value: "2024", label: "B.Tech Graduate" },
  { value: "99%", label: "Test Reliability" },
];

const About = () => {
  const [mounted, setMounted] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimateBars(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root {
          font-family: 'DM Sans', sans-serif;
          background: #0A0A12;
          color: #F0F0FF;
          position: relative;
          overflow: hidden;
          padding: 7rem 1.5rem 6rem;
        }

        /* subtle top divider glow */
        .about-root::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(155,93,229,.5), rgba(77,150,255,.5), transparent);
        }

        /* background mesh */
        .about-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 40% at 85% 20%, rgba(77,150,255,.10) 0%, transparent 70%),
            radial-gradient(ellipse 45% 40% at 10% 80%, rgba(155,93,229,.10) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        .about-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── fade-up ── */
        .fu { opacity:0; transform:translateY(28px); transition: opacity .7s ease, transform .7s ease; }
        .fu.vis { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.1s} .d2{transition-delay:.22s} .d3{transition-delay:.34s}
        .d4{transition-delay:.46s} .d5{transition-delay:.58s} .d6{transition-delay:.70s}

        /* ── eyebrow ── */
        .eyebrow {
          display:flex; align-items:center; gap:.75rem; margin-bottom:1.5rem;
        }
        .eyebrow-line {
          width:40px; height:2px;
          background:linear-gradient(90deg,#FF6B6B,#FFD93D);
          border-radius:2px;
        }
        .eyebrow-text {
          font-size:.78rem; letter-spacing:.18em;
          text-transform:uppercase; color:#FFD93D; font-weight:500;
        }

        /* ── headline ── */
        .about-headline {
          font-family:'Syne',sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.6rem);
          font-weight:800; line-height:1.2;
          max-width:760px; margin-bottom:3.5rem;
          background:linear-gradient(135deg,#fff 0%,#9B5DE5 60%,#4D96FF 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        /* ── two-column grid ── */
        .about-cols {
          display:grid;
          grid-template-columns:1fr;
          gap:3rem;
        }
        @media(min-width:1024px){
          .about-cols{ grid-template-columns:1fr 1fr; gap:4rem; }
        }

        /* ── left: bio ── */
        .about-left h2 {
          font-family:'Syne',sans-serif;
          font-size:clamp(1.25rem,2.2vw,1.7rem);
          font-weight:700; color:#FF6B6B;
          line-height:1.4; margin-bottom:1.5rem;
        }
        .about-left p {
          font-size:1rem; line-height:1.8; color:#9999BB; margin-bottom:1rem;
        }

        /* ── stats row ── */
        .stats-row {
          display:flex; flex-wrap:wrap; gap:1.25rem; margin-top:2rem;
        }
        .stat-card {
          flex:1; min-width:100px;
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.08);
          border-radius:16px;
          padding:1.1rem 1.25rem;
          transition: border-color .3s, transform .3s;
        }
        .stat-card:hover { border-color:rgba(77,150,255,.4); transform:translateY(-4px); }
        .stat-value {
          font-family:'Syne',sans-serif;
          font-size:1.75rem; font-weight:800;
          background:linear-gradient(135deg,#4D96FF,#9B5DE5);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .stat-label { font-size:.78rem; color:#8888AA; margin-top:.2rem; }

        /* ── right: skill bars ── */
        .about-right h3 {
          font-family:'Syne',sans-serif;
          font-size:1.1rem; font-weight:700;
          letter-spacing:.06em; color:#8888AA;
          text-transform:uppercase; margin-bottom:1.75rem;
        }

        .skill-item { margin-bottom:1.4rem; }
        .skill-header {
          display:flex; justify-content:space-between; align-items:center;
          margin-bottom:.5rem;
        }
        .skill-name { font-size:.9rem; font-weight:500; color:#F0F0FF; }
        .skill-pct  { font-size:.8rem; color:#8888AA; }

        .skill-track {
          height:6px; border-radius:999px;
          background:rgba(255,255,255,.07);
          overflow:hidden;
        }
        .skill-fill {
          height:100%; border-radius:999px;
          width:0;
          transition: width 1.1s cubic-bezier(.4,0,.2,1);
        }

        /* ── tech chips ── */
        .chips {
          display:flex; flex-wrap:wrap; gap:.5rem; margin-top:2.5rem;
        }
        .chip {
          font-size:.75rem; font-weight:500; letter-spacing:.05em;
          padding:.35rem .9rem; border-radius:999px;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.04);
          color:#8888AA;
          transition: all .25s;
        }
        .chip:hover { border-color:#4D96FF; color:#4D96FF; background:rgba(77,150,255,.08); }

        /* ── decorative bracket ── */
        .bracket {
          position:absolute; right:-20px; top:50%;
          transform:translateY(-50%);
          width:3px; height:60%;
          border-radius:999px;
          background:linear-gradient(180deg,transparent,#9B5DE5,#4D96FF,transparent);
          opacity:.4;
        }
      `}</style>

      <div id="about" className="about-root" ref={sectionRef}>
        <div className="about-grid-overlay" />

        <div className="about-inner">
          {/* eyebrow */}
          <div className={`eyebrow fu ${mounted ? "vis" : ""}`}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text">About me</span>
          </div>

          {/* headline */}
          <h1 className={`about-headline fu d1 ${mounted ? "vis" : ""}`}>
            Automation engineer passionate about quality&#8209;driven software delivery.
          </h1>

          <div className="about-cols">
            {/* ── Left ── */}
            <div className={`about-left fu d2 ${mounted ? "vis" : ""}`}>
              <h2>I build reliable and maintainable automated test scripts.</h2>

              <p>
                I&#39;m Deepak Singh, a Computer Science graduate (B.Tech, 2024)
                with a strong foundation in both frontend and test automation
                technologies. I have hands-on knowledge of HTML, CSS, Java,
                TestNG, React, MySQL, GitHub, and Postman.
              </p>
              <p>
                I&#39;m passionate about building quality-driven web applications
                and automated testing solutions that ensure performance,
                reliability, and a great user experience.
              </p>
              <p>
                With expertise in Selenium, Java, and TestNG, I specialize in
                understanding software requirements and developing effective test
                scripts that teams can trust in CI/CD pipelines.
              </p>

              {/* stats */}
              <div className="stats-row">
                {STATS.map((s) => (
                  <div className="stat-card" key={s.label}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right ── */}
            <div className={`about-right fu d3 ${mounted ? "vis" : ""}`} style={{ position: "relative" }}>
              <div className="bracket" />
              <h3>Core skills</h3>

              {SKILLS.map((sk) => (
                <div className="skill-item" key={sk.name}>
                  <div className="skill-header">
                    <span className="skill-name">{sk.name}</span>
                    <span className="skill-pct">{sk.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{
                        background: `linear-gradient(90deg, ${sk.color}99, ${sk.color})`,
                        width: animateBars ? `${sk.pct}%` : "0%",
                        transitionDelay: animateBars ? `${SKILLS.indexOf(sk) * 0.1}s` : "0s",
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="chips">
                {["HTML", "CSS","Selenium","Playwright","Java","Java-Script","TestNg", "MySQL", "GitHub", "Postman", "TypeScript", "CI/CD", "Agile"].map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;