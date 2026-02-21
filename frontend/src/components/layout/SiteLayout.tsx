import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import { Toaster } from "../ui/sonner";

export function SiteLayout() {
  return (
    <div className="app-shell">
      <Navigation />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
