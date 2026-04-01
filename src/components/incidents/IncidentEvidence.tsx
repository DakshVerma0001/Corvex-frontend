type Log = {
  time: string;
  ip: string;
  user: string;
  event: string;
  status: "success" | "failed";
};

const mockLogs: Log[] = [
  {
    time: "12:01:02",
    ip: "192.168.1.45",
    user: "admin",
    event: "Login Attempt",
    status: "failed"
  },
  {
    time: "12:01:05",
    ip: "192.168.1.45",
    user: "admin",
    event: "Login Attempt",
    status: "failed"
  },
  {
    time: "12:01:07",
    ip: "192.168.1.45",
    user: "admin",
    event: "Login Success",
    status: "success"
  },
  {
    time: "12:01:08",
    ip: "192.168.1.45",
    user: "admin",
    event: "IP Blocked",
    status: "success"
  }
];

export default function IncidentEvidence() {
  return (
    <div className="bg-[var(--bg-secondary)] p-4 rounded cyber-glow">
      
      <h1 className="mb-4 text-sm text-[var(--text-secondary)] font-[Orbitron]">
        Evidence Logs
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          
          <thead className="text-[var(--text-secondary)] border-b border-[var(--border-default)]">
            <tr>
              <th className="py-2">Time</th>
              <th>IP</th>
              <th>User</th>
              <th>Event</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {mockLogs.map((log, i) => (
              <tr
                key={i}
                className="border-b border-[var(--border-default)] hover:bg-[var(--bg-tertiary)]"
              >
                <td className="py-2 font-mono">{log.time}</td>
                <td>{log.ip}</td>
                <td>{log.user}</td>
                <td>{log.event}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      log.status === "success"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {log.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}