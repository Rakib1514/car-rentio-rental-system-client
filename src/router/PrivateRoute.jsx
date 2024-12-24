import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <h2>Loading.....</h2>;
  }

  if (!user) {
    return <Navigate to={"/sign-in"} />;
  }

  if (user) {
    return children;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
