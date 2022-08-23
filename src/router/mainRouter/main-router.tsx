import { Navigate, Route, Routes } from "react-router-dom";

import NotFound from "pages/404/not-found";
import App from "pages/app/app";

function MainRouter() {
  return (
    <Routes>
      <Route index element={<Navigate to="/app" />} />
      <Route path="/app" element={<App />} />
      {/* <Route
        path="admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route path="auth">
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin" />} /> */}
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default MainRouter;
