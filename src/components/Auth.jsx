import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("username") && localStorage.getItem("password")
  );

  const handleAuthChange = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleAuthChange }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
