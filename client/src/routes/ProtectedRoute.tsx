import type { FC, ReactNode } from "react";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../components/Spinner/Spinner";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
