import React from "react";
import { Layout } from "antd";

export default function LayoutSignIn(props) {
  const { children } = props;
  const { Content } = Layout;

  return (
    <Layout>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
