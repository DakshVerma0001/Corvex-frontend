type Action = {
  name: string;
  type: "auto" | "manual";
  status: "success" | "failed";
  time: string;
};

const mockActions: Action[] = [
  {
    name: "IP Blocked",
    type: "auto",
    status: "success",
    time: "12:01:08"
  },
  {
    name: "User Session Terminated",
    type: "auto",
    status: "success",
    time: "12:01:09"
  },
  {
    name: "Admin Notified",
    type: "manual",
    status: "success",
    time: "12:01:15"
  }
];

export default function IncidentActions() {
  return (
    <div className="bg-[var(--bg-secondary)] p-4 rounded cyber-glow">
      
      <h1 className="mb-4 text-sm text-[var(--text-secondary)] font-[Orbitron]">
        Response Actions
      </h1>

      <div className="space-y-3">
        {mockActions.map((action, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 bg-[var(--bg-tertiary)] rounded"
          >
            
            <div>
              <p className="text-sm font-semibold">{action.name}</p>
              
              <p className="text-xs text-[var(--text-secondary)]">
                {action.type === "auto" ? "Automated" : "Manual"} • {action.time}
              </p>
            </div>

            <span
              className={`text-xs px-2 py-1 rounded ${
                action.status === "success"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {action.status}
            </span>

          </div>
        ))}
      </div>

    </div>
  );
}