import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.jsx";
import AuthProvider from "./context/authContext/AuthProvider.jsx";
import "./axiosConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";

const queryClient = new QueryClient();
const darkMode = JSON.parse(localStorage.getItem("darkMode")) ?? false;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ConfigProvider
          theme={{
            algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          }}
        >
          <RouterProvider router={routes} />
        </ConfigProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
