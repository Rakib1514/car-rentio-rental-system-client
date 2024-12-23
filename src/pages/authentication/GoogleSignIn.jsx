import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import PropTypes from "prop-types";
import axios from "axios";

const GoogleSignIn = ({ setIsModalOpen }) => {
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          setIsModalOpen(false);
          axios
            .post("/users", {
              displayName: result.user.displayName,
              email: result.user.email,
              photoURL: result.user.photoURL,
              uid: result.user.uid,
            })
            .then((res) => alert(res.data));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <button onClick={handleGoogleSignIn} className="w-full btn my-8 ">
      Sign in with Google
      <FcGoogle className="text-3xl" />
    </button>
  );
};

GoogleSignIn.propTypes = {
  setIsModalOpen: PropTypes.func,
};

export default GoogleSignIn;
