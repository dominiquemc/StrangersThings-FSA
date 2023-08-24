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
  // Log the user data before calling handleAuthChange
  console.log("User data before setting:", user);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, handleAuthChange }}>

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









