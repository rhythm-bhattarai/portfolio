import { SiGithub, SiLinkedin } from "react-icons/si";

export function ContactCard() {
  return (
    <div className="flex flex-col justify-center card bg-white/70 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-gradient- rounded-1xl shadow-xl p-8 transition-all">
      <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
        Any suggestions, questions, or just want to say hi? <br /> <br />
        My inbox is always open. I’ll try my best to get back to you!
      </p>
      <div className="mt-6">
        <p className="text-lg md:text-xl text-white/80 mb-4">
          Check out my other profiles:
        </p>

        <div className="flex flex-wrap gap-4">
          {/* GitHub Card */}
          <a
            href="https://github.com/rhythm-bhattarai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-3 rounded-xl 
                 bg-white/10 backdrop-blur-md border border-white/10
                 hover:bg-white/20 transition-all duration-300
                 hover:scale-105 hover:shadow-lg"
          >
            <SiGithub className="text-xl" />
            <span className="text-white/80 group-hover:text-white">GitHub</span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/rhythm-bhattarai-21798a308/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-3 rounded-xl 
                 bg-white/10 backdrop-blur-md border border-white/10
                 hover:bg-white/20 transition-all duration-300
                 hover:scale-105 hover:shadow-lg"
          >
            <SiLinkedin className="text-xl" />
            <span className="text-white/80 group-hover:text-white">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
