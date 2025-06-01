// import { createContext, useContext, useMemo, useEffect, useState } from "react";
// import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useLocalStorage } from "./useLocalStorage";

// // Create and export the context itself
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useLocalStorage("user", null);
//   const [pendingNavigation, setPendingNavigation] = useState(null);
//   const navigate = useNavigate();

//   // Handle navigation in useEffect
//   useEffect(() => {
//     if (pendingNavigation) {
//       const { path, options } = pendingNavigation;
//       navigate(path, options);
//       setPendingNavigation(null);
//     }
//   }, [pendingNavigation, navigate]);

//   // call this function when you want to authenticate the user
//   const login = async (data) => {
//     setUser(data);
//     setPendingNavigation({ path: "/home", options: {} });
//   };

//   // call this function to sign out logged in user
//   const logout = () => {
//     setUser(null);
//     setPendingNavigation({ path: "/", options: { replace: true } });
//   };

//   const value = useMemo(
//     () => ({
//       user,
//       login,
//       logout,
//     }),
//     [user]
//   );
  
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const RequireAuth = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   useEffect(() => {
//     if (!user) {
//       navigate("/", { replace: true, state: { from: location } });
//     }
//   }, [user, navigate, location]);



  
//   if (!user) {
//     // Return null or a loading indicator while the navigation happens in useEffect
//    return null;
//   }
   
  
//   return <Outlet />;
// };



import { createContext, useContext, useMemo, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = (data) => {
    setUser(data);
    // Navigate immediately after login (optional)
    navigate("/home", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

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
