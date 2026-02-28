// app/components/ParticlesBackground.jsx
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          color: { value: "#FBBF24" },
          links: { color: "#FBBF24", distance: 150 },
          move: { enable: true },
        },
      }}
    />
  );
}