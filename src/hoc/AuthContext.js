import { getItem, setItem } from "@/utils/localStorage";
import { createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const user = getItem("arrimo-user");
  const signIn = (userName, password) => {
    setItem("arrimo-user", userName);
  };
  const value = { user, signIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
