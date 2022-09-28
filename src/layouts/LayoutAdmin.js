import React, { useState } from "react";
import { Layout } from "antd";
import useAuth from "../hooks/useAuth";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/AdminSider/MenuSider";

import "./LayoutAdmin.scss";
import { Navigate } from "react-router-dom";

export default function LayoutAdmin(props) {
  const { children } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const { Header, Content, Footer } = Layout;
  const { user, isLoading } = useAuth();

  if (!user && !isLoading) {
    return (
        <Navigate to="/admin/login/" replace={true}/>
    );
  }

  if (user && !isLoading) {
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
return null;

}
