import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/background.png";

const FLOATING_STRINGS = ["0xA3F9", "101101", "0x7E1C", "01100110", "0xDEAD", "11001001"];

export function HeroSection() {
  return (
    <section
      id="home"
      className="scanline-overlay relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black pb-16 pt-32"
    >
      {/* Floating hex / binary background */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        {FLOATING_STRINGS.map((value, index) => (
          <motion.span
            key={value + index}
            className="pointer-events-none absolute text-xs text-cyan-200/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: "110%",
            }}
            animate={{
              y: "-20%",
            }}
            transition={{
              duration: 18 + index * 4,
              repeat: Infinity,
              ease: "linear",
              delay: index * 1.3,
            }}
          >
            {value}
          </motion.span>
        ))}
      </motion.div>

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-10 px-8 md:flex-row md:items-center md:justify-between md:px-16">
        {/* Left: intro + name */}
        <motion.div
          className="crt-flicker flex-1 text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="mb-4 text-xs tracking-[0.25em] text-cyan-300">
            &lt; INIT_HANDSHAKE /&gt;
          </p>

          <h1
            className="glitch-text mb-3 max-w-md text-4xl leading-tight font-display md:text-5xl lg:text-6xl"
            data-text="[RIDAM_BHATTARAI]"
            style={{ letterSpacing: "0.12em" }}
          >
            [RIDAM_BHATTARAI]
          </h1>

          <div className="mb-5 text-cyan-200">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1500,
                "Backend Architect",
                1500,
                "Linux Enthusiast",
                1500,
                "Fast Learner. Any Stack.",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-sm md:text-base"
            />
          </div>

          <p className="mb-9 max-w-xl text-sm text-neutral-300 md:text-base">
            I build systems that work. I break ones that don&apos;t.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="projects"
              smooth
              duration={600}
              offset={-80}
              className="neon-border cursor-pointer bg-black/60 px-6 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200 transition-colors hover:bg-cyan-300 hover:text-black md:text-sm"
            >
              &gt; VIEW MY WORK
            </Link>
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="border border-cyan-400/60 bg-cyan-500/10 px-6 py-2 text-xs uppercase tracking-[0.25em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black md:text-sm"
            >
              &gt; CONTACT ME
            </Link>
          </div>
        </motion.div>

        {/* Right: hero image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={heroImage}
            alt="Neon silhouette"
            className="pointer-events-none mx-auto h-[70vh] w-auto max-w-[420px] object-contain md:h-[90vh]"
            style={{
              mixBlendMode: "luminosity",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 100%)," +
                "linear-gradient(to bottom, transparent 0%, black 12%, black 72%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 100%)," +
                "linear-gradient(to bottom, transparent 0%, black 12%, black 72%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
              objectPosition: "top center",
              opacity: 0.88,
              // filter: "drop-shadow(0 0 18px #00FFFF) drop-shadow(0 0 50px #00FFFF44)",
              height: "100%",
              width: "100%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.88, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 1.4, ease: "easeOut" },
              y: {
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
