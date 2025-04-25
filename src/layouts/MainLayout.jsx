import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { ConfigProvider, theme } from "antd";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#735ACE", //ant design primary color
        },
      }}
    >
      <div className="overflow-x-hidden font-roboto dark:bg-gray-900 dark:text-gray-100">
        <header>
          <Toaster />
          <nav className="fixed left-0 top-0 z-20 w-full">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          </nav>
        </header>
        <main>
          <div style={{ visibility: "hidden" }}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ConfigProvider>
  );
};

export default MainLayout;
