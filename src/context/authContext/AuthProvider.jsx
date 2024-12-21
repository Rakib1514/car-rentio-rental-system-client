import AuthContext from "./AuthContext";
import PropTypes from "prop-types";

const AuthProvider = ({children}) => {


  const authInfo = {
    user: "RAKIB",
  }
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider >
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;