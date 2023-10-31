import React, { useEffect, useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { RouterKeys, routerData, superAdminMenus } from "@/config";
import { useNavigate } from "react-router-dom";
import usePathKey from "@/hooks/usePathKey";

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
  },
];

const App: React.FC = () => {
  const path_key = usePathKey();
  const Navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const menus = superAdminMenus;
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    Navigate(routerData[e.key as RouterKeys].path);
  };
  useEffect(() => {
    if (path_key) {
      console.log(path_key);
      setCurrent(path_key);
    }
  }, [path_key]);

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={menus}
    />
  );
};

export default App;
