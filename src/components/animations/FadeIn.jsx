import React, { useRef, useState, useEffect} from "react";
const FadeIn = ({ children, dely = 0, duration = 500, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when element enters viewport
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    };
  }, [threshold, isVisible]);

  return (
    <div
      ref={elementRef}
      className={`transition-all transform ${
        isVisible ? "opacity-100 translate-y-0 animate-fadeIn" : "opacity-0 translate-y-6"
      }`}
      style={{
        animationDelay: isVisible ? `${dely}ms` : "0ms",
        animationDuration: `${duration}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
