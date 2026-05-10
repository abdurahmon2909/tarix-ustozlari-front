import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TestsPage from "./pages/TestsPage";
import BooksPage from "./pages/BooksPage";
import ArenaPage from "./pages/ArenaPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import TestSessionPage from "./pages/TestSessionPage";
import TestResultPage from "./pages/TestResultPage";

import AppShell from "./components/layout/AppShell";

function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token =
    localStorage.getItem("token");

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* APP */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppShell>
                <HomePage />
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="/tests"
          element={
            <ProtectedRoute>
              <AppShell>
                <TestsPage />
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <AppShell>
                <BooksPage />
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="/arena"
          element={
            <ProtectedRoute>
              <AppShell>
                <ArenaPage />
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <AppShell>
                <ProfilePage />
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <AppShell>
                <SettingsPage />
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="/session"
          element={
            <ProtectedRoute>
              <AppShell>
                <TestSessionPage />
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <AppShell>
                <TestResultPage />
              </AppShell>
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}