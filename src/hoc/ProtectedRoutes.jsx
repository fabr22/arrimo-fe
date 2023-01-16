import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
  const { user } = useAuthContext();
  let router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);
  return children;
};

export default ProtectedRoutes;
