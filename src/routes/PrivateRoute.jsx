import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <process className="progress w-full"></process>;
  }

  if (!isLoading && !user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
