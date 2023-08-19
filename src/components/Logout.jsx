import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./Auth";

export default function Logout() {
  const navigate = useNavigate();
  const { handleAuthChange } = useAuth();

  useEffect(() => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    localStorage.setItem("isLoggedIn", false);
    handleAuthChange(false);

    navigate("/");
  }, [handleAuthChange, navigate]);

  return null;
}