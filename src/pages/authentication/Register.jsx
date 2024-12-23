import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { signUpUser, updateUserProfile, setLoading, user } = useAuth();

  const navigate = useNavigate();
  
  if (user) {
    return <Navigate to={"/"} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

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
                setLoading(false);
                navigate("/");
              });
            alert("Profile Updated");
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:w-1/2 w-full lg:text-left">
          <h1 className="text-5xl font-bold">Create an Account now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in.</p>
        </div>

        <div className="card bg-base-100 lg:w-1/2 w-full shrink-0 shadow-2xl">
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
                type="link"
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
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
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
