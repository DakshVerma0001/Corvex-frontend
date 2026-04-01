import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// Animated glitch text
function GlitchText({ text }: { text: string }) {
  return (
    <span className="glitch" data-text={text}>
      {text}
    </span>
  );
}

// Floating particle canvas
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] pointer-events-none"
    />
  );
}

// Scan line terminal text
function TerminalLine({ text, delay }: { text: string; delay: number }) {
  const [visible, setVisible] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setVisible(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  return (
    <div className="font-mono text-xs text-cyan-500/60 tracking-widest">
      <span className="text-cyan-400/40">› </span>
      {visible}
      {visible.length < text.length && (
        <span className="inline-block w-1.5 h-3 bg-cyan-400 ml-0.5 animate-pulse" />
      )}
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "Forever",
    features: ["5 endpoints monitored", "Basic threat detection", "Email alerts", "Community support"],
    tag: "ENTRY LEVEL",
    border: "border-cyan-900/60",
    glow: "",
    badge: "",
    isEnterprise: false,
  },
  {
    name: "Pro",
    price: "$200",
    priceNote: "/month",
    features: ["Unlimited endpoints", "AI threat analysis", "Real-time alerts", "SOC dashboard", "API access"],
    tag: "MOST POPULAR",
    border: "border-cyan-400/60",
    glow: "shadow-[0_0_30px_rgba(0,255,255,0.15)]",
    badge: "RECOMMENDED",
    isEnterprise: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "Pricing",
    features: ["Dedicated security analyst", "99.99% uptime SLA", "White-label & custom branding", "On-premise deployment option"],
    tag: "FULL POWER",
    border: "border-cyan-700/40",
    glow: "",
    badge: "",
    isEnterprise: true,
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        * { box-sizing: border-box; }

        .glitch {
          position: relative;
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          letter-spacing: 0.15em;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          letter-spacing: 0.15em;
        }
        .glitch::before {
          color: #ff003c;
          animation: glitch1 3.5s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
        }
        .glitch::after {
          color: #00e5ff;
          animation: glitch2 3.5s infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
        }
        @keyframes glitch1 {
          0%,95%,100% { transform: translate(0); opacity: 0; }
          96% { transform: translate(-3px, 1px); opacity: 0.8; }
          97% { transform: translate(3px, -1px); opacity: 0.8; }
          98% { transform: translate(0); opacity: 0; }
        }
        @keyframes glitch2 {
          0%,95%,100% { transform: translate(0); opacity: 0; }
          96% { transform: translate(3px, -1px); opacity: 0.8; }
          97% { transform: translate(-3px, 1px); opacity: 0.8; }
          98% { transform: translate(0); opacity: 0; }
        }

        .scanlines {
          background: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.07) 2px,
            rgba(0,0,0,0.07) 4px
          );
          pointer-events: none;
        }

        .hex-border {
          clip-path: polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px);
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          font-family: 'Orbitron', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          font-weight: 700;
          background: transparent;
          border: 1px solid #00e5ff;
          color: #00e5ff;
          padding: 12px 32px;
          cursor: pointer;
          transition: color 0.3s;
          clip-path: polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px);
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #00e5ff;
          transform: translateX(-100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary:hover { color: #000; }
        .btn-primary span { position: relative; z-index: 1; }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
        .delay-5 { animation-delay: 1s; }

        .threat-bar {
          animation: fill 2s ease forwards;
          animation-delay: 1.2s;
          width: 0%;
        }
        @keyframes fill {
          to { width: var(--target-width); }
        }

        .pulse-ring {
          animation: pulseRing 2s ease-out infinite;
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #00e5ff40; }
      `}</style>

      <div className="relative min-h-screen text-white overflow-x-hidden" style={{ fontFamily: "'Share Tech Mono', monospace" }}>

        {/* BG */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 scanlines" />
        <ParticleCanvas />

        {/* Top status bar */}
        <div className="relative z-10 border-b border-cyan-900/40 bg-black/40 backdrop-blur-sm px-6 py-2 flex justify-between items-center fade-in">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div className="pulse-ring absolute inset-0 rounded-full bg-green-400" />
              </div>
              <span className="text-green-400 text-xs tracking-widest">SYSTEM ONLINE</span>
            </div>
            <span className="text-cyan-900 text-xs">|</span>
            <span className="text-cyan-600 text-xs tracking-wider">THREAT LEVEL: <span className="text-yellow-400">MODERATE</span></span>
          </div>
          <div className="text-cyan-700 text-xs tracking-widest hidden sm:block">
            CORVEX v4.2.1 — AUTONOMOUS DEFENSE MATRIX
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">

          {/* HERO */}
          <div className="pt-20 pb-12 px-6 flex flex-col items-center">

            {/* Badge */}
            <div className="fade-in mb-6 inline-flex items-center gap-2 border border-cyan-800/60 bg-cyan-950/30 backdrop-blur px-4 py-1.5 hex-border">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-500 text-xs tracking-[0.3em]">NEXT-GEN THREAT INTELLIGENCE</span>
            </div>

            {/* Title */}
            <h1 className="fade-in delay-1 text-[clamp(3.5rem,10vw,7rem)] leading-none mb-2 text-cyan-400">
              <GlitchText text="CORVEX" />
            </h1>

            <div className="fade-in delay-2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto my-4" />

            <p className="fade-in delay-2 text-gray-400 text-sm tracking-[0.25em] mb-2 uppercase max-w-md">
              Autonomous Cyber Threat Detection Platform
            </p>

            {/* Terminal lines */}
            <div className="fade-in delay-3 mt-4 mb-8 space-y-1 text-left w-full max-w-xs">
              <TerminalLine text="initializing neural threat engine..." delay={900} />
              <TerminalLine text="scanning 2.4M endpoints globally..." delay={1800} />
              <TerminalLine text="anomaly detection: ACTIVE" delay={2700} />
            </div>

            <div className="fade-in delay-4 flex gap-4 flex-wrap justify-center">
              <button className="btn-primary" onClick={() => navigate("/signup")}>
                <span>GET STARTED</span>
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="fade-in delay-4 w-full max-w-4xl mx-auto px-6 mb-16">
            <div className="grid grid-cols-3 border border-cyan-900/40 bg-black/40 backdrop-blur divide-x divide-cyan-900/40">
              {[
                { val: "99.97%", label: "DETECTION RATE" },
                { val: "<12ms", label: "RESPONSE TIME" },
                { val: "2.4M+", label: "NODES PROTECTED" },
              ].map((s, i) => (
                <div key={i} className="py-5 px-4">
                  <div className="font-['Orbitron'] text-xl text-cyan-400 font-bold">{s.val}</div>
                  <div className="text-[10px] tracking-widest text-gray-600 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Threat indicator widget */}
          <div className="fade-in delay-5 w-full max-w-4xl mx-auto px-6 mb-20">
            <div className="border border-cyan-900/30 bg-black/50 backdrop-blur-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-xs tracking-widest text-cyan-700">LIVE THREAT MATRIX</div>
                <div className="text-xs text-green-500 animate-pulse">● MONITORING</div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "MALWARE", pct: 72, color: "bg-red-500" },
                  { label: "PHISHING", pct: 45, color: "bg-yellow-500" },
                  { label: "INTRUSION", pct: 28, color: "bg-orange-500" },
                  { label: "DDoS", pct: 15, color: "bg-cyan-500" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-[10px] text-gray-600 tracking-widest w-20 text-right">{t.label}</span>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-none">
                      <div
                        className={`h-full ${t.color} threat-bar`}
                        style={{ "--target-width": `${t.pct}%`, animationDelay: `${1.2 + i * 0.2}s` } as React.CSSProperties}
                      />
                    </div>
                    <span className="text-[10px] text-gray-600 w-8">{t.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PRICING */}
          <div className="w-full max-w-5xl mx-auto px-6 pb-24">
            <div className="mb-10 text-center">
              <div className="text-[10px] tracking-[0.4em] text-cyan-700 mb-2">DEPLOYMENT TIERS</div>
              <h2 className="font-['Orbitron'] text-2xl text-white font-bold">SELECT YOUR ARSENAL</h2>
              <div className="w-16 h-px bg-cyan-900 mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative card-hover border ${plan.border} bg-black/60 backdrop-blur-md p-6 ${plan.glow} ${i === 1 ? "sm:-mt-4 sm:mb-0 -mt-0" : ""}`}
                  style={{ clipPath: "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)" }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Glow top border on hover */}
                  {hovered === i && (
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  )}

                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-[9px] font-['Orbitron'] font-bold tracking-widest px-3 py-1">
                      {plan.badge}
                    </div>
                  )}

                  <div className="text-[9px] tracking-[0.35em] text-cyan-700 mb-3">{plan.tag}</div>

                  <h2 className="font-['Orbitron'] text-lg text-white mb-1 font-bold">{plan.name}</h2>

                  <div className="flex items-baseline gap-1 mb-5">
                    <span className={`font-['Orbitron'] text-3xl font-black ${i === 1 ? "text-cyan-400" : "text-white"}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 text-xs">{plan.priceNote}</span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {plan.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2.5 text-left">
                        <div className={`w-1 h-1 rounded-none rotate-45 ${i === 1 ? "bg-cyan-400" : "bg-cyan-800"}`} />
                        <span className="text-gray-400 text-xs tracking-wide">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn-primary w-full"
                    onClick={() => navigate("/signup")}
                  >
                    <span>{plan.isEnterprise ? "CONTACT US" : `ACTIVATE ${plan.name.toUpperCase()}`}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer bar */}
          <div className="w-full border-t border-cyan-900/30 bg-black/60 backdrop-blur px-6 py-4 flex justify-between items-center">
            <span className="font-['Orbitron'] text-[10px] text-cyan-900 tracking-widest">CORVEX © 2026</span>
          </div>
        </div>
      </div>
    </>
  );
}
