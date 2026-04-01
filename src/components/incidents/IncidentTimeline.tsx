type EventType = "normal" | "detection" | "action";

interface Event {
  time: string;
  title: string;
  description: string;
  type: EventType;
}

const mockEvents: Event[] = [
  {
    time: "12:01:02",
    title: "Login attempt failed",
    description: "Multiple failed login attempts detected",
    type: "normal"
  },
  {
    time: "12:01:05",
    title: "Anomaly detected",
    description: "Unusual login pattern identified",
    type: "detection"
  },
  {
    time: "12:01:07",
    title: "Account accessed",
    description: "Successful login after multiple failures",
    type: "normal"
  },
  {
    time: "12:01:08",
    title: "IP Blocked",
    description: "Automated containment action executed",
    type: "action"
  }
];

export default function IncidentTimeline() {
  return (
    <div className="bg-[var(--bg-secondary)] p-4 rounded h-[400px] overflow-y-auto cyber-glow">
      
      <h1 className="mb-4 text-sm text-[var(--text-secondary)] font-[Orbitron]">
        Incident Timeline
      </h1>

      <div className="space-y-4">
        {mockEvents.map((event, i) => (
          <div key={i} className="flex gap-4">

            {/* LEFT DOT + LINE */}
            <div className="flex flex-col items-center">
              <div
                className={`w-2 h-2 rounded-full ${
                  event.type === "detection"
                    ? "bg-cyan-400"
                    : event.type === "action"
                    ? "bg-orange-400"
                    : "bg-gray-500"
                }`}
              ></div>

              {i !== mockEvents.length - 1 && (
                <div className="w-[1px] h-full bg-[var(--border-default)]"></div>
              )}
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <p className="text-xs font-mono text-[var(--text-secondary)]">
                {event.time}
              </p>

              <p className="text-sm font-semibold">
                {event.title}
              </p>

              <p className="text-xs text-[var(--text-secondary)]">
                {event.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}