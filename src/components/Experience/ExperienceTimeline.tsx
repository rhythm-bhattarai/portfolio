import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function TimelineLine() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 bottom-40 flex justify-center md:bottom-32">
      <motion.div
        ref={ref}
        className="h-full w-[2px] origin-top bg-cyan-400/70 shadow-[0_0_18px_rgba(0,255,255,0.7)]"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}

interface TimelineEntryProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  tag?: string;
}

function TimelineEntry({
  title,
  subtitle,
  period,
  location,
  tag,
  children,
  side,
}: React.PropsWithChildren<TimelineEntryProps & { side: "left" | "right" }>) {
  const isLeft = side === "left";

  return (
    <motion.div
      variants={itemVariants}
      className="relative flex w-full items-stretch"
    >
      {/* central marker */}
      <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2">
        <motion.div
          className="relative -translate-x-1/2"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="relative h-3 w-8">
            <div className="absolute left-0 right-0 top-0.5 h-0.5 bg-cyan-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
            <div className="absolute left-0 right-0 bottom-0.5 h-0.5 bg-cyan-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
          </div>
        </motion.div>
      </div>

      {/* Card container, left or right of center */}
      <div
        className={
          isLeft
            ? "relative mr-auto w-full pr-0 text-left md:w-1/2 md:pr-10 md:text-right"
            : "relative ml-auto w-full pl-0 text-left md:w-1/2 md:pl-10 md:text-left"
        }
      >
        <div className="corner-brackets terminal-border relative bg-black/50 p-4 md:p-5">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-[var(--cp-white)] md:text-xl">
            {title}
          </h3>
          {tag && (
            <span
              className="rounded-sm border px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.18em]"
              style={{ borderColor: "var(--cp-yellow)", color: "var(--cp-yellow)", fontFamily: "var(--font-ui)" }}
            >
              {tag}
            </span>
          )}
        </div>
        <p className="font-mono text-sm text-cyan-200 md:text-base">{subtitle}</p>
        <p className="mt-1 font-mono text-xs text-neutral-400 md:text-sm">
          {period}
          {location ? `  |  ${location}` : ""}
        </p>
        <div className="mt-3 space-y-2 font-mono text-sm text-neutral-200 md:text-base">
          {children}
        </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <div className="mt-8 space-y-10">
      <div className="relative">
        <TimelineLine />
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TimelineEntry
            title="Associate Software Developer"
            subtitle="Apogee IT Solutions"
            period="May 2025 – Present"
            location="Kathmandu, Nepal"
            tag="[ CURRENT ]"
            side="right"
          >
            <ul className="ml-0 list-none space-y-1 pl-0">
              <li>
                Configured Content Security Policy (CSP) headers and resolved cross-domain
                misconfigurations for government website security compliance.
              </li>
              <li>
                Singlehandedly designed and developed a municipality information portal — handled
                UI/UX, backend logic, and deployment end-to-end.
              </li>
              <li>
                Designed and implemented controller methods and custom reporting views for eHMIS,
                improving data accessibility for healthcare staff.
              </li>
              <li>
                Built and refactored modular React components with reusable UI elements for design
                consistency and maintainability.
              </li>
              <li>
                Implemented Celery-based asynchronous task queues for large-scale background data
                fetching and processing in Django projects.
              </li>
              <li>
                Worked extensively with PostgreSQL, SQL Server, and EF Core for database modeling,
                migrations, and query optimization.
              </li>
            </ul>
          </TimelineEntry>

          <TimelineEntry
            title="Software Developer Intern"
            subtitle="Apogee IT Solutions"
            period="February 2025 – April 2025"
            location="Kathmandu, Nepal"
            side="left"
          >
            <ul className="ml-0 list-none space-y-1 pl-0">
              <li>Developed JWT-based authentication system in ASP.NET Web API.</li>
              <li>
                Configured CORS policies to enable secure communication between API and React
                frontend.
              </li>
              <li>
                Integrated REST APIs with React using Axios, handling error scenarios and response
                management.
              </li>
              <li>
                Built User and Company profile management modules — skills, experience, academic
                records, resume upload.
              </li>
              <li>
                Developed a company job posting module with a full dashboard for creating, editing,
                and managing listings.
              </li>
            </ul>
          </TimelineEntry>
        </motion.div>
      </div>

      {/* Linux Journey terminal block */}
      <motion.div variants={itemVariants}>
        <p
          className="mb-2 text-[0.7rem] uppercase tracking-[0.25em]"
          style={{ color: "var(--cp-yellow)", fontFamily: "var(--font-heading)" }}
        >
          // NOT ON THE CV. BUT SHOULD BE.
        </p>
        <div className="relative overflow-hidden rounded-md border border-[var(--cp-green)] bg-black/80 p-4 text-sm text-[var(--cp-green)] shadow-[0_0_22px_rgba(0,255,65,0.45)] md:text-base">
          <div
            className="mb-2 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--cp-green)]/70"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            [ SELF_DRIVEN ]  ~  linux_journey
          </div>
          <pre
            className="whitespace-pre-wrap text-[0.85rem] leading-relaxed md:text-[0.95rem]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
{`> system: personal_rig
$ uname --distro-history
  arch → fedora → nobara → arch → windows (temporarily. regrettably.)

$ uptime
  3 years of terminal muscle memory

$ skills --acquired
  package managers, init systems, filesystems,
  dotfile management, breaking things intentionally

$ current_status
  windows (for now). the pull of arch is strong.`}
            <span className="ml-1 inline-block animate-pulse-fast">_</span>
          </pre>
        </div>
      </motion.div>

      {/* Education card */}
      <motion.div variants={itemVariants} className="mt-4">
        <div className="mb-3 flex items-center gap-3">
          <span
            className="rounded-sm border px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.18em]"
            style={{ borderColor: "var(--cp-green)", color: "var(--cp-green)", fontFamily: "var(--font-heading)" }}
          >
            [ ACADEMIC_LOG ]
          </span>
        </div>
        <div className="overflow-hidden rounded-md border border-cyan-400/60 bg-black/70 text-sm text-neutral-100 shadow-[0_0_18px_rgba(0,255,255,0.4)] md:text-base">
          <div
            className="border-b border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-[0.8rem] uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Education
          </div>
          <div
            className="grid gap-2 px-4 py-3 text-[0.85rem] md:text-[0.95rem]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <div className="grid gap-1 border-b border-white/5 pb-2 md:grid-cols-[2fr,2fr,1fr]">
              <span className="text-cyan-200">
                B.Sc. Computer Science &amp; IT
              </span>
              <span className="text-neutral-300">St. Xavier&apos;s College</span>
              <span className="text-neutral-400">2020 – 2025</span>
            </div>
            <div className="grid gap-1 border-b border-white/5 pb-2 md:grid-cols-[2fr,2fr,1fr]">
              <span className="text-cyan-200">Intermediate +2 Science</span>
              <span className="text-neutral-300">
                National Institute of Science and Technology
              </span>
              <span className="text-neutral-400">2017 – 2019</span>
            </div>
            <div className="grid gap-1 md:grid-cols-[2fr,2fr,1fr]">
              <span className="text-cyan-200">SEE</span>
              <span className="text-neutral-300">Skyrider H.S.E.B School</span>
              <span className="text-neutral-400">2007 – 2017</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

