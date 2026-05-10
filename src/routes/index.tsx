import {
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";

import LoginPage from "../pages/LoginPage";

import ProfilePage from "../pages/ProfilePage";

import TestsPage from "../pages/TestsPage";
import SearchPage from (
  "../pages/SearchPage"
);
import BooksPage from "../pages/BooksPage";
import ArenaPage from (
  "../pages/ArenaPage"
);
import ArenaMatchmakingPage from (
  "../pages/ArenaMatchmakingPage"
);

import AdminDashboardPage from (
  "../pages/AdminDashboardPage"
);

import ErrorBoundary from (
  "../components/ui/ErrorBoundary"
);
import LeaderboardPage from (
  "../pages/LeaderboardPage"
);
import BookDetailPage from (
  "../pages/BookDetailPage"
);
import SettingsPage from (
  "../pages/SettingsPage"
);

import PremiumPage from (
  "../pages/PremiumPage"
);
import BookChapterQuestionsPage from (
  "../pages/BookChapterQuestionsPage"
);
import TestSessionPage from (
  "../pages/TestSessionPage"
);

import TestResultPage from (
  "../pages/TestResultPage"
);

import MainLayout from (
  "../components/layout/MainLayout"
);

import ProtectedRoute from (
  "../components/auth/ProtectedRoute"
);

export default function AppRouter() {
  return (
  <ErrorBoundary>
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
         path="settings"
         element={<SettingsPage />}
        />

        <Route
         path="premium"
         element={<PremiumPage />}
        />
        <Route
          path="tests"
          element={<TestsPage />}
        />

        <Route
          path="tests/:sessionId"
          element={
            <TestSessionPage />
          }
        />
        <Route
          path="arena/matchmaking"
          element={
          <ArenaMatchmakingPage />
          }
        />

        <Route
          path="admin"
          element={
          <AdminDashboardPage />
          }
        />
        <Route
          path="
            tests/:sessionId/result
          "
          element={
            <TestResultPage />
          }
        />

        <Route
          path="books"
          element={<BooksPage />}
        />
        <Route
          path="books/:bookId"
          element={<BookDetailPage />}
        />
        <Route
          path="arena/battle"
          element={<BattlePage />}
        />
        <Route
          path="books/:bookId/chapters/:chapterId"
          element={
          <BookChapterQuestionsPage />}
        />
        <Route
          path="leaderboard"
          element={
            <LeaderboardPage />
          }
        />
        <Route
          path="search"
          element={<SearchPage />}
        />

        <Route
          path="arena"
          element={<ArenaPage />}
        />
        <Route
          path="profile"
          element={<ProfilePage />}
        />
      </Route>
    </Routes>
  </ErrorBoundary>
  );
}