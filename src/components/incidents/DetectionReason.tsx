type Feature = {
  name: string;
  value: number;
};

const mockFeatures: Feature[] = [
  { name: "Failed Login Attempts", value: 0.8 },
  { name: "IP Reputation Score", value: 0.6 },
  { name: "Geo Anomaly", value: 0.4 },
  { name: "Login Time Deviation", value: -0.3 }
];

export default function DetectionReason() {
  return (
    <div className="bg-[var(--bg-secondary)] p-4 rounded cyber-glow">
      
      <h1 className="mb-4 text-sm text-[var(--text-secondary)] font-[Orbitron]">
        Detection Reasoning
      </h1>

      {/* FEATURE BARS */}
      <div className="space-y-3 mb-6">
        {mockFeatures.map((f, i) => (
          <div key={i}>
            
            <div className="flex justify-between text-xs mb-1">
              <span>{f.name}</span>
              <span>{f.value.toFixed(2)}</span>
            </div>

            <div className="h-2 bg-[var(--bg-tertiary)] rounded">
              <div
                className={`h-2 rounded ${
                  f.value > 0 ? "bg-red-400" : "bg-cyan-400"
                }`}
                style={{ width: `${Math.abs(f.value) * 100}%` }}
              />
            </div>

          </div>
        ))}
      </div>

      {/* MODEL TABLE */}
      <div className="text-xs mb-6">
        <h3 className="mb-2 text-[var(--text-secondary)]">
          Model Contributions
        </h3>

        <table className="w-full text-left">
          <thead>
            <tr className="text-[var(--text-secondary)]">
              <th>Model</th>
              <th>Score</th>
              <th>Weight</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Isolation Forest</td>
              <td>0.82</td>
              <td>0.4</td>
            </tr>
            <tr>
              <td>LSTM Autoencoder</td>
              <td>0.76</td>
              <td>0.35</td>
            </tr>
            <tr>
              <td>Sigma Rules</td>
              <td>0.65</td>
              <td>0.25</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FINAL SCORE */}
      <div className="text-center">
        <p className="text-xs text-[var(--text-secondary)]">
          Composite Score
        </p>

        <p className="text-2xl font-bold text-red-400">
          0.87
        </p>
      </div>

    </div>
  );
}