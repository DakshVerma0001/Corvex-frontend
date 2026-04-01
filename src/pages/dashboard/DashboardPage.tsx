import IncidentFeed from "../../components/incidents/IncidentFeed";
import SeverityDonut from "../../components/charts/SeverityDonut";
import { useIncidentStore } from "../../store/incidentStore";

export default function DashboardPage() {
 
  const count = useIncidentStore((s) => s.count);

  return (
    <div>
      {/* METRICS */}
      <div className="grid grid-cols-4 gap-4 mb-6 cyber-glow">
        
        <div className="p-4 bg-[var(--bg-secondary)] rounded cyber-glow">
          MTTD: 1.2s
        </div>

        <div className="p-4 bg-[var(--bg-secondary)] rounded cyber-glow">
          MTTC: 2.8s
        </div>

        <div className="p-4 bg-[var(--bg-secondary)] rounded cyber-glow">
          Incidents: {count}
        </div>

        <div className="p-4 bg-[var(--bg-secondary)] rounded cyber-glow">
          False Positive: 1.8%
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-6" cyber-glow>
        
        {/* LEFT */}
        <div className="col-span-2 p-4 rounded cyber-glow">
          <IncidentFeed />
        </div>

        {/* RIGHT */}
        <div className="bg-[var(--bg-secondary)] p-8 b-6 rounded cyber-glow">
          <h2 className="mb-4 text-sm text-[var(--text-secondary)] font-[Orbitron]">
            Severity Distribution
          </h2>
          <SeverityDonut />
        </div>

      </div>
    </div>
  );
}