import { useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";

const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "skills", label: "SKILL_MATRIX" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
] as const;

export function Heading() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-30 w-full border-b border-cyan-400/40 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-2">
          <span className="font-display text-xs text-cyan-300 md:text-sm">
            ridam@portfolio:
          </span>
          <span className="neon-text font-display text-sm font-semibold md:text-base">
            ~$
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="nav-link-active"
              className={clsx(
                "nav-link cursor-pointer text-sm tracking-[0.18em] text-neutral-300 transition-colors md:text-base",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative flex h-8 w-8 items-center justify-center rounded border border-cyan-400/60 text-cyan-300 shadow-[0_0_8px_rgba(0,255,255,0.4)] md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span
            className={clsx(
              "absolute h-0.5 w-4 bg-cyan-300 transition-transform",
              mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            className={clsx(
              "absolute h-0.5 w-4 bg-cyan-300 transition-opacity",
              mobileOpen ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={clsx(
              "absolute h-0.5 w-4 bg-cyan-300 transition-transform",
              mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5",
            )}
          />
        </button>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-pulse-slow" />

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[56px] z-20 bg-black/95 pb-8 pt-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col space-y-4 px-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="nav-link-active"
                className="nav-link block cursor-pointer text-sm tracking-widest text-neutral-300"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
