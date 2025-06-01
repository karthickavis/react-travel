
import { createContext, useCallback, useContext, useMemo } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = useCallback((data) => {
    setUser(data);
    // Navigate immediately after login (optional)
    navigate("/home", { replace: true });
  }
,[]);

  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  },[]);

  const value = useMemo(() => ({ user, login, logout }), [user,login,logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect unauthenticated users to login page immediately
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
};
