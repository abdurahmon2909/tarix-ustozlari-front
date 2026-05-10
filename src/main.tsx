import React from "react";

import ReactDOM from "react-dom/client";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App";

import "./styles/globals.css";

import {
  useTheme,
} from "./hooks/useTheme";

import {
  registerSW,
} from "./features/pwa/register-sw";

const queryClient =
  new QueryClient();

registerSW();

function Root() {
  useTheme();

  return <App />;
}

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )!
).render(
  <React.StrictMode>
    <QueryClientProvider
      client={queryClient}
    >
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);