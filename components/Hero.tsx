"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --coral:   #FF6B6B;
          --amber:   #FFD93D;
          --mint:    #6BCB77;
          --sky:     #4D96FF;
          --violet:  #9B5DE5;
          --bg:      #0A0A12;
          --surface: #12121E;
          --muted:   #8888AA;
          --text:    #F0F0FF;
        }

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 0 1.5rem;
        }

        /* ── Animated mesh gradient background ── */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 20% 30%, rgba(155,93,229,.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 80% 70%, rgba(77,150,255,.14) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 55% 15%, rgba(255,107,107,.10) 0%, transparent 70%);
          animation: meshPulse 8s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes meshPulse {
          from { opacity: .7; transform: scale(1); }
          to   { opacity: 1;  transform: scale(1.04); }
        }

        /* ── Floating orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: .35;
          animation: floatOrb var(--dur) ease-in-out infinite alternate;
          pointer-events: none;
        }
        .orb-1 { width:340px; height:340px; background:var(--violet); top:-80px;  left:-100px; --dur:7s; }
        .orb-2 { width:260px; height:260px; background:var(--sky);    bottom:-60px; right:-60px; --dur:9s; animation-delay:-3s; }
        .orb-3 { width:180px; height:180px; background:var(--coral);  top:40%;  left:42%; --dur:6s; animation-delay:-1.5s; }

        @keyframes floatOrb {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(20px, -30px) scale(1.08); }
        }

        /* ── Grid overlay ── */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* ── Layout ── */
        .hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          padding: 6rem 0 4rem;
        }

        @media (min-width: 1024px) {
          .hero-inner { flex-direction: row; }
          .hero-root   { padding: 0 4rem; }
        }

        /* ── Fade-up entrance ── */
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s ease, transform .7s ease;
        }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: .15s; }
        .delay-2 { transition-delay: .30s; }
        .delay-3 { transition-delay: .45s; }
        .delay-4 { transition-delay: .60s; }
        .delay-5 { transition-delay: .75s; }

        /* ── Left content ── */
        .hero-left { flex: 1; }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: 1.25rem;
        }
        .eyebrow-line {
          width: 40px; height: 2px;
          background: linear-gradient(90deg, var(--coral), var(--amber));
          border-radius: 2px;
        }
        .eyebrow-text {
          font-size: .78rem;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--amber);
          font-weight: 500;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.6rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          background: linear-gradient(135deg, #fff 0%, var(--sky) 55%, var(--violet) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 .5rem;
        }

        .hero-role {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 600;
          color: var(--muted);
          margin: 0 0 1.5rem;
        }
        .hero-role span {
          color: var(--coral);
        }

        .hero-bio {
          font-size: 1rem;
          line-height: 1.75;
          color: #9999BB;
          max-width: 480px;
          margin-bottom: 2rem;
        }

        /* ── Pill tags ── */
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-bottom: 2rem;
        }
        .tag {
          font-size: .75rem;
          font-weight: 500;
          letter-spacing: .06em;
          padding: .3rem .85rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.05);
          color: var(--muted);
          transition: all .25s;
        }
        .tag:hover { border-color: var(--sky); color: var(--sky); }

        /* ── Social + Resume row ── */
        .actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .social-icons {
          display: flex;
          align-items: center;
          gap: .75rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.05);
          color: var(--muted);
          transition: all .25s ease;
        }
        .social-link:hover {
          border-color: var(--sky);
          color: var(--sky);
          background: rgba(77,150,255,.12);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(77,150,255,.25);
        }

        .divider-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,.2);
        }

        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .65rem 1.6rem;
          border-radius: 999px;
          font-family: 'Syne', sans-serif;
          font-size: .9rem;
          font-weight: 700;
          letter-spacing: .04em;
          background: linear-gradient(135deg, var(--coral) 0%, var(--violet) 100%);
          color: #fff;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: transform .25s, box-shadow .25s;
          box-shadow: 0 4px 20px rgba(155,93,229,.4);
        }
        .resume-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,.12);
          opacity: 0;
          transition: opacity .25s;
        }
        .resume-btn:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(155,93,229,.55); }
        .resume-btn:hover::after { opacity: 1; }

        /* ── Right: image ── */
        .hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        }

        /* spinning dashed ring */
        .ring-spin {
          position: absolute;
          width: 110%;
          height: 110%;
          border-radius: 50%;
          border: 2px dashed rgba(155,93,229,.35);
          animation: spinRing 18s linear infinite;
        }
        @keyframes spinRing { to { transform: rotate(360deg); } }

        /* colour arc */
        .ring-arc {
          position: absolute;
          width: 108%;
          height: 108%;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: var(--coral);
          border-right-color: var(--amber);
          animation: spinRing 5s linear infinite reverse;
          filter: blur(1px);
        }

        .img-wrap {
          position: relative;
          z-index: 1;
          width: clamp(240px, 30vw, 400px);
          height: clamp(240px, 30vw, 400px);
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255,255,255,.08);
          box-shadow:
            0 0 0 8px rgba(155,93,229,.08),
            0 24px 80px rgba(0,0,0,.6);
          animation: imgFloat 5s ease-in-out infinite alternate;
        }
        @keyframes imgFloat {
          from { transform: translateY(0); }
          to   { transform: translateY(-14px); }
        }

        /* dot badge */
        .status-badge {
          position: absolute;
          bottom: 10%;
          right: -4%;
          z-index: 3;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 999px;
          padding: .4rem .9rem;
          display: flex;
          align-items: center;
          gap: .45rem;
          font-size: .75rem;
          color: var(--mint);
          font-weight: 500;
          box-shadow: 0 8px 24px rgba(0,0,0,.4);
          white-space: nowrap;
        }
        .status-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--mint);
          animation: pulse 1.8s ease infinite;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(107,203,119,.5); }
          50%      { box-shadow: 0 0 0 6px rgba(107,203,119,0); }
        }
      `}</style>

      <div id="home" className="hero-root">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />

        <div className="hero-inner">
          {/* ── Left ── */}
          <div className="hero-left">
            <div className={`eyebrow fade-up ${mounted ? "visible" : ""}`}>
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Hello, my name is</span>
            </div>

            <h1 className={`hero-name fade-up delay-1 ${mounted ? "visible" : ""}`}>
              Deepak Singh
            </h1>

            <p className={`hero-role fade-up delay-2 ${mounted ? "visible" : ""}`}>
              Your Next <span>Automation Developer</span>
            </p>

            <p className={`hero-bio fade-up delay-3 ${mounted ? "visible" : ""}`}>
              I&#39;m an Automation Engineer who builds reliable test automation
              systems that help teams deliver faster, safer, and smarter software.
            </p>

            <div className={`tags fade-up delay-3 ${mounted ? "visible" : ""}`}>
              {["Selenium", "Playwright", "Cypress", "CI/CD", "Python", "TypeScript"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className={`actions fade-up delay-4 ${mounted ? "visible" : ""}`}>
              <div className="social-icons">
                <Link
  href="https://github.com/deepaksiinggh"
  className="social-link"
  aria-label="GitHub"
  target="_blank"
  rel="noopener noreferrer"
>
                  <FaGithub size={17} />
                </Link>
                <Link href="https://www.linkedin.com/in/deepak-singh-3b504a22a/" className="social-link" aria-label="LinkedIn" target="_blank"
  rel="noopener noreferrer">
                  <FaLinkedin size={17} />
                </Link>
                <Link href="https://x.com/DeepakSingh_rt8" className="social-link" aria-label="Twitter / X"  >
                  <FaSquareXTwitter size={17} />
                </Link>
                <Link href="mailto:deepakssinggh@gmail.com" className="social-link" aria-label="Email">
                  <IoMdMail size={17} />
                </Link>
              </div>

              <span className="divider-dot" />

              <Link
                href="https://drive.google.com/file/d/1vwII5tcRUy0EZf4GHGYDIubUMJo4ukY0/view?usp=sharing"
                target="_blank"
                className="resume-btn"
              >
                Resume ↗
              </Link>
            </div>
          </div>

          {/* ── Right ── */}
          <div className={`hero-right fade-up delay-5 ${mounted ? "visible" : ""}`}>
            <div className="ring-spin" />
            <div className="ring-arc" />

            <div className="img-wrap">
              <Image
                src="/images/Portfolio.jpeg"
                alt="Deepak Singh"
                width={1920}
                height={1920}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="status-badge">
              <span className="status-dot" />
              Open to opportunities
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
