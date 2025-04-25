import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden font-roboto dark:bg-gray-900 dark:text-gray-100">
      <header>
        <Toaster />
        <nav className="fixed left-0 top-0 z-20 w-full">
          <Navbar />
        </nav>
      </header>
      <main>
        <div style={{ visibility: "hidden" }}>
          <Navbar />
        </div>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
