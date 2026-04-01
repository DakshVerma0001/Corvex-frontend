import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }: any) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}