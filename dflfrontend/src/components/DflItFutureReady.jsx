import React, { useEffect, useRef, useState } from 'react';

/**
 * DflItFutureReady Component (Light Professional + Performance Edition)
 *
 * - Particles stream from the CTA button into a light silver laptop on the right.
 * - Once the laptop is formed it is completely STILL (no breathing / idle motion).
 * - Points only move when the cursor hovers over them or the user clicks.
 * - Performance: no GPU-readback canvas, batched fillRect drawing, and the render loop
 *   goes fully idle (zero CPU) whenever nothing is moving.
 */
const DflItFutureReady = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const laptopSlotRef = useRef(null);
  const originRef = useRef(null);
  const reassembleRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const laptopSlot = laptopSlotRef.current;
    if (!canvas || !container || !laptopSlot) return;

    // NOTE: no `willReadFrequently` — that forces slow software rendering and causes lag.
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let isMounted = true;
    let particles = [];
    let sampledPoints = [];
    let streamStartTime = null;
    let hasTriggered = false;
    const mouse = { x: null, y: null, r: 90, active: false };

    // Render-loop idle control
    let forceRender = true;
    let mouseMoved = false;
    let lastMoving = true;
    let lastPending = true;

    // Cached container rect (avoids layout reads on every mouse move)
    let rectCache = container.getBoundingClientRect();

    // 1. Light, professional laptop point cloud
    const generateLaptopPoints = () => {
      const pts = [];
      const yOffset = 0.055;
      const add = (nx, ny, color, isAccent = false) => {
        pts.push({ nx, ny: ny + yOffset, color, isAccent });
      };

      const C = {
        lidOuter: 'rgb(148, 163, 184)',
        lidInner: 'rgb(203, 213, 225)',
        bezel: 'rgb(226, 232, 240)',
        bezelEdge: 'rgb(175, 188, 206)',
        hinge: 'rgb(160, 174, 192)',
        titleBar: 'rgb(203, 213, 225)',
        keyTop: 'rgb(250, 251, 253)',
        keyShadow: 'rgb(176, 188, 205)',
        trackFill: 'rgb(243, 246, 250)',
        trackEdge: 'rgb(160, 174, 192)',
        orange: 'rgb(255, 122, 26)',
        orangeSoft: 'rgb(255, 170, 90)',
        orangeLight: 'rgb(253, 200, 140)',
      };

      const screenCol = (y) => {
        const t = Math.min(1, Math.max(0, (y + 0.41) / 0.34));
        const r = Math.round(214 + 28 * t);
        const g = Math.round(230 + 16 * t);
        const b = Math.round(253 - 2 * t);
        return `rgb(${r}, ${g}, ${b})`;
      };

      const deckCol = (t) => {
        const r = Math.round(232 - 22 * t);
        const g = Math.round(237 - 20 * t);
        const b = Math.round(244 - 16 * t);
        return `rgb(${r}, ${g}, ${b})`;
      };

      const step = 0.0055;

      // --- A. SCREEN LID & BEZEL ---
      for (let l = 0; l < 3; l++) {
        const off = l * 0.005;
        for (let x = -0.41 - off; x <= 0.41 + off; x += step) {
          add(x, -0.45 - off, l === 0 ? C.lidOuter : C.lidInner);
        }
      }
      for (let y = -0.45; y <= -0.04; y += step) {
        const t = (y - -0.45) / 0.41;
        const w = 0.41 - t * 0.02;
        for (let l = 0; l < 2; l++) {
          const off = l * 0.005;
          add(-w - off, y, l === 0 ? C.lidOuter : C.lidInner);
          add(w + off, y, l === 0 ? C.lidOuter : C.lidInner);
        }
      }
      for (let y = -0.445; y <= -0.045; y += step * 1.3) {
        const t = (y + 0.45) / 0.41;
        const w = 0.405 - t * 0.02;
        for (let x = -w; x <= w; x += step * 1.3) {
          const inScreen = y >= -0.42 && y <= -0.07 && Math.abs(x) <= 0.375;
          if (!inScreen) add(x, y, C.bezel);
        }
      }
      for (let x = -0.39; x <= 0.39; x += step) {
        add(x, -0.04, C.bezelEdge);
        add(x, -0.05, C.lidInner);
      }
      add(0, -0.435, 'rgb(34, 197, 94)', true);

      // --- B. INNER SCREEN ---
      for (let y = -0.41; y <= -0.07; y += step * 1.1) {
        for (let x = -0.37; x <= 0.37; x += step * 1.1) {
          add(x, y, screenCol(y));
        }
      }

      add(-0.34, -0.385, 'rgb(248, 113, 113)', true);
      add(-0.32, -0.385, 'rgb(251, 191, 36)', true);
      add(-0.30, -0.385, 'rgb(74, 222, 128)', true);

      for (let x = -0.26; x <= 0.34; x += step) {
        add(x, -0.385, C.titleBar);
      }

      const codeLines = [
        {
          y: -0.33,
          segs: [
            [-0.34, -0.27, 'rgb(255, 122, 26)'],
            [-0.25, -0.16, 'rgb(14, 165, 233)'],
            [-0.14, -0.08, 'rgb(100, 116, 139)'],
          ],
        },
        {
          y: -0.29,
          segs: [
            [-0.34, -0.23, 'rgb(37, 99, 235)'],
            [-0.21, -0.12, 'rgb(255, 122, 26)'],
            [-0.10, -0.03, 'rgb(16, 185, 129)'],
          ],
        },
        { y: -0.25, segs: [[-0.34, -0.06, 'rgb(16, 185, 129)']] },
        {
          y: -0.21,
          segs: [
            [-0.34, -0.22, 'rgb(147, 51, 234)'],
            [-0.20, -0.10, 'rgb(255, 122, 26)'],
            [-0.08, -0.03, 'rgb(14, 165, 233)'],
          ],
        },
        {
          y: -0.17,
          segs: [
            [-0.34, -0.18, 'rgb(14, 165, 233)'],
            [-0.16, -0.06, 'rgb(255, 122, 26)'],
          ],
        },
        { y: -0.13, segs: [[-0.34, -0.29, 'rgb(100, 116, 139)']] },
      ];

      codeLines.forEach((line) => {
        line.segs.forEach(([x1, x2, col]) => {
          for (let x = x1; x <= x2; x += step * 0.9) {
            add(x, line.y, col);
            add(x, line.y + 0.004, col);
          }
        });
      });

      const bars = [
        { x: 0.06, h: 0.10, col: 'rgb(96, 165, 250)' },
        { x: 0.14, h: 0.15, col: 'rgb(56, 189, 248)' },
        { x: 0.22, h: 0.19, col: 'rgb(255, 150, 60)' },
        { x: 0.30, h: 0.24, col: 'rgb(255, 122, 26)' },
      ];

      bars.forEach((b) => {
        for (let by = -0.11; by >= -0.11 - b.h; by -= step) {
          for (let bx = b.x - 0.016; bx <= b.x + 0.016; bx += step * 0.8) {
            add(bx, by, b.col);
          }
        }
        add(b.x, -0.11 - b.h - 0.008, C.orangeSoft, true);
      });

      for (let t = 0; t <= 1; t += 0.012) {
        const wx = 0.01 + t * 0.33;
        const wy = -0.14 - Math.sin(t * Math.PI * 0.75) * 0.17;
        add(wx, wy, 'rgb(37, 99, 235)');
        add(wx, wy - 0.005, 'rgb(96, 165, 250)', true);
      }

      // --- C. HINGE ---
      for (let y = -0.035; y <= -0.01; y += step * 0.8) {
        for (let x = -0.32; x <= 0.32; x += step) {
          add(x, y, C.hinge);
        }
      }

      // --- D. BASE & KEYBOARD DECK ---
      for (let y = 0.005; y <= 0.33; y += step * 1.15) {
        const t = (y - 0.005) / 0.325;
        const w = 0.41 + t * 0.08;
        for (let x = -w; x <= w; x += step * 1.15) {
          const inKb = y >= 0.035 && y <= 0.20 && Math.abs(x) <= 0.35 + t * 0.03;
          const inTp = y >= 0.22 && y <= 0.30 && Math.abs(x) <= 0.13;
          if (!inKb && !inTp) {
            add(x, y, deckCol(t));
          }
        }
      }

      for (let x = -0.49; x <= 0.49; x += step) {
        if (x > -0.06 && x < 0.06) {
          add(x, 0.345, C.orange, true);
          add(x, 0.35, C.orangeSoft, true);
        } else {
          add(x, 0.335, C.lidOuter);
          add(x, 0.342, C.bezelEdge);
        }
      }
      for (let y = 0.005; y <= 0.335; y += step) {
        const t = (y - 0.005) / 0.33;
        const w = 0.41 + t * 0.08;
        add(-w, y, C.lidOuter);
        add(w, y, C.lidOuter);
      }

      const rows = [
        { y: 0.055, count: 14, fKeys: true },
        { y: 0.085, count: 14 },
        { y: 0.115, count: 13 },
        { y: 0.145, count: 13 },
        { y: 0.175, count: 12 },
      ];

      rows.forEach((row, rIdx) => {
        const t = (row.y - 0.035) / 0.165;
        const rowWidth = 0.35 + t * 0.035;
        const keyStep = (rowWidth * 2) / row.count;

        for (let k = 0; k < row.count; k++) {
          const kx = -rowWidth + k * keyStep + keyStep / 2;
          const isSpace = rIdx === 4 && Math.abs(kx) < 0.11;
          const isAccent =
            (rIdx === 0 && (k === 0 || k === row.count - 1)) ||
            (rIdx === 3 && k === row.count - 1);

          if (isSpace) {
            for (let sx = -0.10; sx <= 0.10; sx += step * 0.8) {
              add(sx, row.y, C.orangeSoft, true);
              add(sx, row.y + 0.007, C.orangeLight, true);
            }
          } else {
            const topCol = isAccent ? C.orange : row.fKeys ? C.orangeLight : C.keyTop;
            const botCol = isAccent ? C.orangeSoft : row.fKeys ? C.orangeSoft : C.keyShadow;
            add(kx - 0.005, row.y, topCol, isAccent);
            add(kx + 0.005, row.y, topCol, isAccent);
            add(kx - 0.005, row.y + 0.007, botCol, isAccent);
            add(kx + 0.005, row.y + 0.007, botCol, isAccent);
          }
        }
      });

      for (let ty = 0.22; ty <= 0.30; ty += step * 1.05) {
        for (let tx = -0.13; tx <= 0.13; tx += step * 1.05) {
          add(tx, ty, C.trackFill);
        }
      }
      for (let x = -0.13; x <= 0.13; x += step) {
        add(x, 0.22, C.trackEdge);
        add(x, 0.30, C.trackEdge);
      }
      for (let y = 0.22; y <= 0.30; y += step) {
        add(-0.13, y, C.trackEdge);
        add(0.13, y, C.trackEdge);
      }

      sampledPoints = pts;
    };

    const getEmissionOrigin = () => {
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      if (originRef.current && canvas) {
        const btnRect = originRef.current.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        return {
          x: (btnRect.left + btnRect.width * 0.5 - canvasRect.left) * DPR,
          y: (btnRect.top + btnRect.height * 0.5 - canvasRect.top) * DPR,
        };
      }
      return { x: canvas.width * 0.22, y: canvas.height * 0.56 };
    };

    // 2. Initialize Particles
    const initParticles = (preserveState = false) => {
      if (!canvas || !container || !laptopSlot || sampledPoints.length === 0) return;

      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      const containerRect = container.getBoundingClientRect();
      rectCache = containerRect;
      const slotRect = laptopSlot.getBoundingClientRect();

      canvas.width = Math.round(containerRect.width * DPR);
      canvas.height = Math.round(containerRect.height * DPR);

      const slotCenterX = (slotRect.left + slotRect.width / 2 - containerRect.left) * DPR;
      const slotCenterY = (slotRect.top + slotRect.height / 2 - containerRect.top) * DPR;

      const isMobile = containerRect.width < 768;
      const isTablet = containerRect.width >= 768 && containerRect.width < 1024;
      let maxDim;

      if (isMobile) {
        maxDim = Math.min(containerRect.width * 0.92, 460 * DPR);
      } else if (isTablet) {
        maxDim = Math.min(containerRect.width * 0.62, 620 * DPR);
      } else {
        maxDim = Math.min(containerRect.width * 0.54, 880 * DPR);
      }

      const scaleMultiplier = isMobile ? 0.98 : 1.15;
      const effectiveDim = maxDim * scaleMultiplier;
      const particleRadius = (isMobile ? 1.55 : 1.85) * DPR;

      forceRender = true;

      if (preserveState && particles.length > 0) {
        particles.forEach((p, idx) => {
          const pt = sampledPoints[idx];
          if (pt) {
            p.bx = slotCenterX + pt.nx * effectiveDim;
            p.by = slotCenterY + pt.ny * effectiveDim;
            p.radius = particleRadius;
            if (p.done) {
              p.x = p.bx;
              p.y = p.by;
              p.vx = 0;
              p.vy = 0;
            }
          }
        });
        return;
      }

      const origin = getEmissionOrigin();

      particles = sampledPoints.map((pt) => {
        const bx = slotCenterX + pt.nx * effectiveDim;
        const by = slotCenterY + pt.ny * effectiveDim;

        const spawnAngle = Math.random() * Math.PI * 2;
        const spawnDist = Math.random() * (6 * DPR);
        const sx = origin.x + Math.cos(spawnAngle) * spawnDist;
        const sy = origin.y + Math.sin(spawnAngle) * spawnDist;

        return {
          bx,
          by,
          sx,
          sy,
          x: sx,
          y: sy,
          vx: 0,
          vy: 0,
          color: pt.color,
          radius: particleRadius,
          delay: 50 + Math.random() * 800,
          dur: 1150 + Math.random() * 450,
          arcY: (Math.random() - 0.5) * (70 * DPR),
          phase: Math.random() * Math.PI * 2,
          freeUntil: 0,
          done: false,
        };
      });
    };

    generateLaptopPoints();
    initParticles();
    setIsReady(true);

    // 3. Trigger on viewport entry
    let observer = null;

    const triggerAssembly = () => {
      if (!hasTriggered) {
        hasTriggered = true;
        streamStartTime = performance.now();
        forceRender = true;
      }
    };

    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
              triggerAssembly();
            }
          });
        },
        { threshold: [0.2, 0.35, 0.5] }
      );
      observer.observe(container);
    }

    const handleScroll = () => {
      rectCache = container.getBoundingClientRect();
      if (hasTriggered) return;
      const windowHeight = window.innerHeight;
      if (rectCache.top <= windowHeight * 0.65 && rectCache.bottom >= windowHeight * 0.25) {
        triggerAssembly();
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 4. Animation loop (goes fully idle when nothing is moving)
    const ORB_COLOR = 'rgba(255, 122, 26, 0.55)';
    const FLY_COLOR = 'rgba(255, 140, 50, 0.8)';

    const animate = (timestamp) => {
      if (!isMounted) return;
      animId = requestAnimationFrame(animate);

      const DPR = Math.min(window.devicePixelRatio || 1, 2);

      // Waiting for trigger: clean canvas, no external bubble/orb
      if (!hasTriggered) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      // IDLE: laptop fully formed, nothing moving, cursor not moving -> skip all work
      if (!lastPending && !lastMoving && !mouseMoved && !forceRender) return;
      mouseMoved = false;
      forceRender = false;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const elapsed = timestamp - (streamStartTime || timestamp);
      const mouseR = mouse.r * DPR;
      const mouseR2 = mouseR * mouseR;
      const hasMouse = mouse.active && mouse.x !== null;

      let moving = false;
      let pending = false;
      let lastColor = null;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let drawColor = p.color;

        if (!p.done) {
          pending = true;
          if (elapsed < p.delay) {
            // Particle is still inside the button waiting to launch — do not draw any external bubble
            continue;
          } else if (elapsed - p.delay >= p.dur) {
            p.done = true;
            p.x = p.bx;
            p.y = p.by;
          } else {
            const t = (elapsed - p.delay) / p.dur;
            const ease = 1 - Math.pow(1 - t, 3);
            p.x = p.sx + (p.bx - p.sx) * ease;
            p.y = p.sy + (p.by - p.sy) * ease + Math.sin(t * Math.PI) * p.arcY;
            drawColor = t < 0.8 ? FLY_COLOR : p.color;
          }
        } else {
          // Target = home position (STILL, no breathing). Only offset while cursor is on top.
          let tx = p.bx;
          let ty = p.by;

          if (hasMouse) {
            const dx = p.bx - mouse.x;
            const dy = p.by - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < mouseR2 && d2 > 0.01) {
              const dist = Math.sqrt(d2);
              const push = (1 - dist / mouseR) * (32 * DPR);
              tx += (dx / dist) * push;
              ty += (dy / dist) * push;
            }
          }

          // Fast path: particle at rest and target is its home -> nothing to compute
          if (p.vx === 0 && p.vy === 0 && p.x === tx && p.y === ty) {
            // still, just draw
          } else {
            // Organic free flight & graceful magnetic reassembly (natural far dispersion)
            const free = timestamp < p.freeUntil;
            const damp = free ? 0.938 : 0.82;
            const spring = free ? 0.024 : 0.13;
            p.vx = p.vx * damp + (tx - p.x) * spring;
            p.vy = p.vy * damp + (ty - p.y) * spring;
            p.x += p.vx;
            p.y += p.vy;

            if (
              Math.abs(p.vx) < 0.05 &&
              Math.abs(p.vy) < 0.05 &&
              Math.abs(p.x - tx) < 0.1 &&
              Math.abs(p.y - ty) < 0.1
            ) {
              p.x = tx;
              p.y = ty;
              p.vx = 0;
              p.vy = 0;
            } else {
              moving = true;
            }
          }
        }

        // Batched draw: only change fillStyle when the color actually changes
        if (drawColor !== lastColor) {
          ctx.fillStyle = drawColor;
          lastColor = drawColor;
        }
        const s = p.radius * 2;
        ctx.fillRect(p.x - p.radius, p.y - p.radius, s, s);
      }

      lastMoving = moving;
      lastPending = pending;
    };

    animId = requestAnimationFrame(animate);

    // 5. Mouse & touch
    const updateMousePos = (clientX, clientY) => {
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      mouse.x = (clientX - rectCache.left) * DPR;
      mouse.y = (clientY - rectCache.top) * DPR;
      mouse.active = true;
      mouseMoved = true;
    };

    const handleMouseMove = (e) => updateMousePos(e.clientX, e.clientY);

    const releaseMouse = () => {
      mouse.active = false;
      mouse.x = null;
      mouse.y = null;
      forceRender = true; // let displaced points spring home
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updateMousePos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleClick = (e) => {
      if (!hasTriggered) {
        triggerAssembly();
        return;
      }
      if (!e.clientX && !e.clientY) return;

      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      const clickX = (e.clientX - rectCache.left) * DPR;
      const clickY = (e.clientY - rectCache.top) * DPR;
      const isMobile = (rectCache.width || container.clientWidth || 1000) < 768;
      // Natural expansive blast zone (far reach, but distant edges stay unaffected)
      const blastRadius = (isMobile ? 110 : 155) * DPR;
      const now = performance.now();
      const blastR2 = blastRadius * blastRadius;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        let dx = p.x - clickX;
        let dy = p.y - clickY;
        const d2 = dx * dx + dy * dy;
        if (d2 > blastR2) continue;

        let dist = Math.sqrt(d2);
        if (dist < 1) {
          dx = (Math.random() - 0.5) * 12;
          dy = (Math.random() - 0.5) * 12;
          dist = Math.sqrt(dx * dx + dy * dy);
        }

        p.done = true;

        // 1. Smooth organic decay tapering naturally to 0 at perimeter (no sharp circular edge!)
        const norm = dist / blastRadius;
        const falloff = (1 - norm) * (1 - norm * 0.7);

        // 2. Randomized velocity factor: some particles fly very far, others medium/short (NEVER leaves an empty crater!)
        const speedVar = 0.45 + Math.random() * 0.85;

        // 3. Organic angular dispersion (creates dynamic splash turbulence, not a rigid circle)
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.75;

        // 4. Strong impulse for far reach: flies out 80px - 180px across the canvas!
        const impulse = falloff * speedVar * (52 + Math.random() * 24) * DPR;

        p.vx += Math.cos(angle) * impulse;
        p.vy += Math.sin(angle) * impulse;
        p.freeUntil = now + 320 + Math.random() * 240;
      }

      lastMoving = true;
      forceRender = true;
    };

    // 6. Reassembly trigger (callable on button click to rebuild the laptop from scratch)
    const reassembleLaptop = () => {
      if (!isMounted || !particles || particles.length === 0) return;
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      rectCache = container.getBoundingClientRect();
      const origin = getEmissionOrigin();
      const now = performance.now();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const spawnAngle = Math.random() * Math.PI * 2;
        const spawnDist = Math.random() * (6 * DPR);
        p.sx = origin.x + Math.cos(spawnAngle) * spawnDist;
        p.sy = origin.y + Math.sin(spawnAngle) * spawnDist;
        p.x = p.sx;
        p.y = p.sy;
        p.vx = 0;
        p.vy = 0;
        p.freeUntil = 0;
        p.done = false;
        p.delay = 50 + Math.random() * 800;
        p.dur = 1150 + Math.random() * 450;
        p.arcY = (Math.random() - 0.5) * (70 * DPR);
      }

      streamStartTime = now;
      hasTriggered = true;
      lastPending = true;
      forceRender = true;
    };

    reassembleRef.current = reassembleLaptop;

    const btn = originRef.current;
    const handleBtnClick = (e) => {
      e.stopPropagation();
      reassembleLaptop();
    };
    if (btn) {
      btn.addEventListener('click', handleBtnClick);
    }

    // 7. Resize
    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!isMounted) return;
        initParticles(true);
      }, 150);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', releaseMouse, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', releaseMouse, { passive: true });
    container.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      isMounted = false;
      if (animId) cancelAnimationFrame(animId);
      if (observer) observer.disconnect();
      clearTimeout(resizeTimer);
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', releaseMouse);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', releaseMouse);
      container.removeEventListener('click', handleClick);
      if (btn) btn.removeEventListener('click', handleBtnClick);
      window.removeEventListener('resize', handleResize);
      reassembleRef.current = null;
    };
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="DFL IT Future-Ready Showcase"
      className="relative z-10 w-full flex items-center justify-center overflow-hidden bg-white select-none pt-0 sm:pt-1 lg:pt-1 pb-3 sm:pb-4 lg:pb-5 border-t border-slate-100 cursor-pointer"
    >
      {/* Canvas layer */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-auto cursor-pointer"
      />

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-10">
        {/* Left column */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-auto z-10 py-2 sm:py-4">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#E66E19] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E66E19] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E66E19]" />
            </span>
            <span>Enterprise Digital Systems</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-black tracking-tight text-slate-900 leading-[1.16] mb-3">
            DFL IT Gets Your Business{" "}
            <span className="bg-gradient-to-r from-[#E66E19] to-orange-500 bg-clip-text text-transparent">
              Future-Ready
            </span>
          </h2>

          {/* Subheading / Description */}
          <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
            Empowering modern enterprises with scalable IT infrastructure, custom engineering, and mission-critical cloud solutions.
          </p>

          {/* Value Highlights */}
          <div className="space-y-2.5 mb-7 w-full max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                Custom Enterprise Software & Web Platforms
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                Cloud Architecture & Scalable Infrastructure
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                Smart Process Automation & Telemetry
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              ref={originRef}
              title="Click to rebuild and reassemble the 3D Laptop"
              aria-label="Rebuild 3D Laptop"
              onClick={(e) => {
                e.stopPropagation();
                if (reassembleRef.current) {
                  reassembleRef.current();
                }
              }}
              className="px-8 py-3.5 rounded-full bg-[#E66E19] hover:bg-[#d05f12] text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer select-none"
            >
              <span>Rebuild 3D Laptop</span>
            </button>
          </div>
        </div>

        {/* Right column: laptop slot */}
        <div
          ref={laptopSlotRef}
          className="lg:col-span-7 xl:col-span-7 h-[260px] min-[360px]:h-[285px] min-[400px]:h-[320px] min-[480px]:h-[360px] sm:h-[400px] md:h-[470px] lg:h-[640px] xl:h-[680px] w-full flex items-center justify-center pointer-events-none"
        />
      </div>
    </section>
  );
};

export default DflItFutureReady;