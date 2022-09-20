import React from "react";
import { Button } from "antd";
// Para la utilización de iconos se necesita instalar "@ant-design/icons" y luego ver documentación para utilizar el elemento
import { MenuUnfoldOutlined, PoweroffOutlined, CloseOutlined } from "@ant-design/icons";

import ViceLogo from "../../../assets/img/png/logo-white.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
const {menuCollapsed, setMenuCollapsed} = props;


  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={ViceLogo}
          alt="Vicente Paredes"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
        {menuCollapsed ? <MenuUnfoldOutlined /> : <CloseOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log('Log Out.')}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
