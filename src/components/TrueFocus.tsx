import { useEffect, useRef, useState, CSSProperties } from "react";
import { motion, useInView } from "framer-motion";
import Fire from "./ui/Fire";

const TrueFocus = ({
  sentence = "True Focus",
  blurAmount = 5,
  borderColor = "transparent",
  glowColor = "transparent",
  animationDuration = 0.2,
  pauseBetweenAnimations = 0.3,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isSentenceVisible, setIsSentenceVisible] = useState(false);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false, amount: 0.5 });
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (inView) {
      setCurrentIndex(0);
      setIsSentenceVisible(false);

      interval = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= words.length - 1) {
            clearInterval(interval);
            setIsSentenceVisible(true);
            return words.length;
          }
          return prev + 1;
        });
      }, (animationDuration + pauseBetweenAnimations) * 1000);
    } else {
      setCurrentIndex(-1);
      setIsSentenceVisible(false);
    }

    return () => clearInterval(interval);
  }, [inView, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === -1 || currentIndex >= words.length || !wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  return (
    <>
      <div
        className="relative flex gap-4 justify-center items-center flex-wrap"
        ref={containerRef}
      >
        <span
          style={
            {
              animation: isSentenceVisible ? `flicker 2s infinite` : "none",
            } as CSSProperties
          }
        >
          {words.map((word, index) => {
            const isActive = index === currentIndex;
            const isBlurred = !isSentenceVisible && !isActive;

            return (
              <span
                key={index}
                ref={(el) => (wordRefs.current[index] = el)}
                className="relative text-[3rem] font-black cursor-pointer"
                style={{
                  filter: isBlurred ? `blur(${blurAmount}px)` : `blur(0px)`,
                  "--border-color": borderColor,
                  "--glow-color": glowColor,
                  transition: `filter ${animationDuration}s ease`,
                } as CSSProperties}
              >
                {word}{" "}
              </span>
            );
          })}
        </span>

        <motion.div
          className="absolute top-0 left-0 pointer-events-none"
          animate={{
            x: focusRect.x,
            y: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
            opacity: currentIndex >= 0 && currentIndex < words.length ? 1 : 0,
          }}
          transition={{
            duration: animationDuration,
          }}
        >
          {currentIndex >= 0 && currentIndex < words.length && <Fire />}
        </motion.div>
      </div>
    </>
  );
};

export default TrueFocus;
