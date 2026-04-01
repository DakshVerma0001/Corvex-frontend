import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const items = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Incidents", path: "/incidents" }
  ];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-[var(--bg-secondary)] p-4 w-96 rounded">
        
        <input
          placeholder="Search..."
          className="w-full p-2 mb-3 bg-[var(--bg-tertiary)] rounded"
        />

        <div className="space-y-2">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              className="p-2 hover:bg-[var(--bg-tertiary)] cursor-pointer rounded"
            >
              {item.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}