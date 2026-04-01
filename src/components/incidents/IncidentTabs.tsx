import { useState } from "react";
import IncidentTimeline from "./IncidentTimeline";
import DetectionReason from "./DetectionReason";
import IncidentActions from "./IncidentActions";
import IncidentEvidence from "./IncidentEvidence";

const tabs = ["Timeline", "Reasoning", "Actions", "Evidence"];

export default function IncidentTabs() {
  const [active, setActive] = useState("Timeline");

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-4 border-b border-[var(--border-default)] mb-4 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-2 text-sm ${
              active === tab
                ? "border-b-2 border-[var(--accent-primary)] text-[var(--accent-primary)]"
                : "text-[var(--text-secondary)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {active === "Timeline" && <IncidentTimeline />}
     {active === "Reasoning" && <DetectionReason />}
      {active === "Actions" && <IncidentActions />}
      {active === "Evidence" && <IncidentEvidence />}
    </div>
  );
}