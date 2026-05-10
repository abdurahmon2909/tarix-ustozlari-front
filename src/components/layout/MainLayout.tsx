import { Outlet } from "react-router-dom";

import BottomNavbar from "./BottomNav";

import TopBar from "./TopBar";

import ToastContainer from "../ui/ToastContainer";

import OfflineBanner from "../ui/OfflineBanner";

import PageContainer from "../ui/PageContainer";

import {
  useNotifications,
} from "../../hooks/useNotifications";

import {
  useOnline,
} from "../../hooks/useOnline";

import {
  useOffline,
} from "../../hooks/useOffline";

export default function MainLayout() {
  useNotifications();

  useOnline();

  const { offline } =
    useOffline();

  return (
    <div className="min-h-screen pb-24">
      <OfflineBanner
        visible={offline}
      />

      <ToastContainer />

      <PageContainer>
        <main className="p-4">
          <TopBar />

          <Outlet />
        </main>
      </PageContainer>

      <BottomNavbar />
    </div>
  );
}