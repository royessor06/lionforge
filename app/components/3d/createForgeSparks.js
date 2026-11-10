import * as THREE from "three";
import { createSparkTexture } from "./lionTextures";

/**
 * High-performance GPU-friendly forge sparks particle system.
 * Simulates thousands of rising embers and fiery sparks from a digital forge.
 */
export function createForgeSparks(count = 1800) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  // Velocity and lifetime data stored in typed arrays for zero-GC loops
  const velocities = new Float32Array(count * 3);
  const lifetimes = new Float32Array(count);
  const maxLifetimes = new Float32Array(count);

  const sparkTexture = createSparkTexture();

  // Color palette: Molten Orange (#FF4500), Forge Gold (#FFD700), Pure White Core
  const colorMolten = new THREE.Color(0xFF4500);
  const colorGold = new THREE.Color(0xFFD700);
  const colorWhite = new THREE.Color(0xFFFFFF);

  const spawnRadius = 3.5;
  const spawnBottom = -3.2;
  const maxHeight = 5.0;

  for (let i = 0; i < count; i++) {
    // Spawn around the forge pedestal
    const r = Math.pow(Math.random(), 0.6) * spawnRadius;
    const theta = Math.random() * Math.PI * 2;

    positions[i * 3 + 0] = Math.cos(theta) * r;
    positions[i * 3 + 1] = spawnBottom + Math.random() * (maxHeight - spawnBottom);
    positions[i * 3 + 2] = Math.sin(theta) * r - 0.5;

    // Upward velocity with horizontal turbulent drift
    velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.4;
    velocities[i * 3 + 1] = 0.8 + Math.random() * 1.8; // Upward speed
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.4;

    lifetimes[i] = Math.random() * 4.0;
    maxLifetimes[i] = 2.5 + Math.random() * 3.5;
    sizes[i] = 12 + Math.random() * 24;

    // Color mixing
    const mix = Math.random();
    let col;
    if (mix < 0.45) {
      col = colorMolten.clone().lerp(colorGold, Math.random());
    } else if (mix < 0.85) {
      col = colorGold.clone().lerp(colorWhite, Math.random() * 0.5);
    } else {
      col = colorWhite;
    }

    colors[i * 3 + 0] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    size: 0.16,
    map: sparkTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  points.name = "ForgeSparks";

  let time = 0;
  function update(delta, intensityMultiplier = 1.0) {
    time += delta;
    const posAttr = geometry.attributes.position;
    const posArray = posAttr.array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;

      // Advance lifetime
      lifetimes[i] += delta * intensityMultiplier;

      // Natural upward motion with subtle spiral & wind turbulence
      const curlX = Math.sin(time * 2.0 + posArray[idx + 1] * 1.5) * 0.008;
      const curlZ = Math.cos(time * 1.8 + posArray[idx + 1] * 1.2) * 0.008;

      posArray[idx + 0] += (velocities[idx + 0] * delta + curlX) * intensityMultiplier;
      posArray[idx + 1] += velocities[idx + 1] * delta * intensityMultiplier;
      posArray[idx + 2] += (velocities[idx + 2] * delta + curlZ) * intensityMultiplier;

      // Reset when particle exceeds ceiling or lifetime
      if (posArray[idx + 1] > maxHeight || lifetimes[i] > maxLifetimes[i]) {
        const r = Math.pow(Math.random(), 0.6) * spawnRadius;
        const theta = Math.random() * Math.PI * 2;

        posArray[idx + 0] = Math.cos(theta) * r;
        posArray[idx + 1] = spawnBottom;
        posArray[idx + 2] = Math.sin(theta) * r - 0.5;

        lifetimes[i] = 0;
      }
    }

    posAttr.needsUpdate = true;
  }

  return {
    points,
    material,
    update,
  };
}
