import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import SignIn from "../pages/authentication/SignIn";

const Navbar = () => {
  const { user, signOutUser, loading } = useAuth();
  // Navbar Button Links
  const links = (
    <>
      <li>
        <NavLink to="/" className="navLinkBtn">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/available-cars" className="navLinkBtn">
          Available Cars
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-car" className="navLinkBtn">
              Add Car
            </NavLink>
          </li>
          <li>
            <NavLink to={`/my-cars/${user?.uid}`} className="navLinkBtn">
              My Cars
            </NavLink>
          </li>
          <li>
            <NavLink to={`/my-bookings/${user?.uid}`} className="navLinkBtn">
              My Bookings
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  if (loading) {
    return <div className="skeleton h-16 w-full" />;
  }
  return (
    <nav>
      <div className="navbar mx-auto w-11/12 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              id="dropNavLink"
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="relative flex items-center">
              <a className="font-openSans text-xl font-bold">Car-Rentio</a>
              <img
                src="https://i.ibb.co.com/xfY2N89/Pngtree-auto-logo-car-4236175.png"
                alt=""
                className="absolute hidden translate-x-24 lg:block"
              />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul
            id="navLinks"
            className="menu menu-horizontal px-1 transition-all duration-300"
          >
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p>
                <span className="md:hidden">{user.displayName}</span>
                <span onClick={signOutUser} className="btn btn-link text-black">
                  Sign-out
                </span>
              </p>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                onClick={showModal}
                className="join cursor-pointer font-semibold hover:border-b hover:border-black"
              >
                Sign-in |
              </a>
              <Link
                to={"/register"}
                className="join cursor-pointer font-semibold hover:border-b hover:border-black"
              >
                Register
              </Link>
            </div>
          )}
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost"
              >
                <div className="w-10 rounded-full">
                  <img alt="user" src={user?.photoURL} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <SignIn isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </nav>
  );
};

export default Navbar;
