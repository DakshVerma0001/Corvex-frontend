import { useNavigate } from 'react-router-dom';

export default function PricingPage() {
  const navigate = useNavigate();
  return (
    <div className="p-10 grid grid-cols-3 gap-6">
      
      {["Starter", "Pro", "Enterprise"].map((plan, i) => (
        <div key={i} className="p-6 bg-[var(--bg-secondary)] rounded cyber-glow">
          
          <h2 className="font-[Orbitron] mb-2">{plan}</h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            {plan === "Starter" ? "Free tier" : "$49/month"}
          </p>

          <button
  onClick={() => navigate("/dashboard")}
  className="w-full bg-[var(--accent-primary)] text-black p-2 rounded"
>
  Choose Plan
</button>

        </div>
      ))}

    </div>
  );
}