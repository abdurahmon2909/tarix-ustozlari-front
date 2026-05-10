import { Outlet } from "react-router-dom";

import BottomNav from "./BottomNavbar";
import PageContainer from "./PageContainer";

export default function AppShell() {
  return (
    <div className="bg-[#071120] min-h-screen">
      <PageContainer>
        <Outlet />
      </PageContainer>

      <BottomNav />
    </div>
  );
}