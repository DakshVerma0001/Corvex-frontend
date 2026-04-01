import {
  LayoutDashboard,
  ShieldAlert,
  Radar,
  ListChecks,
  BrainCircuit,
  Settings
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 h-full bg-[var(--bg-secondary)] border-r border-[var(--border-default)] p-4 cyber-glow">
      
      <h1 className="text-xl font-bold text-[var(--accent-primary)] mb-6 font-[Orbitron] text-[var(--accent-primary)] tracking-widest">
        CORVEX
      </h1>

      <nav className="space-y-2 text-sm">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive
                ? "bg-[var(--bg-tertiary)] text-[var(--accent-primary)]"
                : "hover:bg-[var(--bg-tertiary)]"
            }`
          }
        >
          <LayoutDashboard size={16} /> Overview
        </NavLink>

        <NavLink
          to="/incidents"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive
                ? "bg-[var(--bg-tertiary)] text-[var(--accent-primary)]"
                : "hover:bg-[var(--bg-tertiary)]"
            }`
          }
        >
          <ShieldAlert size={16} /> Incidents
        </NavLink>

        <NavLink
          to="/detections"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive
                ? "bg-[var(--bg-tertiary)] text-[var(--accent-primary)]"
                : "hover:bg-[var(--bg-tertiary)]"
            }`
          }
        >
          <Radar size={16} /> Detections
        </NavLink>

        <NavLink
          to="/playbooks"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive
                ? "bg-[var(--bg-tertiary)] text-[var(--accent-primary)]"
                : "hover:bg-[var(--bg-tertiary)]"
            }`
          }
        >
          <ListChecks size={16} /> Playbooks
        </NavLink>

        <NavLink
          to="/models"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive
                ? "bg-[var(--bg-tertiary)] text-[var(--accent-primary)]"
                : "hover:bg-[var(--bg-tertiary)]"
            }`
          }
        >
          <BrainCircuit size={16} /> Models
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive
                ? "bg-[var(--bg-tertiary)] text-[var(--accent-primary)]"
                : "hover:bg-[var(--bg-tertiary)]"
            }`
          }
        >
          <Settings size={16} /> Settings
        </NavLink>

      </nav>
    </div>
  );
}