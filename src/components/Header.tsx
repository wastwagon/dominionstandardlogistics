import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SITE } from "../content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__top">
        <div className="container site-header__top-inner">
          <div className="site-header__reach">
            <a
              className="site-header__reach-link"
              href={`tel:${SITE.phoneTel}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {SITE.phoneDisplay}
            </a>
            <span className="site-header__reach-sep" aria-hidden />
            <a className="site-header__reach-link" href={`tel:${SITE.phoneTelSecondary}`}>
              {SITE.phoneDisplaySecondary}
            </a>
            <span className="site-header__reach-sep" aria-hidden />
            <a
              className="site-header__reach-link site-header__reach-link--muted"
              href={`mailto:${SITE.email}`}
            >
              {SITE.email}
            </a>
          </div>
          <p className="site-header__locale">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            {SITE.addressHighlight}
          </p>
        </div>
      </div>

      <div className="site-header__main">
        <div className="container site-header__main-inner">
          <NavLink className="logo-link" to="/" end>
            <img
              src="/assets/newlogodominiologistics.png"
              width={280}
              height={73}
              alt="Dominion Standard Logistics Ltd"
            />
          </NavLink>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          <nav
            className={`nav-main${open ? " is-open" : ""}`}
            id="site-nav"
            aria-label="Primary"
          >
            <div className="nav-links">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <NavLink className="header-cta" to="/contact">
              Request a quote
            </NavLink>
          </nav>
        </div>
      </div>
      <button
        type="button"
        className={`nav-backdrop${open ? " is-open" : ""}`}
        aria-label="Close menu overlay"
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
