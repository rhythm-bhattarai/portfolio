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
      <section
        id="home"
        className="min-h-screen bg-black text-white px-8 md:px-16 scroll-mt-24"
      >
        <HeroSection />
      </section>

      <section
        id="skills"
        className="min-h-screen bg-black text-white px-8 md:px-16 scroll-mt-24"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="min-h-screen bg-black text-white px-8 md:px-16 scroll-mt-24"
      >
        <Projects />
      </section>

      <section
        id="experience"
        className="min-h-screen bg-black text-white px-8 md:px-16 scroll-mt-24"
      >
        <Experience />
      </section>

      <section
        id="contact"
        className="min-h-screen bg-black text-white px-8 md:px-16 scroll-mt-24"
      >
        <Contact />
      </section>
    </>
  );
}
