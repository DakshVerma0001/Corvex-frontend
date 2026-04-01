import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IncidentCard from "./IncidentCard";
import LiveIndicator from "../ui/LiveIndicator";
import { useNotificationStore } from "../../store/notificationStore";
import { useIncidentStore } from "../../store/incidentStore";

type Severity = "critical" | "high" | "medium" | "low";

interface Incident {
  title: string;
  severity: Severity;
  time: string;
  status: string;
}

const initialData: Incident[] = [
  {
    title: "Brute Force Attack — 192.168.1.45",
    severity: "critical",
    time: "10 sec ago",
    status: "Contained"
  }
];

export default function IncidentFeed() {
  const [incidents, setIncidents] = useState<Incident[]>(initialData);

  const addNotification = useNotificationStore((s) => s.addNotification);

  // 🔥 NEW: global count increment
  const increment = useIncidentStore((s) => s.increment);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIncident: Incident = {
        title: "New Threat Detected — " + Math.floor(Math.random() * 255),
        severity: ["critical", "high", "medium", "low"][
          Math.floor(Math.random() * 4)
        ] as Severity,
        time: "just now",
        status: "Investigating"
      };

      // 👉 Add to feed
      setIncidents((prev) => [newIncident, ...prev]);

      // 👉 Notification
      addNotification("🚨 New incident detected");

      // 🔥 IMPORTANT — update count
      increment();

    }, 5000);

    return () => clearInterval(interval);
  }, [addNotification, increment]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm text-[var(--text-secondary)]">
          Live Threat Feed
        </h2>
        <LiveIndicator />
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {incidents.map((incident, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <IncidentCard {...incident} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}