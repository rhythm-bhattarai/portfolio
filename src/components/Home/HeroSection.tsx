import { ScrambleText } from "./ScrambleText";
import "./Home.css";

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 hero-bg" />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center">
        <div className="px-8 md:px-16 max-w-2xl text-left text-white">
          <p className="text-3xl">Hey there! It's</p>
          <br />

          <h1 className="text-6xl md:text-7xl font-bold">
            <ScrambleText text="Rhythm Bhattarai" />
          </h1>
          <br />
          <h2 className="text-4xl mt-4">Full-Stack Developer | Traveller</h2>
        </div>
      </div>
    </section>
  );
}
