import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 bg-[var(--bg-tertiary)] rounded"
      >
        Account ⌄
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[var(--bg-secondary)] rounded shadow-lg p-2 space-y-2">
          
          <button onClick={() => navigate("/pricing")} className="block w-full text-left">
            Pricing
          </button>

          <button onClick={() => navigate("/dashboard")} className="block w-full text-left">
            Dashboard
          </button>

          <button className="block w-full text-left text-red-400">
            Logout
          </button>

        </div>
      )}

    </div>
  );
}