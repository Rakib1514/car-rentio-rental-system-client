import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (userDetails) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userDetails);
  };

  // !Sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.uid) {
        const user = { uid: currentUser.uid };

        axios.post("/jwt", user, { withCredentials: true }).then((res) => {
          console.log("signed", res.data);
          setLoading(false);
        });
      } else {
        axios.post("/sign-out", {}, { withCredentials: true }).then((res) => {
          console.log("signed out", res.data);
          setLoading(false);
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    signUpUser,
    signInUser,
    signOutUser,
    user,
    loading,
    updateUserProfile,
    signInWithGoogle,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
