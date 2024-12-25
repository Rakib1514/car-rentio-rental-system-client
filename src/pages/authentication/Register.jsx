import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import { useState } from "react";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const { signUpUser, updateUserProfile, setLoading, signOutUser } = useAuth();

  const navigate = useNavigate();

  const minLengthRegex = /.{6,}/;
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    setErrorMsg("");

    if (!minLengthRegex.test(data.password)) {
      setErrorMsg("At least 6 characters long.");
      return;
    }
    if (!upperCaseRegex.test(data.password)) {
      setErrorMsg("At least one uppercase letter.");
      return;
    }
    if (!lowerCaseRegex.test(data.password)) {
      setErrorMsg("At least one lowercase letter.");
      return;
    }

    signUpUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          updateUserProfile({
            displayName: data.displayName,
            photoURL: data.photoURL,
          }).then(() => {
            axios
              .post("/users", {
                displayName: data.displayName,
                email: data.email,
                photoURL: data.photoURL,
                uid: result.user.uid,
              })
              .then(() => {
                signOutUser();
                setLoading(false);
                navigate("/sign-in");
              });
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:w-1/2 w-full lg:text-left">
          <h1 className="text-5xl font-bold">Join Car-Rentio Today</h1>
          <p className="py-6">
            Create your account and start your journey with seamless car
            rentals.
          </p>
        </div>

        <div className="card bg-base-100 lg:w-1/2 w-full shrink-0 shadow-2xl">
          <GoogleSignIn />
          <div className="flex items-center justify-center">
            <div className="border-gray-400 border-b w-full "></div>
            <span className="px-6">or</span>
            <div className="border-gray-400 border-b w-full"></div>
          </div>
          <p className="text-center px-2">Create an Account</p>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control Name">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="displayName"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control photoUrl">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control email">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control password">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                {errorMsg && <p className="text-red-500 text-xs">{errorMsg}</p>}
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-primary text-white font-openSans tracking-wider hover:text-black">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
