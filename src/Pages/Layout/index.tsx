import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";
import { Sidebar, Header as IHeader } from "..";

const { Header, Sider, Content } = Layout;

export const LayoutPage: React.FC = () => {
  return (
    <>
      <Layout className="h-full w-full">
        <Sider collapsible>
          <Sidebar></Sidebar>
        </Sider>
        <Layout>
          <Header className="bg-[#FFF]">
            <IHeader></IHeader>
          </Header>
          <Content className="bg-[#ececec] p-20">
            <Outlet />
          </Content>
          {/* <Footer className="bg-[#FFF]">Footer</Footer> */}
        </Layout>
      </Layout>
    </>
  );
};
