import { Outlet } from "react-router-dom";
import Header from "@/common_components/header";
import Menu from "@/common_components/menu";
import useIsShowMenu from "@/hooks/useIsShowMenu";
import useIsShowHeader from "@/hooks/useIsShowHeader";
function Layout() {
  const is_show_menu = useIsShowMenu();
  const is_show_header = useIsShowHeader();
  return (
    <div className="layout">
      {is_show_header ? (
        <div className="header_warp">
          {" "}
          <Header />
        </div>
      ) : null}{" "}
      {is_show_menu ? (
        <div className="nav-wrapp">
          {" "}
          <Menu />
        </div>
      ) : null}
      <div className="outlet_warp">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
