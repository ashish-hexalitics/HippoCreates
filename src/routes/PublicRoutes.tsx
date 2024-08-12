import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }: { children: React.ReactElement }) => {
  const auth_token = localStorage.getItem("access_token");
  return !auth_token ? children : <Navigate to="/admin/dashboard" />;
};

export default PublicRoutes;
