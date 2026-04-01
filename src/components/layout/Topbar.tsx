import { Bell } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import { useNotificationStore } from "../../store/notificationStore";
import ProfileDropdown from "../ui/ProfileDropdown";

<ProfileDropdown />

export default function Topbar() {
  const notifications = useNotificationStore((s) => s.notifications);

  return (
    <div className="h-14 flex items-center justify-between px-4 border-b border-[var(--border-default)] cyber-glow">
      <h1 className="text-sm text-[var(--text-secondary)] font-[Orbitron] text-[var(--accent-primary)] tracking-widest ">
        Dashboard Overview
      </h1>

      <div className="flex items-center gap-4 cyber-glow">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>

        {/* Notification */}
        <div className="relative cyber-glow">
          <Bell size={18} />
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 px-1 rounded cyber-glow">
              {notifications.length}
            </span>
          )}
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
}