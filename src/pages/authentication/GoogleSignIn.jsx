import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = ({ setIsModalOpen }) => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          axios
            .post("/users", {
              displayName: result.user.displayName,
              email: result.user.email,
              photoURL: result.user.photoURL,
              uid: result.user.uid,
            })
            .then(() => {});
          navigate("/");
          setIsModalOpen(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn my-8 w-full border border-gray-400"
    >
      Sign in with Google
      <FcGoogle className="text-3xl" />
    </button>
  );
};

GoogleSignIn.propTypes = {
  setIsModalOpen: PropTypes.func,
};

export default GoogleSignIn;
