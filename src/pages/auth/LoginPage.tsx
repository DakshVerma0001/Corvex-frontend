import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("⚠️ Please fill all fields");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#020b14] overflow-hidden relative font-mono">

      {/* Grid Background */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,200,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,255,200,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scan Line */}
      <div className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,255,200,0.4), transparent)",
          animation: "scanMove 4s linear infinite",
        }}
      />

      {/* Corner Decorations */}
      {[
        "top-4 left-4 border-t border-l",
        "top-4 right-4 border-t border-r",
        "bottom-4 left-4 border-b border-l",
        "bottom-4 right-4 border-b border-r",
      ].map((pos, i) => (
        <div key={i} className={`absolute w-20 h-20 border-[rgba(0,255,200,0.3)] pointer-events-none ${pos}`} />
      ))}

      {/* Card */}
      <div className="relative z-10 w-[360px] p-8 pb-6"
        style={{
          background: "rgba(0,20,35,0.95)",
          border: "1px solid rgba(0,255,200,0.2)",
          animation: "cardIn 0.6s ease forwards",
        }}
      >
        {/* Top glow line */}
        <div className="absolute top-[-1px] left-5 right-5 h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, #00ffc8, transparent)" }}
        />
        {/* Bottom glow line */}
        <div className="absolute bottom-[-1px] left-5 right-5 h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, #00ffc8, transparent)" }}
        />

        {/* Header Tag */}
        <p className="text-[10px] tracking-[3px] mb-1.5" style={{ color: "rgba(0,255,200,0.5)", fontFamily: "'Share Tech Mono', monospace" }}>
          // SECURE ACCESS TERMINAL
        </p>

        {/* Logo + Title */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-9 h-9 flex items-center justify-center relative"
            style={{ border: "1px solid rgba(0,255,200,0.4)" }}>
            <div className="absolute inset-[3px]" style={{ border: "1px solid rgba(0,255,200,0.2)" }} />
            <div className="w-3 h-3 rotate-45" style={{ background: "#00ffc8" }} />
          </div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "18px", fontWeight: 700, color: "#e8fff9", letterSpacing: "4px" }}>
            LOGIN
          </h2>
        </div>

        {/* Status Bar */}
        <div className="flex items-center gap-2 mb-6 px-2.5 py-1.5"
          style={{ border: "1px solid rgba(0,255,200,0.1)", background: "rgba(0,255,200,0.03)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00ffc8", animation: "blink 1.5s step-end infinite" }} />
          <span className="text-[10px] tracking-[2px]" style={{ color: "rgba(0,255,200,0.5)" }}>
            SYSTEM ONLINE — AWAITING AUTH
          </span>
        </div>

        {/* Email Field */}
        <div className="mb-3.5">
          <div className="flex items-center gap-1.5 mb-1.5 text-[10px] tracking-[2px]" style={{ color: "rgba(0,255,200,0.6)" }}>
            <div className="w-1 h-1 rotate-45" style={{ background: "#00ffc8" }} />
            EMAIL ADDRESS
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@nexus.io"
            className="w-full px-3.5 py-2.5 text-sm outline-none"
            style={{
              background: "rgba(0,255,200,0.04)",
              border: "1px solid rgba(0,255,200,0.15)",
              color: "#a8ffec",
              fontFamily: "'Share Tech Mono', monospace",
              borderRadius: 0,
            }}
          />
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <div className="flex items-center gap-1.5 mb-1.5 text-[10px] tracking-[2px]" style={{ color: "rgba(0,255,200,0.6)" }}>
            <div className="w-1 h-1 rotate-45" style={{ background: "#00ffc8" }} />
            PASSWORD
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="••••••••••••"
            className="w-full px-3.5 py-2.5 text-sm outline-none"
            style={{
              background: "rgba(0,255,200,0.04)",
              border: "1px solid rgba(0,255,200,0.15)",
              color: "#a8ffec",
              fontFamily: "'Share Tech Mono', monospace",
              borderRadius: 0,
            }}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-2 py-3 text-xs tracking-[4px] cursor-pointer transition-all"
          style={{
            background: "transparent",
            border: "1px solid rgba(0,255,200,0.5)",
            color: "#00ffc8",
            fontFamily: "'Orbitron', monospace",
            fontWeight: 700,
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.background = "rgba(0,255,200,0.1)";
            (e.target as HTMLButtonElement).style.borderColor = "#00ffc8";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.background = "transparent";
            (e.target as HTMLButtonElement).style.borderColor = "rgba(0,255,200,0.5)";
          }}
        >
          ▶ AUTHENTICATE
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-[1px]" style={{ background: "rgba(0,255,200,0.1)" }} />
          <span className="text-[10px] tracking-[1px]" style={{ color: "rgba(0,255,200,0.3)" }}>ACCESS</span>
          <div className="flex-1 h-[1px]" style={{ background: "rgba(0,255,200,0.1)" }} />
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-[11px] tracking-[1px]" style={{ color: "rgba(0,255,200,0.3)" }}>
          NO ACCOUNT?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer"
            style={{ color: "#00ffc8", borderBottom: "1px solid transparent" }}
            onMouseOver={(e) => ((e.target as HTMLSpanElement).style.borderBottomColor = "#00ffc8")}
            onMouseOut={(e) => ((e.target as HTMLSpanElement).style.borderBottomColor = "transparent")}
          >
            REGISTER HERE
          </span>
        </p>
      </div>

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Share+Tech+Mono&display=swap');
        @keyframes scanMove {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}