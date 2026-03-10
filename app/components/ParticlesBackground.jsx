"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#FBBF24" },
          links: { color: "#FBBF24", distance: 150, enable: true, opacity: 0.1, width: 1 },
          move: { enable: true, speed: 1 },
          number: { density: { enable: true, area: 800 }, value: 40 },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;