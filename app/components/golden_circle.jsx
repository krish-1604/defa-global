"use client";
import { useEffect, useState } from "react";

const GoldenCircle = () => {
  const [leftOffset, setLeftOffset] = useState("-50vw");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const getBreakpoint = () => {
      const width = window.innerWidth;
      return width < 768 ? "mobile" : "desktop";
    };

    const breakpoints = {
      mobile: "-50vw", // Centered for mobile/tablet
      desktop: "-50vw", // Original position for desktop
    };

    const handleResize = () => {
      const current = getBreakpoint();
      setLeftOffset(breakpoints[current]);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Don't render until client-side to prevent hydration issues
  if (!isClient) {
    return (
      <div
        className="absolute z-10 bg-[rgba(212,184,115,0.9)] rounded-full"
        style={{
          width: "100vw",
          height: "100vw",
          top: "-20vw",
          left: "-50vw",
        }}
      ></div>
    );
  }

  return (
    <div
      className="absolute z-10 bg-[rgba(212,184,115,0.9)] rounded-full"
      style={{
        width: "100vw",
        height: "100vw",
        top: "-20vw",
        left: leftOffset,
      }}
    ></div>
  );
};

export default GoldenCircle;
