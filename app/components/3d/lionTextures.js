import * as THREE from "three";

/**
 * Creates procedural high-fidelity brushed metal & hammer-forged texture maps
 * completely in-memory with zero network or external file dependencies.
 */
export function createBrushedMetalTexture() {
  if (typeof document === "undefined") return null;

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Base metallic fill
  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0, 512, 512);

  // Micro-brushed anisotropic horizontal streaks
  for (let i = 0; i < 4000; i++) {
    const y = Math.random() * 512;
    const x = Math.random() * 512;
    const len = 40 + Math.random() * 120;
    const brightness = Math.floor(100 + Math.random() * 60);
    ctx.strokeStyle = `rgba(${brightness}, ${brightness}, ${brightness}, 0.15)`;
    ctx.lineWidth = 1 + Math.random() * 1.5;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + len, y);
    ctx.stroke();
  }

  // Subtle hammer forge dimples
  for (let i = 0; i < 200; i++) {
    const cx = Math.random() * 512;
    const cy = Math.random() * 512;
    const r = 4 + Math.random() * 14;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    grad.addColorStop(0, "rgba(220, 220, 220, 0.12)");
    grad.addColorStop(0.7, "rgba(70, 70, 70, 0.08)");
    grad.addColorStop(1, "rgba(128, 128, 128, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
}

/**
 * Creates glowing circular spark texture for GPU particles
 */
export function createSparkTexture() {
  if (typeof document === "undefined") return null;

  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
  grad.addColorStop(0.2, "rgba(255, 215, 0, 0.9)");
  grad.addColorStop(0.5, "rgba(255, 69, 0, 0.5)");
  grad.addColorStop(0.8, "rgba(255, 30, 0, 0.15)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}
