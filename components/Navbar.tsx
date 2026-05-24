"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navbar";

const Navbar = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState("");
  const [scrolled, setScrolled]           = useState(false);
  const pathname = usePathname();
  const NAV_HEIGHT = 64;

  const isSubstantiallyVisible = useCallback(
    (element: HTMLElement | null): boolean => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, NAV_HEIGHT);
      return visibleHeight > rect.height * 0.3;
    },
    []
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname !== "/") return;

      window.requestAnimationFrame(() => {
        const clickedEl = clickedSection
          ? document.getElementById(clickedSection)
          : null;

        if (!clickedSection || isSubstantiallyVisible(clickedEl)) {
          const visible = navItems
            .filter((n) => !n.isExternal)
            .map((n) => ({ id: n.id, element: document.getElementById(n.id) }))
            .find(({ element }) => isSubstantiallyVisible(element));

          if (visible) {
            setActiveSection(visible.id);
            setClickedSection("");
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [clickedSection, isSubstantiallyVisible, pathname]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    setActiveSection(id);
    setClickedSection(id);
    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setTimeout(() => setClickedSection(""), 1000);
  };

  const isActive = (item: typeof navItems[0]) => {
    if (item.isExternal) return pathname.startsWith(item.href ?? "/__");
    return pathname === "/" && activeSection === item.id;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          font-family: 'DM Sans', sans-serif;
          transition: background .35s, box-shadow .35s, border-color .35s;
          border-bottom: 1px solid transparent;
        }
        .nav-root.scrolled {
          background: rgba(10,10,18,.85);
          backdrop-filter: blur(16px);
          border-color: rgba(255,255,255,.07);
          box-shadow: 0 4px 32px rgba(0,0,0,.4);
        }
        .nav-root:not(.scrolled) {
          background: transparent;
        }

        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 0 1.5rem;
          height: 64px;
          display: flex; align-items: center; justify-content: space-between;
        }

        /* logo */
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem; font-weight: 800;
          text-decoration: none;
          display: flex; align-items: center; gap: .15rem;
          letter-spacing: .02em;
        }
        .nav-logo-accent {
          background: linear-gradient(135deg, #FF6B6B, #9B5DE5);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .nav-logo-name { color: #F0F0FF; }

        /* desktop links */
        .nav-links {
          display: none; align-items: center; gap: .25rem;
          list-style: none; margin: 0; padding: 0;
        }
        @media(min-width: 768px) { .nav-links { display: flex; } }

        .nav-btn {
          position: relative;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: .78rem; font-weight: 500;
          letter-spacing: .12em; text-transform: uppercase;
          color: #8888AA;
          padding: .45rem .75rem;
          border-radius: 8px;
          text-decoration: none;
          transition: color .25s, background .25s;
        }
        .nav-btn:hover { color: #F0F0FF; background: rgba(255,255,255,.06); }
        .nav-btn.active { color: #F0F0FF; }

        /* active underbar */
        .nav-btn.active::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 16px; height: 2px; border-radius: 999px;
          background: linear-gradient(90deg, #FF6B6B, #9B5DE5);
        }

        /* blog pill */
        .nav-btn.blog-pill {
          color: #9B5DE5;
          border: 1px solid rgba(155,93,229,.3);
          background: rgba(155,93,229,.08);
          margin-left: .5rem;
        }
        .nav-btn.blog-pill:hover {
          background: rgba(155,93,229,.18);
          color: #C084FC;
          border-color: rgba(155,93,229,.55);
        }
        .nav-btn.blog-pill.active {
          background: rgba(155,93,229,.2);
          border-color: #9B5DE5;
          color: #C084FC;
        }
        .nav-btn.blog-pill.active::after { display: none; }

        /* hamburger */
        .nav-ham {
          display: flex; align-items: center; justify-content: center;
          background: none; border: 1px solid rgba(255,255,255,.1);
          border-radius: 8px; padding: .45rem; cursor: pointer;
          color: #9999BB; transition: all .25s;
        }
        .nav-ham:hover { border-color: #9B5DE5; color: #9B5DE5; background: rgba(155,93,229,.1); }
        @media(min-width:768px){ .nav-ham { display: none; } }

        /* mobile drawer */
        .nav-drawer {
          overflow: hidden;
          max-height: 0;
          transition: max-height .35s ease;
          background: rgba(10,10,18,.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .nav-drawer.open { max-height: 400px; }

        .nav-drawer-inner {
          padding: .75rem 1.5rem 1.25rem;
          display: flex; flex-direction: column; gap: .25rem;
        }

        .nav-mob-btn {
          background: none; border: none; cursor: pointer; text-align: left;
          font-family: 'DM Sans', sans-serif;
          font-size: .85rem; font-weight: 500;
          letter-spacing: .1em; text-transform: uppercase;
          color: #8888AA; padding: .6rem .75rem; border-radius: 8px;
          text-decoration: none;
          transition: color .25s, background .25s;
          width: 100%;
        }
        .nav-mob-btn:hover { color: #F0F0FF; background: rgba(255,255,255,.06); }
        .nav-mob-btn.active { color: #9B5DE5; }
        .nav-mob-btn.blog { color: #9B5DE5; }
      `}</style>

      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <span className="nav-logo-accent">Mr.&nbsp;</span>
            <span className="nav-logo-name">Deepak Singh</span>
          </Link>

          {/* Desktop */}
          <ul className="nav-links">
            {navItems.map(({ id, label, isExternal, href }) => {
              const active = isActive({ id, label, isExternal, href });
              if (isExternal && href) {
                return (
                  <li key={id}>
                    <Link
                      href={href}
                      className={`nav-btn blog-pill ${active ? "active" : ""}`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`nav-btn ${active ? "active" : ""}`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            className="nav-ham"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`nav-drawer ${isOpen ? "open" : ""}`}>
          <div className="nav-drawer-inner">
            {navItems.map(({ id, label, isExternal, href }) => {
              const active = isActive({ id, label, isExternal, href });
              if (isExternal && href) {
                return (
                  <Link
                    key={id}
                    href={href}
                    className={`nav-mob-btn blog ${active ? "active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label} ✦
                  </Link>
                );
              }
              return (
                <button
                  key={id}
                  className={`nav-mob-btn ${active ? "active" : ""}`}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
