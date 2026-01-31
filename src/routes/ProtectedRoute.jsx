import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(Context);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
