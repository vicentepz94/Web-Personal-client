import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/AdminSider/MenuSider";
import { getAccessToken } from "../api/auth";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { children } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const { Header, Content, Footer } = Layout;


  const token = getAccessToken();
  console.log(token);

  //  console.log("Access Token " + getAccessToken);
  //  const refreshToken = getRefreshToken();
  //  console.log("Refresh Token " + refreshToken);

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-admin"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">{children}</Content>
        <Footer className="layout-admin__footer">Vicente Paredes</Footer>
      </Layout>
    </Layout>
  );
}
