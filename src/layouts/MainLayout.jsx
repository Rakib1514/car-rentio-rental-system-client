import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="font-roboto overflow-x-hidden">
      <header>
        <Toaster />
        <nav className="fixed left-0 top-0 w-full z-20">
          <Navbar />
        </nav>
      </header>
      <main>
        <div style={{visibility: "hidden"}}>
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
