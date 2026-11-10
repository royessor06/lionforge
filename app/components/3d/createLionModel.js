import * as THREE from "three";
import { createBrushedMetalTexture } from "./lionTextures";

/**
 * Creates the metallic 3D Lion sculpture for LionForge.
 * Built as a rich multi-part THREE.Group with physically-based metallic materials,
 * faceted mane, piercing molten eyes, and forge crown.
 */
export function createLionModel(options = {}) {
  const root = new THREE.Group();
  root.name = "LionForgeSculpture";

  const brushedTexture = createBrushedMetalTexture();

  // Materials definition
  const goldMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xFFD700),
    metalness: 0.95,
    roughness: 0.22,
    reflectivity: 0.9,
    clearcoat: 0.35,
    clearcoatRoughness: 0.15,
    roughnessMap: brushedTexture,
    bumpMap: brushedTexture,
    bumpScale: 0.003,
  });

  const steelMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0x8892B0),
    metalness: 0.9,
    roughness: 0.28,
    reflectivity: 0.8,
    clearcoat: 0.25,
    clearcoatRoughness: 0.2,
    roughnessMap: brushedTexture,
    bumpMap: brushedTexture,
    bumpScale: 0.003,
  });

  const darkSteelMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0x1B1F2A),
    metalness: 0.92,
    roughness: 0.35,
    reflectivity: 0.6,
  });

  const moltenEyeMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xFF4500),
    emissive: new THREE.Color(0xFF3300),
    emissiveIntensity: 1.8,
    roughness: 0.1,
    metalness: 0.2,
  });

  const eyePupilMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0x050505),
  });

  const moltenAccentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xFF5500),
    emissive: new THREE.Color(0xFF4500),
    emissiveIntensity: 1.2,
    roughness: 0.2,
    metalness: 0.8,
  });

  const fangsMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xEAEAEA),
    metalness: 0.8,
    roughness: 0.15,
    clearcoat: 0.6,
  });

  // Group to hold the entire head for animation
  const headGroup = new THREE.Group();
  headGroup.name = "HeadGroup";
  root.add(headGroup);

  // 1. CRANIUM & SKULL
  // Main head volume (faceted polyhedral form for high-tech aesthetic)
  const skullGeo = new THREE.DodecahedronGeometry(1.35, 1);
  // Deform skull to feline head shape
  const skullPos = skullGeo.attributes.position;
  for (let i = 0; i < skullPos.count; i++) {
    const x = skullPos.getX(i);
    const y = skullPos.getY(i);
    const z = skullPos.getZ(i);

    // Taper snout forward and widen temples
    let nx = x;
    let ny = y;
    let nz = z;

    if (z > 0.2) {
      // Snout taper
      nx *= 0.75;
      ny *= 0.85;
      nz *= 1.15;
    } else {
      // Cranium expansion
      nx *= 1.1;
      ny *= 1.05;
    }

    // Forehead slope
    if (y > 0.3 && z > 0) {
      ny -= (z * 0.15);
    }

    skullPos.setXYZ(i, nx, ny, nz);
  }
  skullGeo.computeVertexNormals();
  const skullMesh = new THREE.Mesh(skullGeo, steelMaterial);
  skullMesh.castShadow = true;
  skullMesh.receiveShadow = true;
  headGroup.add(skullMesh);

  // 2. BROW RIDGE & FOREHEAD PLATES (Accent Gold)
  const browGeo = new THREE.BoxGeometry(1.3, 0.28, 0.65);
  // Chamfer brow
  const browMesh = new THREE.Mesh(browGeo, goldMaterial);
  browMesh.position.set(0, 0.42, 0.72);
  browMesh.rotation.x = -0.3;
  browMesh.castShadow = true;
  headGroup.add(browMesh);

  // Forehead Center Gem / Forge Inset
  const forgeRuneGeo = new THREE.ConeGeometry(0.18, 0.4, 4);
  const forgeRuneMesh = new THREE.Mesh(forgeRuneGeo, moltenAccentMaterial);
  forgeRuneMesh.position.set(0, 0.65, 0.7);
  forgeRuneMesh.rotation.x = Math.PI * 0.4;
  headGroup.add(forgeRuneMesh);

  // 3. SNOUT & MUZZLE
  // Bridge of the nose
  const bridgeGeo = new THREE.BoxGeometry(0.55, 0.8, 0.85);
  const bridgeMesh = new THREE.Mesh(bridgeGeo, goldMaterial);
  bridgeMesh.position.set(0, 0.05, 1.15);
  bridgeMesh.rotation.x = 0.48;
  bridgeMesh.castShadow = true;
  headGroup.add(bridgeMesh);

  // Nose Pad / Truffle (Dark Steel)
  const nosePadGeo = new THREE.CylinderGeometry(0.28, 0.16, 0.35, 6);
  const nosePadMesh = new THREE.Mesh(nosePadGeo, darkSteelMaterial);
  nosePadMesh.position.set(0, -0.22, 1.58);
  nosePadMesh.rotation.x = 1.05;
  headGroup.add(nosePadMesh);

  // Whisker Pads (Left and Right)
  const padGeo = new THREE.BoxGeometry(0.48, 0.38, 0.5);
  const leftPad = new THREE.Mesh(padGeo, steelMaterial);
  leftPad.position.set(0.38, -0.32, 1.35);
  leftPad.rotation.set(0.15, 0.3, -0.15);
  headGroup.add(leftPad);

  const rightPad = new THREE.Mesh(padGeo, steelMaterial);
  rightPad.position.set(-0.38, -0.32, 1.35);
  rightPad.rotation.set(0.15, -0.3, 0.15);
  headGroup.add(rightPad);

  // 4. LOWER JAW & CHIN (Articulated appearance)
  const jawGeo = new THREE.BoxGeometry(0.68, 0.32, 0.95);
  const jawMesh = new THREE.Mesh(jawGeo, darkSteelMaterial);
  jawMesh.position.set(0, -0.65, 1.1);
  jawMesh.rotation.x = -0.15;
  headGroup.add(jawMesh);

  // Chin armor plate (Gold)
  const chinPlateGeo = new THREE.ConeGeometry(0.32, 0.45, 4);
  const chinPlate = new THREE.Mesh(chinPlateGeo, goldMaterial);
  chinPlate.position.set(0, -0.85, 1.25);
  chinPlate.rotation.x = -Math.PI * 0.7;
  headGroup.add(chinPlate);

  // Fangs (Left & Right upper sabre teeth)
  const fangGeo = new THREE.ConeGeometry(0.08, 0.35, 5);
  fangGeo.rotateX(Math.PI);
  const leftFang = new THREE.Mesh(fangGeo, fangsMaterial);
  leftFang.position.set(0.34, -0.48, 1.35);
  leftFang.rotation.z = 0.15;
  headGroup.add(leftFang);

  const rightFang = new THREE.Mesh(fangGeo, fangsMaterial);
  rightFang.position.set(-0.34, -0.48, 1.35);
  rightFang.rotation.z = -0.15;
  headGroup.add(rightFang);

  // 5. PIERCING MOLTEN EYES
  // Left eye assembly
  const eyeSocketGeo = new THREE.BoxGeometry(0.36, 0.22, 0.3);
  const leftSocket = new THREE.Mesh(eyeSocketGeo, darkSteelMaterial);
  leftSocket.position.set(0.48, 0.32, 0.92);
  leftSocket.rotation.set(-0.15, 0.4, 0.2);
  headGroup.add(leftSocket);

  const eyeGeo = new THREE.SphereGeometry(0.14, 16, 16);
  const leftEye = new THREE.Mesh(eyeGeo, moltenEyeMaterial);
  leftEye.position.set(0.5, 0.32, 1.02);
  leftEye.scale.set(1.2, 0.85, 1.0);
  headGroup.add(leftEye);

  // Left Pupil slit
  const pupilGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 8);
  const leftPupil = new THREE.Mesh(pupilGeo, eyePupilMaterial);
  leftPupil.position.set(0.53, 0.32, 1.12);
  leftPupil.rotation.y = 0.3;
  headGroup.add(leftPupil);

  // Right eye assembly
  const rightSocket = new THREE.Mesh(eyeSocketGeo, darkSteelMaterial);
  rightSocket.position.set(-0.48, 0.32, 0.92);
  rightSocket.rotation.set(-0.15, -0.4, -0.2);
  headGroup.add(rightSocket);

  const rightEye = new THREE.Mesh(eyeGeo, moltenEyeMaterial);
  rightEye.position.set(-0.5, 0.32, 1.02);
  rightEye.scale.set(1.2, 0.85, 1.0);
  headGroup.add(rightEye);

  const rightPupil = new THREE.Mesh(pupilGeo, eyePupilMaterial);
  rightPupil.position.set(-0.53, 0.32, 1.12);
  rightPupil.rotation.y = -0.3;
  headGroup.add(rightPupil);

  // 6. EARS (Alert, predatory, layered metal)
  const earGeo = new THREE.ConeGeometry(0.32, 0.75, 4);
  earGeo.rotateZ(0.2);

  const leftEarGroup = new THREE.Group();
  leftEarGroup.position.set(0.9, 1.0, 0.1);
  leftEarGroup.rotation.set(-0.25, 0.4, -0.35);

  const leftEarOuter = new THREE.Mesh(earGeo, steelMaterial);
  leftEarGroup.add(leftEarOuter);

  const leftEarInner = new THREE.Mesh(
    new THREE.ConeGeometry(0.22, 0.6, 4),
    goldMaterial
  );
  leftEarInner.position.set(0, 0, 0.06);
  leftEarGroup.add(leftEarInner);

  headGroup.add(leftEarGroup);

  // Right Ear
  const rightEarGroup = new THREE.Group();
  rightEarGroup.position.set(-0.9, 1.0, 0.1);
  rightEarGroup.rotation.set(-0.25, -0.4, 0.35);

  const rightEarOuter = new THREE.Mesh(earGeo, steelMaterial);
  rightEarGroup.add(rightEarOuter);

  const rightEarInner = new THREE.Mesh(
    new THREE.ConeGeometry(0.22, 0.6, 4),
    goldMaterial
  );
  rightEarInner.position.set(0, 0, 0.06);
  rightEarGroup.add(rightEarInner);

  headGroup.add(rightEarGroup);

  // 7. ROYAL DIGITAL FORGE CROWN / CREST
  const crownGroup = new THREE.Group();
  crownGroup.position.set(0, 1.25, 0.45);

  // Central Crown Spire
  const spireGeo = new THREE.ConeGeometry(0.25, 0.85, 4);
  const centerSpire = new THREE.Mesh(spireGeo, goldMaterial);
  centerSpire.position.set(0, 0.2, 0);
  crownGroup.add(centerSpire);

  // Left Crown Wing
  const leftWing = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.65, 4), steelMaterial);
  leftWing.position.set(0.42, 0.08, -0.1);
  leftWing.rotation.z = -0.35;
  crownGroup.add(leftWing);

  // Right Crown Wing
  const rightWing = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.65, 4), steelMaterial);
  rightWing.position.set(-0.42, 0.08, -0.1);
  rightWing.rotation.z = 0.35;
  crownGroup.add(rightWing);

  headGroup.add(crownGroup);

  // 8. LAYERED MANE (3 TIERS OF METALLIC FLOCKS)
  // Procedurally generate aerodynamic, sculpted metallic mane plates
  const maneGroup = new THREE.Group();
  maneGroup.name = "RoyalManeGroup";

  // Mane Lock Geometry: elongated faceted prism
  const maneLockGeo = new THREE.ConeGeometry(0.3, 1.8, 4);
  maneLockGeo.scale(1.2, 1, 0.5);

  // Tier 1: Outer Grand Radial Mane (36 locks radiating like forged solar rays)
  const outerLockCount = 28;
  for (let i = 0; i < outerLockCount; i++) {
    const angle = (i / outerLockCount) * Math.PI * 2;
    // Skip direct bottom-front so chest looks clean
    if (angle > Math.PI * 0.38 && angle < Math.PI * 0.62) continue;

    const radius = 1.65 + Math.sin(i * 3.5) * 0.2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * 1.05;
    const z = -0.3 - Math.sin(angle * 2) * 0.25;

    const lock = new THREE.Mesh(
      maneLockGeo,
      i % 2 === 0 ? goldMaterial : steelMaterial
    );
    lock.position.set(x, y, z);

    // Orient outward and slightly backward
    lock.rotation.z = angle - Math.PI / 2;
    lock.rotation.x = 0.35;
    lock.rotation.y = (Math.random() - 0.5) * 0.2;
    lock.scale.set(0.9 + Math.random() * 0.3, 1.1 + Math.random() * 0.4, 0.8);
    lock.castShadow = true;
    maneGroup.add(lock);
  }

  // Tier 2: Mid Mane Ring (Thicker, framing head with gold accents)
  const midLockCount = 20;
  for (let i = 0; i < midLockCount; i++) {
    const angle = (i / midLockCount) * Math.PI * 2;
    if (angle > Math.PI * 0.4 && angle < Math.PI * 0.6) continue;

    const radius = 1.35;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * 1.0;
    const z = 0.15;

    const lock = new THREE.Mesh(
      maneLockGeo,
      i % 3 === 0 ? moltenAccentMaterial : goldMaterial
    );
    lock.position.set(x, y, z);
    lock.rotation.z = angle - Math.PI / 2;
    lock.rotation.x = 0.2;
    lock.scale.set(0.7, 0.85, 0.6);
    lock.castShadow = true;
    maneGroup.add(lock);
  }

  // Tier 3: Cheek & Jaw Armor Spikes (Framing the fierce muzzle)
  for (let side = -1; side <= 1; side += 2) {
    for (let j = 0; j < 4; j++) {
      const lock = new THREE.Mesh(maneLockGeo, goldMaterial);
      lock.position.set(side * (0.85 + j * 0.18), -0.2 - j * 0.22, 0.55 - j * 0.1);
      lock.rotation.set(0.1, side * 0.4, side * (-0.7 - j * 0.15));
      lock.scale.set(0.5, 0.75, 0.5);
      lock.castShadow = true;
      maneGroup.add(lock);
    }
  }

  headGroup.add(maneGroup);

  // 9. INDUSTRIAL PEDESTAL / ANVIL BASE
  const anvilGroup = new THREE.Group();
  anvilGroup.position.set(0, -1.85, -0.2);

  const baseColGeo = new THREE.CylinderGeometry(0.9, 1.3, 0.7, 8);
  const baseCol = new THREE.Mesh(baseColGeo, darkSteelMaterial);
  baseCol.castShadow = true;
  baseCol.receiveShadow = true;
  anvilGroup.add(baseCol);

  // Golden Anvil Collar Ring
  const ringGeo = new THREE.TorusGeometry(1.05, 0.08, 8, 32);
  const ringMesh = new THREE.Mesh(ringGeo, goldMaterial);
  ringMesh.rotation.x = Math.PI / 2;
  ringMesh.position.y = 0.35;
  anvilGroup.add(ringMesh);

  root.add(anvilGroup);

  // Subtle breathing / micro-motion references
  let time = 0;
  function update(delta, mouseX = 0, mouseY = 0) {
    time += delta;

    // Organic breathing subtle pulse
    const breath = Math.sin(time * 1.5) * 0.012;
    skullMesh.scale.set(1 + breath, 1 + breath, 1 + breath);

    // Subtle jaw micro-movement
    jawMesh.rotation.x = -0.15 + Math.sin(time * 1.8) * 0.02;

    // Glowing eyes intensity pulse like forge embers
    const eyePulse = 1.6 + Math.sin(time * 3.0) * 0.5;
    moltenEyeMaterial.emissiveIntensity = eyePulse;
    moltenAccentMaterial.emissiveIntensity = 1.1 + Math.sin(time * 2.2) * 0.3;

    // Smooth head tilt following mouse
    const targetRotY = mouseX * 0.45;
    const targetRotX = -mouseY * 0.3;
    headGroup.rotation.y += (targetRotY - headGroup.rotation.y) * 0.08;
    headGroup.rotation.x += (targetRotX - headGroup.rotation.x) * 0.08;

    // Gentle ambient floating idle
    root.position.y = Math.sin(time * 0.8) * 0.08;
  }

  // Theme switcher method
  function setMaterialTheme(theme) {
    if (theme === "imperial-gold") {
      goldMaterial.color.setHex(0xFFD700);
      steelMaterial.color.setHex(0x8892B0);
      darkSteelMaterial.color.setHex(0x1B1F2A);
      moltenEyeMaterial.color.setHex(0xFF4500);
      moltenEyeMaterial.emissive.setHex(0xFF3300);
    } else if (theme === "damascus-steel") {
      goldMaterial.color.setHex(0xC0C6D0);
      steelMaterial.color.setHex(0x6A738A);
      darkSteelMaterial.color.setHex(0x0E1118);
      moltenEyeMaterial.color.setHex(0x3B82F6);
      moltenEyeMaterial.emissive.setHex(0x2563EB);
    } else if (theme === "molten-fusion") {
      goldMaterial.color.setHex(0xFF6A00);
      steelMaterial.color.setHex(0x2B1008);
      darkSteelMaterial.color.setHex(0x150804);
      moltenEyeMaterial.color.setHex(0xFF1100);
      moltenEyeMaterial.emissive.setHex(0xFF0000);
      moltenEyeMaterial.emissiveIntensity = 3.0;
    }
  }

  function setWireframe(enabled) {
    goldMaterial.wireframe = enabled;
    steelMaterial.wireframe = enabled;
    darkSteelMaterial.wireframe = enabled;
  }

  return {
    group: root,
    headGroup,
    update,
    setMaterialTheme,
    setWireframe,
    materials: {
      goldMaterial,
      steelMaterial,
      darkSteelMaterial,
      moltenEyeMaterial,
    },
  };
}
