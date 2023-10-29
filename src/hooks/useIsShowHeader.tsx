import { useLocation } from "react-router-dom";

export default function useIsShowHeader() {
  const location = useLocation();
  if (location.pathname === "/login") return false;
  else return true;
}
