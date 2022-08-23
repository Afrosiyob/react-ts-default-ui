import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { _IProtectedRoute } from "core/interfaces/interfaces";

function ProtectedRoute({ children }: _IProtectedRoute): ReactElement {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    return <Navigate to="/auth/login" />;
  }
  return children;
}
export default ProtectedRoute;
