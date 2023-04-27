import { useState } from "react";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  EditOutlined,
  UsergroupAddOutlined,
  HourglassOutlined,
  CameraOutlined,
  DeleteOutlined,
  AppstoreAddOutlined,
  FileAddOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";

const Sidebar = () => {
  const [active, setActive] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleActive = (e: any) => {
    setActive(e.target.id);
  };

  return (
    <div className={collapsed ? styles.togleAvtive : styles.sideBar}>
      <div className={styles.navContent}>
        <img src="/logo.svg" onClick={toggleCollapsed} />
      </div>

      <ul className={styles.navItem}>
        
        <li
          id="1"
          className={active === "1" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <EditOutlined /> <h5> Dashboard </h5>
        </li>
        <li
          id="2"
          className={active === "2" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <UsergroupAddOutlined /> <h5> Item 2</h5>
        </li>
        <li
          id="3"
          className={active === "3" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <HourglassOutlined /> <h5> Item 3</h5>
        </li>
        <p>Other 1</p>
        <li
          id="4"
          className={active === "4" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <CameraOutlined /> <h5> Item 4</h5>
        </li>
        <li
          id="5"
          className={active === "5" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <DeleteOutlined /> <h5>Item 5</h5>
        </li>
        <p>Other 2</p>

        <li
          id="6"
          className={active === "6" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <AppstoreAddOutlined /> <h5>Item 6</h5>
        </li>
        <li
          id="7"
          className={active === "7" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <FileAddOutlined /> <h5>Item 7</h5>
        </li>
        <li
          id="8"
          className={active === "8" ? styles.navActive : styles.navList}
          onClick={handleActive}
        >
          <ClockCircleOutlined /> <h5>Item 8</h5>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;