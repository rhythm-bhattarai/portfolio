import { Heading } from "../../components/UI/Heading";
import { HeroSection } from "../../components/Home/HeroSection";
import { Skills } from "../Skills/Skills";
import { Experience } from "../Experience/Experience";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";

export function Home() {
  return (
    <>
      <Heading />
      <HeroSection />

      <div id="skills" className="scroll-mt-24">
        <Skills />
      </div>

      <div id="experience" className="scroll-mt-24">
        <Experience />
      </div>

      <div id="projects" className="scroll-mt-24">
        <Projects />
      </div>

      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
    </>
  );
}
