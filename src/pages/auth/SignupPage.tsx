import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    organisation: "", password: "", confirmPassword: "",
  });
  const [strength, setStrength] = useState(0);

  const update = (key: string, val: string) => {
    setForm(f => ({ ...f, [key]: val }));
    if (key === "password") calcStrength(val);
  };

  const calcStrength = (pw: string) => {
    let s = 0;
    if (pw.length >= 6) s++;
    if (pw.length >= 10) s++;
    if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    setStrength(s);
  };

  const strengthLabel = ["ENTER PASSWORD", "WEAK", "MODERATE", "STRONG", "MAXIMUM"];
  const segColor = (i: number) =>
    i >= strength ? "rgba(0,255,200,0.1)"
    : strength <= 1 ? "#ff4060"
    : strength <= 2 ? "#ffc800"
    : "#00ffc8";

  const handleSignup = () => {
    const { firstName, lastName, email, organisation, password, confirmPassword } = form;
    if (!firstName || !lastName || !email || !organisation || !password || !confirmPassword) {
      alert("⚠️ Please fill all fields"); return;
    }
    if (password !== confirmPassword) {
      alert("⚠️ Passwords do not match"); return;
    }
    navigate("/login");
  };

  const Field = ({ label, id, type = "text", placeholder }: any) => (
    <div className="mb-2.5">
      <div className="flex items-center gap-1.5 mb-1.5 text-[10px] tracking-[2px]" style={{ color: "rgba(0,255,200,0.6)" }}>
        <div className="w-1 h-1 rotate-45" style={{ background: "#00ffc8" }} />
        {label}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={(form as any)[id]}
        onChange={(e) => update(id, e.target.value)}
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
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020b14] overflow-hidden relative font-mono py-6">
      {/* Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(0,255,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.04) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />
      {/* Scan Line */}
      <div className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,200,0.4), transparent)", animation: "scanMove 4s linear infinite" }} />
      {/* Corners */}
      {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((pos, i) => (
        <div key={i} className={`absolute w-20 h-20 border-[rgba(0,255,200,0.3)] pointer-events-none ${pos}`} />
      ))}

      {/* Card */}
      <div className="relative z-10 w-[420px] px-8 py-7" style={{
        background: "rgba(0,20,35,0.97)",
        border: "1px solid rgba(0,255,200,0.2)",
        animation: "cardIn 0.6s ease forwards",
      }}>
        <div className="absolute top-[-1px] left-5 right-5 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #00ffc8, transparent)" }} />
        <div className="absolute bottom-[-1px] left-5 right-5 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #00ffc8, transparent)" }} />

        <p className="text-[10px] tracking-[3px] mb-1.5" style={{ color: "rgba(0,255,200,0.5)", fontFamily: "'Share Tech Mono', monospace" }}>
          // NEW OPERATOR REGISTRATION
        </p>
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 flex items-center justify-center relative" style={{ border: "1px solid rgba(0,255,200,0.4)" }}>
            <div className="absolute inset-[3px]" style={{ border: "1px solid rgba(0,255,200,0.2)" }} />
            <div className="w-3 h-3 rotate-45" style={{ background: "#00ffc8" }} />
          </div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "18px", fontWeight: 700, color: "#e8fff9", letterSpacing: "4px" }}>REGISTER</h2>
        </div>

        <div className="flex items-center gap-2 mb-5 px-2.5 py-1.5" style={{ border: "1px solid rgba(0,255,200,0.1)", background: "rgba(0,255,200,0.03)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00ffc8", animation: "blink 1.5s step-end infinite" }} />
          <span className="text-[10px] tracking-[2px]" style={{ color: "rgba(0,255,200,0.5)" }}>SYSTEM ONLINE — IDENTITY ENROLLMENT ACTIVE</span>
        </div>

        {/* Name Row */}
        <div className="grid grid-cols-2 gap-2.5">
          <Field label="FIRST NAME" id="firstName" placeholder="John" />
          <Field label="LAST NAME" id="lastName" placeholder="Doe" />
        </div>
        <Field label="EMAIL ADDRESS" id="email" placeholder="operator@nexus.io" />
        <Field label="ORGANISATION NAME" id="organisation" placeholder="NexusCorp / Unit" />
        
        {/* Password with strength */}
        <div className="mb-2.5">
          <div className="flex items-center gap-1.5 mb-1.5 text-[10px] tracking-[2px]" style={{ color: "rgba(0,255,200,0.6)" }}>
            <div className="w-1 h-1 rotate-45" style={{ background: "#00ffc8" }} /> PASSWORD
          </div>
          <input type="password" placeholder="••••••••••••" value={form.password}
            onChange={(e) => update("password", e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm outline-none"
            style={{ background: "rgba(0,255,200,0.04)", border: "1px solid rgba(0,255,200,0.15)", color: "#a8ffec", fontFamily: "'Share Tech Mono', monospace", borderRadius: 0 }}
          />
          <div className="flex gap-1 mt-1.5">
            {[0,1,2,3].map(i => (
              <div key={i} className="flex-1 h-[2px] transition-all" style={{ background: segColor(i) }} />
            ))}
          </div>
          <p className="text-[9px] tracking-[1px] text-right mt-1" style={{ color: "rgba(0,255,200,0.4)" }}>
            {strengthLabel[form.password.length === 0 ? 0 : strength]}
          </p>
        </div>

        <Field label="CONFIRM PASSWORD" id="confirmPassword" type="password" placeholder="••••••••••••" />

        <button onClick={handleSignup}
          className="w-full mt-1 py-3 text-xs tracking-[4px] cursor-pointer transition-all"
          style={{ background: "transparent", border: "1px solid rgba(0,255,200,0.5)", color: "#00ffc8", fontFamily: "'Orbitron', monospace", fontWeight: 700 }}
          onMouseOver={(e) => { (e.target as HTMLButtonElement).style.background = "rgba(0,255,200,0.1)"; (e.target as HTMLButtonElement).style.borderColor = "#00ffc8"; }}
          onMouseOut={(e) => { (e.target as HTMLButtonElement).style.background = "transparent"; (e.target as HTMLButtonElement).style.borderColor = "rgba(0,255,200,0.5)"; }}
        >▶ INITIALIZE ACCOUNT</button>

        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-[1px]" style={{ background: "rgba(0,255,200,0.1)" }} />
          <span className="text-[10px] tracking-[1px]" style={{ color: "rgba(0,255,200,0.3)" }}>ACCESS</span>
          <div className="flex-1 h-[1px]" style={{ background: "rgba(0,255,200,0.1)" }} />
        </div>
        <p className="text-center text-[11px] tracking-[1px]" style={{ color: "rgba(0,255,200,0.3)" }}>
          ALREADY ENROLLED?{" "}
          <span onClick={() => navigate("/login")} className="cursor-pointer" style={{ color: "#00ffc8" }}>LOGIN HERE</span>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Share+Tech+Mono&display=swap');
        @keyframes scanMove { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        @keyframes cardIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}