import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

import "./MenuSider.scss";

export default function MenuSider(props) {
 const {menuCollapsed} = props;
  //se utiliza destructuring de {Sider} que se encuentra dentro del import Layout, de otra manera seria <Layout.Sider></Layout.Sider>
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed} trigger={null}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <HomeOutlined />
          <span className="nav-text"> Home </span>
          <Link to="/admin" />
        </Menu.Item>

        <Menu.Item key="2">
          <MenuOutlined />
          <span className="nac-text"> Menu Web </span>
          <Link to="/admin/menu-web" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
