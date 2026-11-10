"use client";

import { useState, useEffect } from "react";

export function usePerformance() {
  const [perfInfo, setPerfInfo] = useState({
    isMobile: false,
    isLowPower: false,
    particleCount: 1800,
    pixelRatio: 1.5,
    supportsWebGL: true,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobileDevice = 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    // Check hardware concurrency & device memory
    const cores = navigator.hardwareConcurrency || 4;
    const memory = navigator.deviceMemory || 4;

    // Check software GL / GPU renderer
    let isSoftwareGl = false;
    let webglOk = true;
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        webglOk = false;
      } else {
        const ext = gl.getExtension("WEBGL_debug_renderer_info");
        const renderer = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
        isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(String(renderer));
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      }
    } catch {
      webglOk = false;
    }

    const lowPower = isSoftwareGl || cores <= 2 || memory <= 2;
    const pCount = lowPower ? 400 : isMobileDevice ? 700 : 1800;
    const dpr = lowPower ? 1 : Math.min(window.devicePixelRatio || 1, 2);

    setPerfInfo({
      isMobile: isMobileDevice,
      isLowPower: lowPower,
      particleCount: pCount,
      pixelRatio: dpr,
      supportsWebGL: webglOk,
    });
  }, []);

  return perfInfo;
}
