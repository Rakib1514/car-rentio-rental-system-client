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
            <NavLink
              to={`/my-bookings/${user?.uid}`}
              className="navLinkBtn"
            >
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

  if(loading){
    return <div className="w-full h-16 skeleton" />
  }

  return (
    <nav>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center relative">
            <a className="font-bold text-xl font-openSans">Car-Rentio</a>
            <img
              src="https://i.ibb.co.com/xfY2N89/Pngtree-auto-logo-car-4236175.png"
              alt=""
              className="absolute translate-x-24 lg:block hidden"
            />
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul id="navLinks" className="menu menu-horizontal px-1  transition-all duration-300">{links}</ul>
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
            <div className=" flex gap-2">
              <a
                onClick={showModal}
                className="font-semibold hover:border-b hover:border-black cursor-pointer join"
              >
                Sign-in |
              </a>
              <Link
                to={"/register"}
                className="font-semibold hover:border-b hover:border-black cursor-pointer join"
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
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="user"
                    src={user?.photoURL}
                  />
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
