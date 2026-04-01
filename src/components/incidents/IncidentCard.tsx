import { useNavigate } from "react-router-dom";
import SeverityBadge from "../ui/SeverityBadge";
import TtpTag from "./TtpTag";

type Severity = "critical" | "high" | "medium" | "low";

interface Props {
  title: string;
  severity: Severity;
  time: string;
  status: string;
}

export default function IncidentCard({
  title,
  severity,
  time,
  status
}: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/incidents/1")}
      className="cursor-pointer p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-default)] hover:bg-[var(--bg-tertiary)] transition"
    >
      <div className="flex justify-between mb-2">
        <SeverityBadge level={severity} />
        <span className="text-xs text-[var(--text-secondary)]">
          {time}
        </span>
      </div>

      <h3 className="text-sm font-semibold mb-2">{title}</h3>

      <div className="flex gap-2 mb-2">
        <TtpTag id="T1110" />
        <TtpTag id="T1078" />
      </div>

      <p className="text-xs text-[var(--text-secondary)]">
        Status: {status}
      </p>
    </div>
  );
}