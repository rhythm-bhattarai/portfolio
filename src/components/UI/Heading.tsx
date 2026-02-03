import { useEffect, useState } from "react";

export function Heading() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-transform duration-100
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">
        <nav className="flex items-center justify-center space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#skills" className="text-white hover:text-gray-300">
            Skills
          </a>
          <a href="#projects" className="text-white hover:text-gray-300">
            Projects
          </a>
          <a href="#experience" className="text-white hover:text-gray-300">
            Experience
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
