import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: React.ReactElement }) => {
  const auth_token = localStorage.getItem("access_token");
  return auth_token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
