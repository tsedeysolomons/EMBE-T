import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
const RequireAuth = () => {
  const location = useLocation();

  const token = useSelector(selectCurrentToken);

  

  console.log({ token });

  const content = token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );

  return content;
};
export default RequireAuth;
