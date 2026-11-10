"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    // Detect hover over interactive elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("[role='button']") ||
        target.closest(".interactive-target")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);

    // Smooth lerp loop for the outer luminous forge ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central crisp luminous spark dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700] transition-transform duration-75 ease-out will-change-transform ${
          isClicked ? "scale-50 bg-[#FF4500]" : isHovered ? "scale-125 bg-white" : "scale-100"
        }`}
      />

      {/* Outer forge halo ring with subtle lag */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full border transition-[width,height,border-color,background-color] duration-200 ease-out will-change-transform ${
          isHovered
            ? "w-12 h-12 -ml-6 -mt-6 border-[#FFD700]/70 bg-[#FFD700]/10 shadow-[0_0_20px_rgba(255,215,0,0.25)]"
            : isClicked
            ? "w-7 h-7 -ml-3.5 -mt-3.5 border-[#FF4500]/80 bg-[#FF4500]/15"
            : "w-8 h-8 -ml-4 -mt-4 border-[#FFD700]/30 bg-transparent"
        }`}
      />
    </div>
  );
}
