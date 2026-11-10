"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createLionModel } from "./createLionModel";
import { createForgeSparks } from "./createForgeSparks";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { usePerformance } from "@/app/hooks/usePerformance";
import { 
  Sparkles, 
  RotateCw, 
  Layers, 
  ChevronDown, 
  ChevronUp,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LionScene() {
  const mountRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const perf = usePerformance();

  const [webglSupported, setWebglSupported] = useState(true);
  const [activeTheme, setActiveTheme] = useState("imperial-gold");
  const [activePreset, setActivePreset] = useState("face");
  const [autoRotate, setAutoRotate] = useState(!prefersReducedMotion);
  const [wireframe, setWireframe] = useState(false);
  const [sparksIntensity, setSparksIntensity] = useState(1.0);
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);

  // References to communicate with Three.js loop
  const sceneRefs = useRef({
    renderer: null,
    camera: null,
    lion: null,
    sparks: null,
    targetCamPos: { x: 0, y: 0, z: 5.2 },
    targetCamLook: { x: 0, y: 0, z: 0 },
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    autoRotate: true,
    sparksIntensity: 1.0,
    reducedMotion: false,
    isDestroyed: false,
  });

  useEffect(() => {
    sceneRefs.current.autoRotate = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    sceneRefs.current.sparksIntensity = sparksIntensity;
  }, [sparksIntensity]);

  useEffect(() => {
    sceneRefs.current.reducedMotion = prefersReducedMotion;
    if (prefersReducedMotion) {
      setAutoRotate(false);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Software GL detection (Three.js skill directive)
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement("canvas").getContext("webgl2");
        if (!gl) return true;
        const ext = gl.getExtension("WEBGL_debug_renderer_info");
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // 2. Scene & Camera Setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const isMobile = width < 768;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.08);

    const initialZ = isMobile ? 6.2 : 5.2;
    sceneRefs.current.targetCamPos.z = initialZ;

    const camera = new THREE.PerspectiveCamera(isMobile ? 48 : 42, width / height, 0.1, 50);
    camera.position.set(0, 0, initialZ);
    camera.lookAt(0, 0, 0);
    sceneRefs.current.camera = camera;

    // 3. High-Performance Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        powerPreference: "high-performance",
        alpha: true,
      });
    } catch (e) {
      console.warn("WebGL initialization failed:", e);
      setWebglSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);
    sceneRefs.current.renderer = renderer;

    // 4. Procedural Studio Reflection (RoomEnvironment - Zero 404 dependencies)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 5. Studio 3-Point Cinematic Lighting Rig
    // Warm Key Light (Golden Forge)
    const keyLight = new THREE.DirectionalLight(0xFFD700, 2.8);
    keyLight.position.set(3.5, 4.0, 4.0);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 15;
    }
    scene.add(keyLight);

    // Molten Rim Light (Deep Forge Orange backlight)
    const rimLight = new THREE.DirectionalLight(0xFF4500, 3.4);
    rimLight.position.set(-3.5, 2.0, -2.5);
    scene.add(rimLight);

    // Cool Steel Fill Light (Balancing high-metal reflections)
    const fillLight = new THREE.DirectionalLight(0x8892B0, 1.2);
    fillLight.position.set(-2.5, -1.0, 3.0);
    scene.add(fillLight);

    // Subtle Hemisphere Sky/Ground Warmth
    const hemiLight = new THREE.HemisphereLight(0xFFD700, 0x101114, 0.4);
    scene.add(hemiLight);

    // Contact Shadow Grounding Plane (Prevent floating look)
    const groundGeo = new THREE.PlaneGeometry(8, 8);
    const groundMat = new THREE.MeshBasicMaterial({
      color: 0x050505,
      transparent: true,
      opacity: 0.6,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2.2;
    scene.add(ground);

    // 6. Instantiate Metallic Lion & GPU Forge Sparks
    const lion = createLionModel();
    scene.add(lion.group);
    sceneRefs.current.lion = lion;

    const particleCount = isSoftwareGl || isMobile ? 600 : 1800;
    const sparks = createForgeSparks(particleCount);
    scene.add(sparks.points);
    sceneRefs.current.sparks = sparks;

    // 7. Mouse Parallax Handler with Exponential Damping
    const handlePointerMove = (e) => {
      if (sceneRefs.current.reducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      sceneRefs.current.mouse.targetX = Math.max(-1, Math.min(1, x));
      sceneRefs.current.mouse.targetY = Math.max(-1, Math.min(1, y));
    };

    window.addEventListener("pointermove", handlePointerMove);

    // 8. GSAP ScrollTrigger Integration
    let scrollTriggerInstance = null;
    if (typeof window !== "undefined" && gsap && !prefersReducedMotion) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          sceneRefs.current.targetCamPos.y = progress * 1.5;
          sceneRefs.current.targetCamPos.z = initialZ + progress * 2.5;
          if (lion.group) {
            lion.group.rotation.x = progress * 0.35;
          }
        },
      });
    }

    // 9. Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      const mobileNow = newWidth < 768;
      camera.aspect = newWidth / newHeight;
      camera.fov = mobileNow ? 48 : 42;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 10. Animation Loop
    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      if (sceneRefs.current.isDestroyed) return;

      const delta = Math.min(clock.getDelta(), 0.1);

      // Smooth mouse damping
      const mouse = sceneRefs.current.mouse;
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Auto-rotation around Y axis if enabled and not reduced motion
      if (sceneRefs.current.autoRotate && lion.group && !sceneRefs.current.reducedMotion) {
        lion.group.rotation.y += delta * 0.25;
      }

      // Update lion micro-movements and fangs/breathing
      lion.update(delta, mouse.x, mouse.y);

      // Update GPU sparks
      sparks.update(delta, sceneRefs.current.sparksIntensity);

      // Smooth camera position transitions
      const targetPos = sceneRefs.current.targetCamPos;
      camera.position.x += (targetPos.x + mouse.x * 0.4 - camera.position.x) * 0.05;
      camera.position.y += (targetPos.y + mouse.y * 0.3 - camera.position.y) * 0.05;
      camera.position.z += (targetPos.z - camera.position.z) * 0.05;

      const targetLook = sceneRefs.current.targetCamLook;
      camera.lookAt(targetLook.x, targetLook.y, targetLook.z);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      sceneRefs.current.isDestroyed = true;
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, [prefersReducedMotion]);

  // Material Theme Change
  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
    if (sceneRefs.current.lion) {
      sceneRefs.current.lion.setMaterialTheme(theme);
    }
  };

  // Wireframe Toggle
  const handleWireframeToggle = () => {
    const nextState = !wireframe;
    setWireframe(nextState);
    if (sceneRefs.current.lion) {
      sceneRefs.current.lion.setWireframe(nextState);
    }
  };

  // Camera Presets
  const handlePresetChange = (preset) => {
    setActivePreset(preset);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const baseZ = isMobile ? 6.2 : 5.2;

    if (preset === "face") {
      gsap.to(sceneRefs.current.targetCamPos, { x: 0, y: 0, z: baseZ, duration: 1.2, ease: "power2.out" });
      gsap.to(sceneRefs.current.targetCamLook, { x: 0, y: 0, z: 0, duration: 1.2 });
    } else if (preset === "profile") {
      gsap.to(sceneRefs.current.targetCamPos, { x: 2.6, y: 0.3, z: baseZ - 1.0, duration: 1.2, ease: "power2.out" });
      gsap.to(sceneRefs.current.targetCamLook, { x: 0, y: 0, z: 0.2, duration: 1.2 });
    } else if (preset === "cinema") {
      gsap.to(sceneRefs.current.targetCamPos, { x: -2.2, y: -0.4, z: baseZ - 0.6, duration: 1.4, ease: "power2.out" });
      gsap.to(sceneRefs.current.targetCamLook, { x: 0.2, y: 0.3, z: 0, duration: 1.4 });
    }
  };

  if (!webglSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#050505] p-6 text-center">
        <div className="forge-glass-card p-8 rounded-2xl max-w-md border border-[#FFD700]/30">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700]">
            <Sparkles size={32} />
          </div>
          <h3 className="text-xl font-bold font-heading text-white mb-2">Forge Numérique LionForge</h3>
          <p className="text-sm text-[#8892B0]">
            Visualisation 3D optimisée pour navigateurs compatibles WebGL.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-auto">
      {/* 3D Canvas Mount - Isolated Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Ergonomic Bottom Control Dock (Three.js Directive: Zero Viewport Occlusion) */}
      <div 
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-2xl px-4 transition-all duration-500 ease-out ${
          isDockCollapsed ? "translate-y-[calc(100%-2.25rem)] opacity-85 hover:opacity-100" : "translate-y-0 opacity-100"
        }`}
      >
        {/* Collapse / Expand Toggle Button */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-t-lg bg-[#101114]/90 border-t border-x border-[#FFD700]/25 text-[#FFD700] text-xs font-medium hover:bg-[#15171C] transition-colors shadow-lg cursor-pointer"
            aria-label={isDockCollapsed ? "Afficher les contrôles 3D" : "Masquer les contrôles 3D"}
          >
            {isDockCollapsed ? (
              <>
                <ChevronUp size={14} />
                <span>Contrôles 3D</span>
              </>
            ) : (
              <>
                <ChevronDown size={14} />
                <span>Mode Cinéma</span>
              </>
            )}
          </button>
        </div>

        {/* Dock Container */}
        <div className="forge-glass rounded-xl p-3 border border-[#FFD700]/20 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Finitions Métalliques */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#8892B0] font-medium hidden sm:inline">Métal :</span>
              <div className="flex bg-[#050505]/70 p-0.5 rounded-lg border border-white/5">
                {[
                  { id: "imperial-gold", label: "Or Impérial", color: "#FFD700" },
                  { id: "damascus-steel", label: "Acier Damas", color: "#8892B0" },
                  { id: "molten-fusion", label: "Fusion", color: "#FF4500" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleThemeChange(t.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      activeTheme === t.id
                        ? "bg-[#1C1F26] text-white font-semibold shadow border border-[#FFD700]/30"
                        : "text-[#8892B0] hover:text-white"
                    }`}
                  >
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: t.color }} 
                    />
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Presets Caméra */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#8892B0] font-medium hidden sm:inline">Angle :</span>
              <div className="flex bg-[#050505]/70 p-0.5 rounded-lg border border-white/5">
                {[
                  { id: "face", label: "Face" },
                  { id: "profile", label: "3/4" },
                  { id: "cinema", label: "Cinéma" },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePresetChange(p.id)}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      activePreset === p.id
                        ? "bg-[#FFD700] text-[#050505] font-semibold"
                        : "text-[#8892B0] hover:text-white"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles Utilitaires */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                title="Rotation automatique"
                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  autoRotate 
                    ? "bg-[#FFD700]/15 border-[#FFD700]/40 text-[#FFD700]" 
                    : "bg-[#050505]/60 border-white/10 text-[#8892B0] hover:text-white"
                }`}
              >
                <RotateCw size={15} />
              </button>

              <button
                onClick={handleWireframeToggle}
                title="Vue Filaire / Structure"
                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  wireframe 
                    ? "bg-[#FF4500]/20 border-[#FF4500]/50 text-[#FF4500]" 
                    : "bg-[#050505]/60 border-white/10 text-[#8892B0] hover:text-white"
                }`}
              >
                <Layers size={15} />
              </button>

              <button
                onClick={() => setSparksIntensity(sparksIntensity > 0.5 ? 0.2 : 1.5)}
                title="Intensité des étincelles"
                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  sparksIntensity > 1.0 
                    ? "bg-[#FF4500]/20 border-[#FF4500]/50 text-[#FFD700]" 
                    : "bg-[#050505]/60 border-white/10 text-[#8892B0] hover:text-white"
                }`}
              >
                <Sparkles size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
