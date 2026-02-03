import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function ScrambleText({
  text,
  className = "",
  duration = 2000,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.floor(duration / 30);

    const interval = window.setInterval(() => {
      frame++;

      const progress = frame / totalFrames;
      const charsToReveal = Math.floor(progress * text.length);

      const scrambled = text
        .split("")
        .map((char, i) =>
          i < charsToReveal
            ? char
            : CHARS[Math.floor(Math.random() * CHARS.length)],
        )
        .join("");

      setDisplayText(scrambled);

      if (frame >= totalFrames) {
        window.clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{displayText}</span>;
}
