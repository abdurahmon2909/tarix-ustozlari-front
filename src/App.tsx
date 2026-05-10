import {
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
    <Routes>
      {/* LOGIN */}
      <Route
        path="/login"
        element={<LoginPage />}
      />

      {/* HOME */}
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

      {/* TESTS */}
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

      {/* BOOKS */}
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

      {/* ARENA */}
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

      {/* PROFILE */}
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

      {/* SETTINGS */}
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

      {/* SESSION */}
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

      {/* RESULT */}
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
            to="/login"
            replace
          />
        }
      />
    </Routes>
  );
}