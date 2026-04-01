export default function ModelsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 font-[Orbitron]">Models</h1>

      <div className="space-y-3 cyber-glow">
        {[
          { name: "Isolation Forest", acc: "82%" },
          { name: "LSTM Autoencoder", acc: "76%" }
        ].map((m, i) => (
          <div
            key={i}
            className="p-4 bg-[var(--bg-secondary)] rounded border border-[var(--border-default)]"
          >
            <p className="text-sm font-semibold">{m.name}</p>
            <p className="text-xs text-[var(--text-secondary)]">
              Accuracy: {m.acc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}