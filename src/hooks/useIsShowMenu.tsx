import { useLocation } from "react-router-dom";
import { type RouterKeys, routerData } from "@/config";
export default function useIsShowMenu() {
  const location = useLocation();
  const key: RouterKeys = location.pathname.split("/")[1] as RouterKeys;
  if (!key) return false;
  if (routerData[key].hasMenu) return true;
  else return false;
}
