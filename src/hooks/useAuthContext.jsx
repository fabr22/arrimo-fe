import { useContext } from "react";

import { AuthContext } from "@/hoc/AuthContext";

export const useAuthContext = () => {
  return useContext(AuthContext);
};
