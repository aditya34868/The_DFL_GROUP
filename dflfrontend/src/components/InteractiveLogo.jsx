import { useEffect, useRef } from "react";
import defaultLogo from "../assets/Final-LOGO-Dinesh-R1-3.webp";

export default function InteractiveLogo({
  imageSrc = defaultLogo,
  align = "right", // "right" | "center" | "left"
  maxSize = 1500,
  scaleMultiplier = 1.22, // Slightly larger medium size
  originRef = null, // Ref to an element (like Contact Us button) to start particles from its right side
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [], animId, startTime = null, resizeTimer;
    let isMounted = true;
    const mouse = { x: null, y: null, r: 35 * DPR };

    const init = () => {
      if (!canvas || !img.naturalWidth || !img.naturalHeight) return;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width > 0 ? rect.width : window.innerWidth;
      const height = rect.height > 0 ? rect.height : (window.innerHeight - 80);
      canvas.width = Math.round(width * DPR);
      canvas.height = Math.round(height * DPR);
      particles = [];
      startTime = null;

      const isDesktop = canvas.width > 1024 * DPR;

      // Prominent medium size: slightly larger with great balance
      const maxWidthAllowed = isDesktop ? canvas.width * 0.64 : canvas.width * 0.94;
      const maxHeightAllowed = canvas.height * 0.94;

      const baseScale = Math.min(
        Math.min(maxWidthAllowed, (maxSize || 1500) * DPR) / img.naturalWidth,
        Math.min(maxHeightAllowed, (maxSize || 1500) * DPR) / img.naturalHeight
      );
      const scale = baseScale * (scaleMultiplier || 1.22);

      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;

      // Position horizontally based on alignment (stays on the right)
      let sx;
      if (align === "right") {
        if (isDesktop) {
          const rightMargin = Math.max(canvas.width * 0.03, 25 * DPR);
          sx = Math.max((canvas.width - dw) / 2, canvas.width - dw - rightMargin);
        } else {
          sx = (canvas.width - dw) / 2;
        }
      } else if (align === "left") {
        const leftMargin = Math.max(canvas.width * 0.03, 25 * DPR);
        sx = Math.min((canvas.width - dw) / 2, leftMargin);
      } else {
        sx = (canvas.width - dw) / 2;
      }

      const sy = (canvas.height - dh) / 2;

      // Particle emission origin: exactly to the right of Contact Us button
      let bx, by;
      if (originRef && originRef.current) {
        const btnRect = originRef.current.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / canvasRect.width;
        const scaleY = canvas.height / canvasRect.height;
        bx = (btnRect.right - canvasRect.left + 24) * scaleX;
        by = (btnRect.top + btnRect.height / 2 - canvasRect.top) * scaleY;
      } else {
        bx = Math.max(24 * DPR, Math.max(sx - dw * 0.45, canvas.width * 0.22) - 300 * DPR);
        by = sy + dh * 0.72;
      }

      ctx.drawImage(img, sx, sy, dw, dh);
      const x0 = Math.max(0, Math.floor(sx));
      const y0 = Math.max(0, Math.floor(sy));
      const w = Math.min(canvas.width - x0, Math.ceil(dw) + 1);
      const h = Math.min(canvas.height - y0, Math.ceil(dh) + 1);
      const d = ctx.getImageData(x0, y0, w, h).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isInk = (i) => d[i + 3] >= 50 && !(d[i] > 240 && d[i + 1] > 240 && d[i + 2] > 240);
      const addP = (px, py, r, g, b, size) => {
        const a = Math.random() * Math.PI * 2;
        const rad = Math.sqrt(Math.random()) * 22 * DPR;
        particles.push({
          sx: bx + Math.cos(a) * rad,
          sy: by + Math.sin(a) * rad,
          x: 0,
          y: 0,
          bx: px,
          by: py,
          vx: 0,
          vy: 0,
          hx: sx + dw / 2 - 40 * DPR + (Math.random() - 0.5) * 30 * DPR,
          hy: (by + sy + dh / 2) / 2 + (Math.random() - 0.5) * 30 * DPR,
          wob: (Math.random() - 0.5) * 36 * DPR,
          ws: 1 + Math.random(),
          delay: 200 + Math.random() * 800,
          dur: 1900 + Math.random() * 500,
          c: `rgb(${r},${g},${b})`,
          size,
          fp: Math.random() * 6.28,
          fs: 0.02 + Math.random() * 0.02,
          done: false,
          rd: 0,
          sk: 0.08,
        });
      };

      const gap = Math.max(3, Math.round(3 * DPR));
      for (let cy = 0; cy < h; cy += gap) {
        for (let cx = 0; cx < w; cx += gap) {
          let ink = 0, tot = 0, rs = 0, gs = 0, bs = 0;
          for (let yy = cy; yy < Math.min(cy + gap, h); yy++) {
            for (let xx = cx; xx < Math.min(cx + gap, w); xx++) {
              tot++;
              const i = (yy * w + xx) * 4;
              if (isInk(i)) {
                ink++;
                rs += d[i];
                gs += d[i + 1];
                bs += d[i + 2];
              }
            }
          }
          if (!ink) continue;
          if (ink === tot) {
            addP(
              x0 + cx + gap / 2,
              y0 + cy + gap / 2,
              (rs / ink) | 0,
              (gs / ink) | 0,
              (bs / ink) | 0,
              1.6 * DPR * (0.95 + Math.random() * 0.3)
            );
          } else {
            for (let yy = cy; yy < Math.min(cy + gap, h); yy++) {
              for (let xx = cx; xx < Math.min(cx + gap, w); xx++) {
                const i = (yy * w + xx) * 4;
                if (isInk(i)) {
                  addP(x0 + xx + 0.5, y0 + yy + 0.5, d[i], d[i + 1], d[i + 2], 0.75 * DPR);
                }
              }
            }
          }
        }
      }
    };

    const animate = (ts) => {
      if (!isMounted) return;
      if (!startTime) startTime = ts;
      const el = ts - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        if (!p.done) {
          if (el < p.delay) {
            const pulse = Math.sin(el * 0.015 + p.fp) * 1.5 * DPR;
            p.x = p.sx + pulse;
            p.y = p.sy + pulse;
          } else if (el - p.delay >= p.dur) {
            p.done = true;
            p.x = p.bx;
            p.y = p.by;
          } else {
            const t = (el - p.delay) / p.dur;
            if (t < 0.72) {
              const u = t / 0.72, e = 0.5 - Math.cos(Math.PI * u) / 2;
              p.x = p.sx + (p.hx - p.sx) * e;
              p.y = p.sy + (p.hy - p.sy) * e + Math.sin(Math.PI * u) * p.wob * Math.sin(u * 3 * p.ws + p.fp);
            } else {
              const e = 1 - Math.pow(1 - (t - 0.72) / 0.28, 3);
              p.x = p.hx + (p.bx - p.hx) * e;
              p.y = p.hy + (p.by - p.hy) * e;
            }
          }
        } else {
          if (mouse.x !== null) {
            const dx = p.x - mouse.x, dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < mouse.r && dist > 0) {
              const f = (mouse.r - dist) / mouse.r;
              p.x += (dx / dist) * (mouse.r - dist) * 0.35;
              p.y += (dy / dist) * (mouse.r - dist) * 0.35;
              p.vx += (dx / dist) * f * 5 * DPR;
              p.vy += (dy / dist) * f * 5 * DPR;
            }
          }
          p.fp += p.fs;
          if (p.rd > 0) {
            p.rd--;
            p.vx *= 0.94;
            p.vy *= 0.94;
          } else {
            p.vx = (p.vx + (p.bx + Math.cos(p.fp) * 0.3 * DPR - p.x) * p.sk) * 0.8;
            p.vy = (p.vy + (p.by + Math.sin(p.fp) * 0.3 * DPR - p.y) * p.sk) * 0.8;
            if (Math.abs(p.vx) + Math.abs(p.vy) < 0.5 * DPR) p.sk = Math.min(0.08, p.sk + 0.004);
          }
          p.x += p.vx;
          p.y += p.vy;
        }
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    };

    const img = new Image();
    img.crossOrigin = "anonymous";

    const startAnimation = () => {
      if (!isMounted) return;
      init();
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(animate);
    };

    img.onload = startAnimation;
    img.onerror = (err) => {
      console.error("Failed to load interactive logo image:", imageSrc, err);
    };
    img.src = imageSrc;

    if (img.complete && img.naturalWidth !== 0) {
      startAnimation();
    }

    const getCanvasCoords = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return null;
      }
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };

    const onMove = (e) => {
      const coords = getCanvasCoords(e);
      if (!coords) {
        mouse.x = null;
        mouse.y = null;
        return;
      }
      mouse.x = coords.x;
      mouse.y = coords.y;
    };

    const onLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (img.complete && img.naturalWidth !== 0) {
          init();
        }
      }, 150);
    };

    const onClick = (e) => {
      const coords = getCanvasCoords(e);
      if (!coords) return;
      const cx = coords.x, cy = coords.y, br = 85 * DPR;
      for (const p of particles) {
        const dist = Math.hypot(p.x - cx, p.y - cy);
        if (p.done && dist < br) {
          const ang = Math.atan2(p.y - cy, p.x - cx) + (Math.random() - 0.5) * 0.9;
          const spd = Math.pow((br - dist) / br, 0.7) * (10 + Math.random() * 10) * DPR;
          p.vx += Math.cos(ang) * spd;
          p.vy += Math.sin(ang) * spd;
          p.rd = 2 + Math.random() * 6;
          p.sk = 0.08 + Math.random() * 0.06;
        }
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, [imageSrc, align, maxSize, scaleMultiplier, originRef]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full bg-white overflow-hidden ${className}`.trim()}
    />
  );
}





