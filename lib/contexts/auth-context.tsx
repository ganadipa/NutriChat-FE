import { createContext } from "react";

// Simple auth context example - replace with your actual implementation
export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
});
