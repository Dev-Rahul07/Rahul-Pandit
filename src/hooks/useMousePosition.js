// src/hooks/useMousePosition.js
import { useState, useEffect, useRef, useCallback } from "react";

const lerp = (a, b, t) => a + (b - a) * t;

const useMousePosition = () => {
  // start centered to avoid big jumps on mount
  const getCenter = () => ({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const [pos, setPos] = useState(getCenter);
  const targetRef = useRef(getCenter());
  const rafRef = useRef(null);

  const handleMove = useCallback((e) => {
    // support mouse and touch events
    const point = e.touches && e.touches[0] ? e.touches[0] : e;
    targetRef.current = { x: point.clientX, y: point.clientY };
  }, []);

  useEffect(() => {
    // RAF loop updates state with lerp toward target at ~60fps
    const loop = () => {
      setPos((prev) => {
        const nx = lerp(prev.x, targetRef.current.x, 0.14);
        const ny = lerp(prev.y, targetRef.current.y, 0.14);
        // small threshold prevents tiny updates
        if (Math.abs(nx - prev.x) < 0.25 && Math.abs(ny - prev.y) < 0.25) {
          return prev;
        }
        return { x: nx, y: ny };
      });
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleMove, { passive: true });

    // update center on resize to avoid offset drift
    const onResize = () => {
      targetRef.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("resize", onResize);
    };
  }, [handleMove]);

  return pos;
};

export default useMousePosition;
