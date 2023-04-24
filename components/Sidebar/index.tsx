import { useState } from "react";
import { Menu, Button } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
  NotificationOutlined,
  AppstoreOutlined,
  DashboardOutlined,
  HeartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
 

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 156, height: "90vh" }}>
      <Menu mode="inline" theme="light" inlineCollapsed={collapsed}>
        <div style={{ textAlign: "center", justifyContent: 'flex-start', display: 'flex', marginLeft: '20px' }}>
        
          <img
            src="/logo.svg"
            onClick={toggleCollapsed}
            style={{
              width: "40px",
              height: "40px",
              color: "#040404",
              marginBottom: "50px",
              cursor: "pointer",
              marginTop: "38px",
            }}
          />
        </div>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Item 1
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          Item 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Item 3
        </Menu.Item>
        <Menu.Item key="4" icon={<SearchOutlined />}>
          Item 3
        </Menu.Item>
        {!collapsed && <p style={{ textAlign: "center" }}>other 1</p>}
        <Menu.Item key="5" icon={<ShoppingCartOutlined />}>
          Item 4
        </Menu.Item>
        <Menu.Item key="6" icon={<MessageOutlined />}>
          Item 5
        </Menu.Item>
        {!collapsed && <p style={{ textAlign: "center" }}>other 2</p>}
        <Menu.Item key="7" icon={<NotificationOutlined />}>
          Item 6
        </Menu.Item>
        <Menu.Item key="8" icon={<AppstoreOutlined />}>
          Item 7
        </Menu.Item>
        <Menu.Item key="9" icon={<DashboardOutlined />}>
          Item 8
        </Menu.Item>
        {/* <Menu.Item key="10" icon={<HeartOutlined />}>
          Favorites
        </Menu.Item> */}
      </Menu>
    </div>
  );
};

export default Sidebar;
