import { motion, useAnimate } from "framer-motion";
import { useCallback } from "react";

export function ProjectsOffline() {
  const [scope, animate] = useAnimate();

  const handleRetry = useCallback(
    async (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      await animate(
        scope.current,
        { x: [-2, 2, -1, 1, 0], skewX: ["0deg", "3deg", "-3deg", "0deg"] },
        { duration: 0.25, ease: "easeInOut" },
      );
    },
    [animate, scope],
  );

  return (
    <motion.div
      ref={scope}
      className="relative mx-auto max-w-4xl transform-gpu bg-black/80 p-6 text-[var(--cp-white)] shadow-[0_0_26px_rgba(255,0,60,0.6)] sm:p-8"
      style={{
        borderRadius: "18px",
        border: "1px solid rgba(255,0,60,0.7)",
        transform: "perspective(800px) rotateX(2deg)",
      }}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_1px,transparent_2px,transparent_4px)]" />
      </div>

      {/* Top bar */}
      <div
        className="relative flex items-center justify-between border-b border-red-500/40 pb-2 text-[0.7rem] uppercase tracking-[0.22em]"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cp-red)] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cp-red)]" />
          </span>
          <span>NIGHT_CITY_NET</span>
        </div>
        <span className="hidden sm:inline text-[0.65rem]">
          // NODE: portfolio.projects
        </span>
        <span className="text-[0.65rem]">STATUS: OFFLINE</span>
      </div>

      {/* Main error content */}
      <div className="relative mt-6 space-y-4">
        <motion.div
          className="glitch-text text-2xl font-semibold text-[var(--cp-red)] sm:text-3xl md:text-4xl"
          data-text="SIGNAL LOST"
          style={{ fontFamily: "var(--font-title)" }}
          animate={{
            x: [0, 1, -1, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 6,
            ease: "linear",
          }}
        >
          ⚠ SIGNAL LOST
        </motion.div>

        <div
          className="text-xs text-[var(--cp-white)]/80 sm:text-sm"
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          <p className="mb-2">
            [ERR_0x4F2] PROJECTS NODE UNREACHABLE
          </p>
          <p className="mb-4">
            Attempting to establish connection to deployed systems archive...
          </p>
          <p className="mb-1">
            ████░░░░░░░░░░░░░░░░░░░  23% — STALLED
          </p>
          <p className="mb-1 text-[0.8rem] text-[var(--cp-yellow)]/90">
            Last known uptime: [REDACTED]
          </p>
          <p className="mb-4 text-[0.8rem] text-[var(--cp-white)]/85">
            Cause of failure:{" "}
            <span className="italic text-[var(--cp-yellow)]">
              still building them
            </span>
          </p>
          <p>
            &gt; Retry? [Y/N]{" "}
            <span
              onClick={handleRetry}
              className="cursor-pointer text-[var(--cp-green)]"
            >
              Y
            </span>
            <span className="ml-1 inline-block animate-pulse-fast">_</span>
          </p>
        </div>
      </div>

      {/* Bottom status bar */}
      <div
        className="relative mt-6 border-t border-red-500/40 pt-2 text-[0.65rem] text-[var(--cp-white)]/60"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        TRAUMA_TEAM DISPATCH: UNAVAILABLE  |  NETWATCH: OFFLINE  |  ESTIMATED RESTORE: UNKNOWN
      </div>
    </motion.div>
  );
}

