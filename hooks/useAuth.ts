import { AuthContext } from "@/lib/contexts/auth-context";
import { useContext } from "react";

export function useAuth() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  function login(username: string, password: string) {
    if (username === "user" && password === "password") {
      setIsAuthenticated(true);
    }
  }

  function logout() {
    setIsAuthenticated(false);
  }

  function signup(username: string, password: string, email: string) {
    if (username && password && email) {
      setIsAuthenticated(true);
    }
  }

  return {
    signup,
    login,
    logout,
    isAuthenticated,
    setIsAuthenticated,
  };
}
