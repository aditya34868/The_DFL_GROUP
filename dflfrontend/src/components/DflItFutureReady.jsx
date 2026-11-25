import React, { useEffect, useRef, useState } from 'react';

/**
 * DflItFutureReady Component
 * 
 * GeekyAnts-Style Interactive High-Tech Particle Finale:
 * - Left column: Editorial headline & CTA button ("Explore DFL IT")
 * - Stream Origin: Particles spawn at the right tip of the CTA button as a pulsating energy orb.
 * - Scroll-Triggered Beam: As soon as the user scrolls into view, a continuous stream of particles
 *   shoots horizontally from the button across the canvas into the right-side laptop model!
 * - Organic Breathing: Once assembled, particles breathe with subtle living rhythm.
 * - Massive Desktop Scale: Fills the right side majestically (~1,000px across).
 * - Full-Canvas Click Explosion: On click, all particles violently blast outward in a 360° radial
 *   halo (scattering 250px-450px across the canvas), decelerate, and gracefully spring back into shape!
 * - Interactive Mouse Repulsion: Smooth cursor deflection with instant spring return.
 */
const DflItFutureReady = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const laptopSlotRef = useRef(null);
  const originRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const laptopSlot = laptopSlotRef.current;
    if (!canvas || !container || !laptopSlot) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animId = null;
    let isMounted = true;
    let particles = [];
    let sampledPoints = [];
    let streamStartTime = null;
    let hasTriggered = false;
    const mouse = { x: null, y: null, r: 42, active: false };

    // 1. Generate High-Density Mathematical Vector Points for a Pure Jet Black / Obsidian Tech Laptop (~11,000+ points)
    const generateLaptopPoints = () => {
      const pts = [];
      const yOffset = 0.055; // Re-centers the laptop vertically to perfectly align with the left headline
      const add = (nx, ny, color, isAccent = false) => {
        pts.push({ nx, ny: ny + yOffset, color, isAccent });
      };

      const step = 0.0055; // High-density grid step for seamless, gap-free, solid surfaces

      // --- A. SCREEN LID & JET BLACK TITANIUM BEZEL ---
      for (let l = 0; l < 3; l++) {
        const off = l * 0.005;
        for (let x = -0.41 - off; x <= 0.41 + off; x += step) {
          add(x, -0.45 - off, l === 0 ? 'rgb(18, 24, 38)' : 'rgb(8, 11, 18)');
        }
      }
      for (let y = -0.45; y <= -0.04; y += step) {
        const t = (y - (-0.45)) / 0.41;
        const w = 0.41 - t * 0.02;
        for (let l = 0; l < 2; l++) {
          const off = l * 0.005;
          add(-w - off, y, l === 0 ? 'rgb(18, 24, 38)' : 'rgb(8, 11, 18)');
          add(w + off, y, l === 0 ? 'rgb(18, 24, 38)' : 'rgb(8, 11, 18)');
        }
      }
      // Bottom screen bezel / chin (Jet Black / Obsidian)
      for (let x = -0.39; x <= 0.39; x += step) {
        add(x, -0.04, 'rgb(8, 11, 18)');
        add(x, -0.05, 'rgb(18, 24, 38)');
      }
      // Web camera status LED
      add(0, -0.43, 'rgb(34, 197, 94)', true);

      // --- B. INNER SCREEN DISPLAY (Dense Gap-Free Pitch Black OLED Screen) ---
      // Background display matrix (dense pure black OLED fill)
      for (let y = -0.41; y <= -0.07; y += step * 1.1) {
        for (let x = -0.37; x <= 0.37; x += step * 1.1) {
          add(x, y, 'rgb(3, 5, 8)'); // True Pitch-Black OLED Screen
        }
      }

      // Mac-style window controls
      add(-0.34, -0.385, 'rgb(239, 68, 68)', true); // Red
      add(-0.32, -0.385, 'rgb(245, 158, 11)', true); // Amber
      add(-0.30, -0.385, 'rgb(34, 197, 94)', true); // Green

      // Window title header bar
      for (let x = -0.26; x <= 0.34; x += step) {
        add(x, -0.385, 'rgb(18, 24, 38)');
      }

      // Code Lines on Screen Left (High-contrast neon syntax lines)
      const codeLines = [
        {
          y: -0.33,
          segs: [
            [-0.34, -0.27, 'rgb(255, 122, 26)'], // Brand Orange keyword
            [-0.25, -0.16, 'rgb(0, 229, 255)'], // Electric Cyan identifier
            [-0.14, -0.08, 'rgb(148, 163, 184)'], // Slate punctuation
          ],
        },
        {
          y: -0.29,
          segs: [
            [-0.34, -0.23, 'rgb(59, 130, 246)'], // Royal Tech Blue const
            [-0.21, -0.12, 'rgb(255, 122, 26)'], // Brand Orange variable
            [-0.10, -0.03, 'rgb(52, 211, 153)'], // Neon Green string
          ],
        },
        {
          y: -0.25,
          segs: [
            [-0.34, -0.06, 'rgb(52, 211, 153)'], // Neon Green comment: // Future-Ready
          ],
        },
        {
          y: -0.21,
          segs: [
            [-0.34, -0.22, 'rgb(168, 85, 247)'], // Purple function
            [-0.20, -0.10, 'rgb(255, 122, 26)'], // Brand Orange param
            [-0.08, -0.03, 'rgb(0, 229, 255)'], // Cyan call
          ],
        },
        {
          y: -0.17,
          segs: [
            [-0.34, -0.18, 'rgb(0, 229, 255)'], // Cyan return
            [-0.16, -0.06, 'rgb(255, 122, 26)'], // Brand Orange object
          ],
        },
        {
          y: -0.13,
          segs: [
            [-0.34, -0.29, 'rgb(148, 163, 184)'], // Closing brace
          ],
        },
      ];

      codeLines.forEach((line) => {
        line.segs.forEach(([x1, x2, col]) => {
          for (let x = x1; x <= x2; x += step * 0.9) {
            add(x, line.y, col);
            add(x, line.y + 0.004, col); // double thickness
          }
        });
      });

      // Analytics Chart on Screen Right (Glowing Neon Bar Columns)
      const bars = [
        { x: 0.06, h: 0.10, col: 'rgb(59, 130, 246)' },
        { x: 0.14, h: 0.15, col: 'rgb(0, 229, 255)' },
        { x: 0.22, h: 0.19, col: 'rgb(255, 122, 26)' },
        { x: 0.30, h: 0.24, col: 'rgb(255, 90, 0)' },
      ];

      bars.forEach((b) => {
        for (let by = -0.11; by >= -0.11 - b.h; by -= step) {
          for (let bx = b.x - 0.016; bx <= b.x + 0.016; bx += step * 0.8) {
            add(bx, by, b.col);
          }
        }
        // Glowing top node
        add(b.x, -0.11 - b.h - 0.008, 'rgb(255, 205, 90)', true);
      });

      // Smooth rising spline trend curve
      for (let t = 0; t <= 1; t += 0.012) {
        const wx = 0.01 + t * 0.33;
        const wy = -0.14 - Math.sin(t * Math.PI * 0.75) * 0.17;
        add(wx, wy, 'rgb(255, 122, 26)');
        add(wx, wy - 0.005, 'rgb(255, 190, 80)', true);
      }

      // --- C. HINGE BAR (Solid Jet Black titanium hinge) ---
      for (let y = -0.035; y <= -0.01; y += step * 0.8) {
        for (let x = -0.32; x <= 0.32; x += step) {
          add(x, y, 'rgb(8, 11, 18)');
        }
      }

      // --- D. BASE & KEYBOARD DECK (Jet Black / Pure Obsidian Aluminum Body) ---
      // Matte jet black unibody chassis surface fill (outside keyboard & trackpad)
      for (let y = 0.005; y <= 0.33; y += step * 1.15) {
        const t = (y - 0.005) / 0.325;
        const w = 0.41 + t * 0.08;
        for (let x = -w; x <= w; x += step * 1.15) {
          const inKb = y >= 0.035 && y <= 0.20 && Math.abs(x) <= 0.35 + t * 0.03;
          const inTp = y >= 0.22 && y <= 0.30 && Math.abs(x) <= 0.13;
          if (!inKb && !inTp) {
            add(x, y, 'rgb(10, 14, 22)'); // Deep Jet Black unibody deck
          }
        }
      }

      // Base edges & front lip (Deep Obsidian contour)
      for (let x = -0.49; x <= 0.49; x += step) {
        if (x > -0.06 && x < 0.06) {
          add(x, 0.345, 'rgb(255, 122, 26)', true); // Brand Orange thumb notch
          add(x, 0.35, 'rgb(255, 150, 50)', true);
        } else {
          add(x, 0.335, 'rgb(18, 24, 38)');
          add(x, 0.342, 'rgb(8, 11, 18)');
        }
      }
      for (let y = 0.005; y <= 0.335; y += step) {
        const t = (y - 0.005) / 0.33;
        const w = 0.41 + t * 0.08;
        add(-w, y, 'rgb(18, 24, 38)');
        add(w, y, 'rgb(18, 24, 38)');
      }

      // Keyboard Rows with Solid Keycaps (Obsidian keycaps with Brand Orange Spacebar & Accents)
      const rows = [
        { y: 0.055, count: 14, color: 'rgb(255, 122, 26)' }, // F-keys in Brand Orange
        { y: 0.085, count: 14, color: 'rgb(6, 9, 15)' },
        { y: 0.115, count: 13, color: 'rgb(6, 9, 15)' },
        { y: 0.145, count: 13, color: 'rgb(6, 9, 15)' },
        { y: 0.175, count: 12, color: 'rgb(6, 9, 15)' },
      ];

      rows.forEach((row, rIdx) => {
        const t = (row.y - 0.035) / 0.165;
        const rowWidth = 0.35 + t * 0.035;
        const keyStep = (rowWidth * 2) / row.count;

        for (let k = 0; k < row.count; k++) {
          const kx = -rowWidth + k * keyStep + keyStep / 2;
          const isSpace = rIdx === 4 && Math.abs(kx) < 0.11;
          const isAccent = (rIdx === 0 && (k === 0 || k === row.count - 1)) || (rIdx === 3 && k === row.count - 1);
          const col = isSpace || isAccent ? 'rgb(255, 122, 26)' : (row.color === 'rgb(255, 122, 26)' ? 'rgb(255, 122, 26)' : 'rgb(6, 9, 15)');

          if (isSpace) {
            for (let sx = -0.10; sx <= 0.10; sx += step * 0.8) {
              add(sx, row.y, 'rgb(255, 122, 26)', true);
              add(sx, row.y + 0.007, 'rgb(255, 145, 45)', true);
            }
          } else {
            // Solid 2x2 key block with subtle bevel keycap highlight
            add(kx - 0.005, row.y, col, isAccent);
            add(kx + 0.005, row.y, col, isAccent);
            add(kx - 0.005, row.y + 0.007, isAccent ? 'rgb(255, 145, 45)' : 'rgb(18, 24, 38)', isAccent);
            add(kx + 0.005, row.y + 0.007, isAccent ? 'rgb(255, 145, 45)' : 'rgb(18, 24, 38)', isAccent);
          }
        }
      });

      // Trackpad Surface (Deep Obsidian Glass with Dark Perimeter)
      for (let ty = 0.22; ty <= 0.30; ty += step * 1.05) {
        for (let tx = -0.13; tx <= 0.13; tx += step * 1.05) {
          add(tx, ty, 'rgb(7, 10, 16)'); // Pure Obsidian Trackpad
        }
      }
      for (let x = -0.13; x <= 0.13; x += step) {
        add(x, 0.22, 'rgb(30, 41, 59)');
        add(x, 0.30, 'rgb(30, 41, 59)');
      }
      for (let y = 0.22; y <= 0.30; y += step) {
        add(-0.13, y, 'rgb(30, 41, 59)');
        add(0.13, y, 'rgb(30, 41, 59)');
      }

      sampledPoints = pts;
    };

    // Calculate emission origin point at the right edge of the button
    const getEmissionOrigin = () => {
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      if (originRef.current && canvas) {
        const btnRect = originRef.current.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        return {
          x: (btnRect.right - canvasRect.left + 16) * DPR,
          y: (btnRect.top + btnRect.height / 2 - canvasRect.top) * DPR,
        };
      }
      return {
        x: canvas.width * 0.22,
        y: canvas.height * 0.56,
      };
    };

    // 2. Initialize Particles
    const initParticles = (preserveState = false) => {
      if (!canvas || !container || !laptopSlot || sampledPoints.length === 0) return;

      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      const containerRect = container.getBoundingClientRect();
      const slotRect = laptopSlot.getBoundingClientRect();

      canvas.width = Math.round(containerRect.width * DPR);
      canvas.height = Math.round(containerRect.height * DPR);

      // Exact center coordinates inside the right slot
      const slotCenterX = (slotRect.left + slotRect.width / 2 - containerRect.left) * DPR;
      const slotCenterY = (slotRect.top + slotRect.height / 2 - containerRect.top) * DPR;

      // Prominent, large desktop scale (restores majestic, bold laptop presence)
      const isMobile = containerRect.width < 768;
      const isTablet = containerRect.width >= 768 && containerRect.width < 1024;
      let maxDim;

      if (isMobile) {
        maxDim = Math.min(containerRect.width * 0.92, 460 * DPR);
      } else if (isTablet) {
        maxDim = Math.min(containerRect.width * 0.62, 620 * DPR);
      } else {
        // Desktop: Big, bold, and prominent!
        maxDim = Math.min(containerRect.width * 0.54, 880 * DPR);
      }

      const scaleMultiplier = isMobile ? 0.98 : 1.15;
      const effectiveDim = maxDim * scaleMultiplier;
      const particleRadius = (isMobile ? 1.55 : 1.85) * DPR;

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
            }
          }
        });
        return;
      }

      const origin = getEmissionOrigin();

      // Initial state: particles start at the button origin as a pulsating cluster
      particles = sampledPoints.map((pt) => {
        const bx = slotCenterX + pt.nx * effectiveDim;
        const by = slotCenterY + pt.ny * effectiveDim;

        // Origin orb position at the right side of the CTA button
        const spawnAngle = Math.random() * Math.PI * 2;
        const spawnDist = Math.random() * (22 * DPR);
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
          // Continuous streaming emission from left to right
          delay: 150 + Math.random() * 850,
          dur: 1350 + Math.random() * 450,
          arcY: (Math.random() - 0.5) * (70 * DPR),
          phase: Math.random() * Math.PI * 2,
          done: false,
        };
      });
    };

    // Generate Points & Start
    generateLaptopPoints();
    initParticles();
    setIsReady(true);

    // 3. Viewport Intersection Observer & Scroll Check (Triggers ONLY when section is FULLY in view!)
    let observer = null;

    const triggerAssembly = () => {
      if (!hasTriggered) {
        hasTriggered = true;
        streamStartTime = performance.now();
      }
    };

    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Fires when the section is substantially in view
            if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
              triggerAssembly();
            }
          });
        },
        { threshold: [0.20, 0.35, 0.50] }
      );
      observer.observe(container);
    }

    // Secondary scroll check: triggers when user has scrolled so section enters viewport
    const checkFullyInView = () => {
      if (hasTriggered) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight * 0.65 && rect.bottom >= windowHeight * 0.25) {
        triggerAssembly();
      }
    };
    window.addEventListener('scroll', checkFullyInView, { passive: true });

    // 4. Butter-Smooth 60FPS Physics & Animation Loop
    const animate = (timestamp) => {
      if (!isMounted) return;
      animId = requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      const mouseRadius = (mouse.r || 42) * DPR;

      // While waiting for scroll: particles softly pulse right at the button origin
      if (!hasTriggered) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const pulse = Math.sin(timestamp * 0.004 + p.phase) * (2 * DPR);
          p.x = p.sx + pulse;
          p.y = p.sy + pulse;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        return;
      }

      const elapsed = timestamp - (streamStartTime || timestamp);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!p.done) {
          if (elapsed < p.delay) {
            // Pulsing at button before launching into the beam
            const pulse = Math.sin(timestamp * 0.005 + p.phase) * (2.2 * DPR);
            p.x = p.sx + pulse;
            p.y = p.sy + pulse;
          } else if (elapsed - p.delay >= p.dur) {
            // Lock into exact laptop position
            p.done = true;
            p.x = p.bx;
            p.y = p.by;
          } else {
            // Horizontal streaming jet from left button to right laptop
            const t = (elapsed - p.delay) / p.dur;
            // Smooth ease-out flight curve
            const ease = 1 - Math.pow(1 - t, 3);
            p.x = p.sx + (p.bx - p.sx) * ease;
            p.y = p.sy + (p.by - p.sy) * ease + Math.sin(t * Math.PI) * p.arcY;
          }
        } else {
          // Living subtle breathing wave (matches GeekyAnts video)
          const breath = Math.sin(timestamp * 0.0024 + p.phase) * (0.8 * DPR);

          // Gentle, compact mouse deflection (tight circle, zero wild air hole)
          if (mouse.active && mouse.x !== null) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouseRadius && dist > 0.1) {
              const repelFactor = 1 - dist / mouseRadius;
              // Max deflection bounded: particles part gently right under pointer tip
              const pushX = (dx / dist) * repelFactor * (12 * DPR);
              const pushY = (dy / dist) * repelFactor * (12 * DPR);
              p.vx += (pushX - p.vx) * 0.22;
              p.vy += (pushY - p.vy) * 0.22;
            }
          }

          // Silky-smooth aerodynamic glide & gentle organic spring return (realistic fluid physics)
          p.vx *= 0.952;
          p.vy *= 0.952;

          const targetX = p.bx + breath;
          const targetY = p.by + breath;

          p.vx += (targetX - p.x) * 0.022;
          p.vy += (targetY - p.y) * 0.022;

          p.x += p.vx;
          p.y += p.vy;

          // Seamless gentle snap to rest (no abrupt pop)
          if (
            Math.abs(p.vx) < 0.012 &&
            Math.abs(p.vy) < 0.012 &&
            Math.abs(p.x - targetX) < 0.025 &&
            Math.abs(p.y - targetY) < 0.025
          ) {
            p.x = targetX;
            p.y = targetY;
            p.vx = 0;
            p.vy = 0;
          }
        }

        // Render Particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(animate);

    // 5. Interactive Mouse & Touch Handlers
    const updateMousePos = (clientX, clientY) => {
      const containerRect = container.getBoundingClientRect();
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      mouse.x = (clientX - containerRect.left) * DPR;
      mouse.y = (clientY - containerRect.top) * DPR;
      mouse.active = true;
    };

    const handleMouseMove = (e) => {
      updateMousePos(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = null;
      mouse.y = null;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updateMousePos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
      mouse.x = null;
      mouse.y = null;
    };

    // Localized Click Splash: Nearby points visibly scatter outward in a dynamic splash and spring back!
    const handleClick = (e) => {
      const containerRect = container.getBoundingClientRect();
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      const clickX = (e.clientX - containerRect.left) * DPR;
      const clickY = (e.clientY - containerRect.top) * DPR;

      if (!hasTriggered) {
        hasTriggered = true;
        streamStartTime = performance.now();
        return;
      }

      // Satisfying local blast zone (approx 145px around click)
      const blastRadius = 145 * DPR;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        let dx = p.x - clickX;
        let dy = p.y - clickY;
        let dist = Math.sqrt(dx * dx + dy * dy);

        // Outside this radius: completely still (rest of laptop doesn't move)
        if (dist > blastRadius) continue;

        if (dist < 1) {
          dx = (Math.random() - 0.5) * 12;
          dy = (Math.random() - 0.5) * 12;
          dist = Math.sqrt(dx * dx + dy * dy);
        }

        p.done = true; // allow dynamic physics

        // Smooth, organic outward scatter impulse (soft ripple glide, not a violent jerk)
        const falloff = Math.pow((blastRadius - dist) / blastRadius, 1.25);
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.22;
        const impulse = falloff * (12 + Math.random() * 6) * DPR;

        p.vx += Math.cos(angle) * impulse;
        p.vy += Math.sin(angle) * impulse;
      }
    };

    // 6. Debounced Resize Listener
    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!isMounted) return;
        initParticles(true);
      }, 150);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('click', handleClick);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      isMounted = false;
      if (animId) cancelAnimationFrame(animId);
      if (observer) observer.disconnect();
      clearTimeout(resizeTimer);
      window.removeEventListener('scroll', checkFullyInView);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('click', handleClick);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="DFL IT Future-Ready Showcase"
      className="relative z-10 w-full flex items-center justify-center overflow-hidden bg-white select-none pt-0 sm:pt-1 lg:pt-1 pb-3 sm:pb-4 lg:pb-5 border-t border-slate-100 cursor-pointer"
    >
      {/* HTML5 Canvas Layer: Animated Streaming Laptop Particles */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-auto cursor-pointer"
      />

      {/* Foreground Content: Balanced 2-Column Responsive Grid */}
      <div className="relative z-10 max-w-7xl xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-10">
        
        {/* Left Column: Editorial Headline & Origin Action Button */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-auto">
          {/* Top Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-normal mb-4 sm:mb-6 tracking-normal max-w-xl">
            Somewhere out there, a business is ready to scale with smart tech.
          </p>

          {/* Main Bold Display Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-[#2A1815] leading-[1.14]">
            <span className="block">DFL IT gets</span>
            <span className="block text-[#E66E19]">
              your business
            </span>
            <span className="block">future-ready</span>
          </h2>

          {/* Particle Emission Origin Button (Matches GeekyAnts CTA stream launch point) */}
          <div className="mt-8 flex items-center gap-4">
            <button
              ref={originRef}
              onClick={() => {
                // Clicking the button also re-triggers or pulses the particle stream
                const canvas = canvasRef.current;
                if (canvas) {
                  canvas.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                }
              }}
              className="px-8 py-3.5 rounded-full bg-[#E66E19] hover:bg-[#d05f12] text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore DFL IT</span>
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            </button>
          </div>
        </div>

        {/* Right Column: Prominent slot for the large Laptop particle model */}
        <div
          ref={laptopSlotRef}
          className="lg:col-span-7 xl:col-span-8 h-[480px] sm:h-[540px] md:h-[600px] lg:h-[640px] xl:h-[680px] w-full flex items-center justify-center pointer-events-none"
        />

      </div>
    </section>
  );
};

export default DflItFutureReady;
