export default function PlaybooksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 font-[Orbitron]">Playbooks</h1>

      <div className="space-y-3 cyber-glow">
        {["Block IP", "Disable User", "Alert Admin"].map((p, i) => (
          <div
            key={i}
            className="p-4 bg-[var(--bg-secondary)] rounded border border-[var(--border-default)]"
          >
            <p className="text-sm font-semibold">{p}</p>
            <p className="text-xs text-[var(--text-secondary)]">
              Automated response workflow
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}