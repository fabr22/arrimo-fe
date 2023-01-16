import { getItem, removeItem, setItem } from "@/utils/localStorage";
import { useRouter } from "next/router";
import { createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const user = getItem("arrimo-user");

  const signIn = (userName, password) => {
    setItem("arrimo-user", userName);
    router.push("/");
  };

  const signOut = () => {
    removeItem("arrimo-user");
    router.push("/login");
  };
  const value = { user, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
