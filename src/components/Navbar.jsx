import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import SignIn from "../pages/authentication/SignIn";

const Navbar = () => {
  const { user, loading, signOutUser } = useAuth();

  // Navbar Button Links
  const links = (
    <>
      <li>
        <NavLink to="/" className="btn btn-outline">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-car" className="btn btn-outline">
          Add Car
        </NavLink>
      </li>
    </>
  );

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="font-bold text-xl font-openSans">Car-Rentio</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <p>
              {user.displayName}{" "}
              <span onClick={signOutUser} className="btn btn-link text-black">
                Sign-out
              </span>
            </p>
          ) : (
            <a
              onClick={handleClickOpen}
              className="font-semibold hover:border-b hover:border-black cursor-pointer"
            >
              Sign-in | Register
            </a>
          )}
        </div>
      </div>
      <SignIn handleClose={handleClose} open={open} />
    </div>
  );
};

export default Navbar;
