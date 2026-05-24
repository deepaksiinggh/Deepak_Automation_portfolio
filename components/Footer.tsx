"use client";

import { Links, links, socials } from "@/data/footer";
import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection]   = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clickedSection, setClickedSection] = useState("");
  const NAV_HEIGHT = 64;

  useEffect(() => {
    setMounted(true);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      setClickedSection(id);
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setTimeout(() => setClickedSection(""), 1000);
    }
  };

  const renderLink = (link: Links) => {
    if (link.isExternal) {
      return (
        <a
          key={link.id}
          href={link.id}
          target="_blank"
          rel="noopener noreferrer"
          className="foot-link"
        >
          <span>{link.name}</span>
          <ExternalLink size={13} className="foot-link-icon" />
        </a>
      );
    }
    return (
      <button
        key={link.id}
        onClick={() => scrollToSection(link.id)}
        className="foot-link"
      >
        <span>{link.name}</span>
        <ArrowUpRight size={13} className="foot-link-icon" />
      </button>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .foot-root {
          font-family: 'DM Sans', sans-serif;
          background: #07070F;
          color: #F0F0FF;
          position: relative;
          overflow: hidden;
        }

        /* top glow border */
        .foot-root::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            #FF6B6B 20%,
            #FFD93D 40%,
            #9B5DE5 60%,
            #4D96FF 80%,
            transparent 100%);
          opacity: .7;
        }

        /* mesh bg */
        .foot-root::after {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 55% 60% at 10% 100%, rgba(155,93,229,.12) 0%, transparent 70%),
            radial-gradient(ellipse 45% 50% at 90%  60%, rgba(77,150,255,.10)  0%, transparent 70%);
          pointer-events: none;
        }

        .foot-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        .foot-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 5rem 1.5rem 2.5rem;
        }

        /* ── big CTA headline ── */
        .foot-cta-block {
          text-align: center;
          margin-bottom: 5rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(255,255,255,.07);
        }

        .foot-eyebrow {
          display:inline-flex; align-items:center; gap:.6rem;
          font-size:.78rem; letter-spacing:.18em;
          text-transform:uppercase; color:#FFD93D; font-weight:500;
          margin-bottom:1.25rem;
        }
        .foot-eyebrow-dot {
          width:6px; height:6px; border-radius:50%;
          background:#FFD93D;
          animation: blink 1.6s ease infinite;
        }
        @keyframes blink {
          0%,100%{ opacity:1; } 50%{ opacity:.3; }
        }

        .foot-big-headline {
          font-family:'Syne',sans-serif;
          font-size:clamp(2rem,5vw,3.8rem);
          font-weight:800; line-height:1.1;
          margin-bottom:1.25rem;
          background:linear-gradient(135deg,#fff 0%,#FF6B6B 45%,#9B5DE5 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        .foot-tagline {
          font-size:1rem; line-height:1.8; color:#9999BB;
          max-width:520px; margin:0 auto 2rem;
        }

        .foot-mail-btn {
          display: inline-flex; align-items:center; gap:.6rem;
          padding: .8rem 2rem;
          border-radius: 999px;
          font-family: 'Syne', sans-serif;
          font-size: .95rem; font-weight: 700;
          background: linear-gradient(135deg, #FF6B6B 0%, #9B5DE5 100%);
          color: #fff; text-decoration: none;
          position: relative; overflow: hidden;
          transition: transform .25s, box-shadow .25s;
          box-shadow: 0 4px 24px rgba(155,93,229,.35);
        }
        .foot-mail-btn::after {
          content:''; position:absolute; inset:0;
          background:rgba(255,255,255,.1); opacity:0; transition:opacity .25s;
        }
        .foot-mail-btn:hover { transform:translateY(-3px) scale(1.03); box-shadow:0 10px 40px rgba(155,93,229,.55); }
        .foot-mail-btn:hover::after { opacity:1; }

        /* ── columns ── */
        .foot-cols {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        @media(min-width:768px)  { .foot-cols { grid-template-columns:1.4fr 1fr 1fr; gap:3rem; } }

        /* brand col */
        .foot-brand-name {
          font-family:'Syne',sans-serif;
          font-size:1.4rem; font-weight:800;
          background:linear-gradient(135deg,#fff,#9B5DE5);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          margin-bottom:.75rem;
        }
        .foot-brand-desc {
          font-size:.875rem; line-height:1.75; color:#8888AA; margin-bottom:1.25rem;
          max-width:280px;
        }

        /* social icons */
        .foot-socials { display:flex; gap:.65rem; flex-wrap:wrap; }
        .foot-social {
          display:flex; align-items:center; justify-content:center;
          width:38px; height:38px; border-radius:50%;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.05);
          color:#8888AA; text-decoration:none;
          transition:all .25s;
        }
        .foot-social:hover {
          border-color:#9B5DE5; color:#9B5DE5;
          background:rgba(155,93,229,.12);
          transform:translateY(-3px);
          box-shadow:0 6px 20px rgba(155,93,229,.25);
        }

        /* col headings */
        .foot-col-heading {
          font-family:'Syne',sans-serif;
          font-size:.78rem; font-weight:700;
          letter-spacing:.15em; text-transform:uppercase;
          color:#8888AA; margin-bottom:1.25rem;
        }

        /* nav links */
        .foot-links-list { display:flex; flex-direction:column; gap:.65rem; }
        .foot-link {
          display:inline-flex; align-items:center; gap:.3rem;
          font-size:.9rem; color:#9999BB;
          background:none; border:none; cursor:pointer; padding:0;
          text-decoration:none;
          transition:color .25s;
        }
        .foot-link:hover { color:#F0F0FF; }
        .foot-link-icon {
          opacity:0; transform:translate(-4px,4px);
          transition:opacity .25s, transform .25s;
        }
        .foot-link:hover .foot-link-icon { opacity:1; transform:translate(0,0); }

        /* availability badge */
        .avail-badge {
          display:inline-flex; align-items:center; gap:.5rem;
          background:rgba(107,203,119,.08);
          border:1px solid rgba(107,203,119,.25);
          border-radius:999px;
          padding:.35rem .9rem;
          font-size:.78rem; color:#6BCB77; font-weight:500;
          margin-top:1rem;
        }
        .avail-dot {
          width:7px; height:7px; border-radius:50%;
          background:#6BCB77;
          animation:pulse 1.8s ease infinite;
        }
        @keyframes pulse {
          0%,100%{box-shadow:0 0 0 0 rgba(107,203,119,.5);}
          50%{box-shadow:0 0 0 6px rgba(107,203,119,0);}
        }

        /* ── bottom bar ── */
        .foot-bottom {
          display:flex; flex-direction:column; align-items:center;
          gap:.75rem; padding-top:2rem;
          border-top:1px solid rgba(255,255,255,.07);
          text-align:center;
        }
        @media(min-width:640px) {
          .foot-bottom { flex-direction:row; justify-content:space-between; text-align:left; }
        }
        .foot-copy { font-size:.8rem; color:#8888AA; }
        .foot-copy span { color:#9B5DE5; }

        .foot-made {
          font-size:.78rem; color:#8888AA;
          display:flex; align-items:center; gap:.3rem;
        }
        .foot-heart { color:#FF6B6B; animation:heartbeat 1.4s ease infinite; }
        @keyframes heartbeat {
          0%,100%{transform:scale(1);}
          50%{transform:scale(1.25);}
        }

        /* fade-up */
        .fu { opacity:0; transform:translateY(24px); transition:opacity .65s ease, transform .65s ease; }
        .fu.vis { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.1s} .d2{transition-delay:.2s} .d3{transition-delay:.3s}
        .d4{transition-delay:.4s} .d5{transition-delay:.5s}
      `}</style>

      <footer id="contact" className="foot-root" ref={ref}>
        <div className="foot-grid-bg" />

        <div className="foot-inner">

          {/* ── big CTA block ── */}
          <div className={`foot-cta-block fu ${mounted ? "vis" : ""}`}>
            <div className="foot-eyebrow">
              <span className="foot-eyebrow-dot" />
              Open to opportunities
            </div>
            <h2 className="foot-big-headline">
              Let&#39;s build something<br />great together
            </h2>
            <p className="foot-tagline">
              I&#39;m always excited to connect with fellow testers, developers, and anyone passionate about quality engineering. Have a project? Let&#39;s talk.
            </p>
            <a href="mailto:deepakssinggh@gmail.com" className="foot-mail-btn">
              <Mail size={16} />
              Send me an email
              <ExternalLink size={14} />
            </a>
          </div>

          {/* ── three columns ── */}
          <div className="foot-cols">
            {/* brand */}
            <div className={`fu d1 ${visible ? "vis" : ""}`}>
              <div className="foot-brand-name">Deepak Singh</div>
              <p className="foot-brand-desc">
                Automation Engineer building reliable test systems and quality-driven web applications.
              </p>
              <div className="foot-socials">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foot-social"
                    aria-label={social.label}
                  >
                    <social.icon size={15} />
                  </a>
                ))}
              </div>
              <div className="avail-badge">
                <span className="avail-dot" />
                Available for freelance
              </div>
            </div>

            {/* quick links */}
            <div className={`fu d2 ${visible ? "vis" : ""}`}>
              <div className="foot-col-heading">Quick links</div>
              <div className="foot-links-list">
                {links.map(renderLink)}
              </div>
            </div>

            {/* stack */}
            <div className={`fu d3 ${visible ? "vis" : ""}`}>
              <div className="foot-col-heading">Tech stack</div>
              <div className="foot-links-list">
                {["Selenium & Java", "TestNG & JUnit", "Playwright", "React & Next.js", "GitHub Actions", "Postman"].map((t) => (
                  <span key={t} style={{ fontSize:".9rem", color:"#9999BB" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── bottom bar ── */}
          <div className={`foot-bottom fu d5 ${visible ? "vis" : ""}`}>
            <p className="foot-copy">
              © {currentYear} <span>Deepak Singh</span>. All rights reserved.
            </p>
            <p className="foot-made">
              Built with <span className="foot-heart">♥</span> using Next.js & Tailwind
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;