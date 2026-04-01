export default function DetectionsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 font-[Orbitron]">Detections</h1>

      <div className="space-y-3 cyber-glow">
        {["Brute Force Rule", "Suspicious Login", "Anomaly Score"].map(
          (d, i) => (
            <div
              key={i}
              className="p-4 bg-[var(--bg-secondary)] rounded border border-[var(--border-default)]"
            >
              <p className="text-sm font-semibold">{d}</p>
              <p className="text-xs text-[var(--text-secondary)]">
                Detection rule active
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}