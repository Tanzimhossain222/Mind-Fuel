
import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (accessToken: string, expiresAt: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

