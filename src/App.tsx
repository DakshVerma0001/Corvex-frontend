import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import AppShell from "./components/layout/AppShell";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import IncidentsPage from "./components/incidents/IncidentsPage";
import IncidentDetailPage from "./components/incidents/IncidentDetailPage";
import CommandPalette from "./components/ui/CommandPalette";
import DetectionsPage from "./pages/detections/DetectionsPage";
import PlaybooksPage from "./pages/playbooks/PlaybooksPage";
import ModelsPage from "./pages/models/ModelsPage";
import SettingsPage from "./pages/settings/SettingsPage";
import SignupPage from "./pages/auth/SignupPage";
import PricingPage from "./pages/pricing/PricingPage";

export default function App() {
  useTheme();

  return (
    <BrowserRouter>
      <CommandPalette />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <AppShell>
              <DashboardPage />
            </AppShell>
          }
        />

        <Route
          path="/incidents"
          element={
            <AppShell>
              <IncidentsPage />
            </AppShell>
          }
        />

        <Route
          path="/incidents/:id"
          element={
            <AppShell>
              <IncidentDetailPage />
            </AppShell>
          }
        />

        <Route path="/detections" element={<AppShell><DetectionsPage /></AppShell>} />
        <Route path="/playbooks" element={<AppShell><PlaybooksPage /></AppShell>} />
        <Route path="/models" element={<AppShell><ModelsPage /></AppShell>} />
        <Route path="/settings" element={<AppShell><SettingsPage /></AppShell>} />
<Route path="/signup" element={<SignupPage />} />
<Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}