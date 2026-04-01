export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 font-[Orbitron]">Settings</h1>

      <div className="space-y-4 cyber-glow">

        <div className="p-4 bg-[var(--bg-secondary)] rounded">
          <p className="text-sm font-semibold mb-2">Theme</p>
          <p className="text-xs text-[var(--text-secondary)]">
            Toggle between light and dark mode
          </p>
        </div>

        <div className="p-4 bg-[var(--bg-secondary)] rounded">
          <p className="text-sm font-semibold mb-2">Notifications</p>
          <p className="text-xs text-[var(--text-secondary)]">
            Configure alert preferences
          </p>
        </div>

      </div>
    </div>
  );
}