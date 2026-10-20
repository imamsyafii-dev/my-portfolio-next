"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    if (!isOpen) return;
    setIsOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [closeMenu, isOpen]);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="wordmark" href="#top" aria-label="Imam Syafi'i, back to top">IS<span>.</span></a>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        ><span /><span /></button>
        <nav id="primary-navigation" className={`primary-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={17} /></a>
        </nav>
      </div>
    </header>
  );
}
