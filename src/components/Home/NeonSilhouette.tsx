import { motion } from "framer-motion";

export function NeonSilhouette() {
  return (
    <div className="relative mx-auto flex h-80 w-64 items-center justify-center md:h-96 md:w-72">
      <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-3xl" />
      <motion.svg
        viewBox="0 0 200 400"
        className="relative h-full w-full"
        initial={{ filter: "drop-shadow(0 0 0 #00ffff)" }}
        animate={{ filter: "drop-shadow(0 0 16px #00ffff)" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <defs>
          <linearGradient id="silhouetteStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#FF00FF" />
          </linearGradient>
        </defs>
        <path
          d="M100 30
             C 80 30, 65 45, 65 65
             C 65 85, 80 100, 100 100
             C 120 100, 135 85, 135 65
             C 135 45, 120 30, 100 30
             Z
             M70 120
             C 55 150, 55 190, 60 230
             L 65 280
             L 60 340
             L 80 360
             L 90 310
             L 110 310
             L 120 360
             L 140 340
             L 135 280
             L 140 230
             C 145 190, 145 150, 130 120
             Z"
          fill="transparent"
          stroke="url(#silhouetteStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
}

