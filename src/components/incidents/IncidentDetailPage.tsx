import { useParams } from "react-router-dom";
import TtpTag from "../../components/incidents/TtpTag";
import IncidentTabs from "../../components/incidents/IncidentTabs";
import IncidentChatbot from "../../components/incidents/IncidentChatbot";

export default function IncidentDetailPage() {
  const { id } = useParams();

  return (
    <div>
      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-4 font-[Orbitron]">
        Incident #{id}
      </h1>

      {/* SUMMARY CARD */}
      <div className="p-4 bg-[var(--bg-secondary)] rounded mb-6 cyber-glow">
        <div className="flex justify-between">
          <span>Severity: CRITICAL</span>
          <span>Status: Contained</span>
        </div>

        <div className="mt-2 text-sm text-[var(--text-secondary)]">
          Duration: 2.3 seconds
        </div>
      </div>

      {/* TTP TAGS */}
      <div className="flex gap-2 mb-6">
        <TtpTag id="T1110" />
        <TtpTag id="T1078" />
      </div>

      {/* 🔥 NEW GRID (IMPORTANT CHANGE) */}
      <div className="grid grid-cols-3 gap-4">

        {/* LEFT SIDE (TABS) */}
        <div className="col-span-2 ">
          <IncidentTabs />
        </div>

        {/* RIGHT SIDE (CHATBOT) */}
        <div>
          <IncidentChatbot />
        </div>

      </div>
    </div>
  );
}