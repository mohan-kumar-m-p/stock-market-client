import { createContext, useContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = AuthService.getToken();

  const [authenticated, setAuthenticated] = useState(token ? true : false);

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [token]);

  const login = () => {
    setAuthenticated(true);
  };

  // Function to log out
  const logout = () => {
    setAuthenticated(false);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children} {/* Render the children */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
