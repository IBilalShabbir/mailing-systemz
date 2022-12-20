import { Navigate, Outlet } from "react-router-dom";

import { useAtom } from "jotai";
import { userAtom } from "../global";

export default function Protected() {
  const [user, setUser] = useAtom(userAtom);
  return user !== null ? <Outlet /> : <Navigate to="/" replace />;
}
