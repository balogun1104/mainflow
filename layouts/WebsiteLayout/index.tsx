import React from "react";
import { StylesWrapper } from "./styles";
import DashBoard from "../../components/DashBoard";
import Sidebar from "../../components/Sidebar";

const WebsiteLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <DashBoard />
    </div>
  );
};

export default WebsiteLayout;
