import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const handleAuthChange = (loggedIn, userData = null) => {
    setIsLoggedIn(loggedIn);
    if (userData) {
      console.log("AUTH USER DATA BEFORE SETTING", userData);
      setUser(userData);
    }
  };

  console.log("User data before setting:", user);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, handleAuthChange }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}





