import React from "react";
import {
  PieChartOutlined,
  UserOutlined,
  WalletOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { MenuItem, getMenuItem as getItem } from "../../utils";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items: MenuItem[] = [
  getItem(<Link to="/dashboard">Dashboard</Link>, "1", <PieChartOutlined />),
  getItem("Wallet", "2", <WalletOutlined />, [
    getItem(<Link to="/deposit">Deposit</Link>, "3"),
    getItem(<Link to="/transfer">Transfer</Link>, "4"),
    getItem(<Link to="/withdraw">Withdraw</Link>, "5"),
  ]),
  getItem(<Link to="/profile">Profile</Link>, "6", <UserOutlined />),
  getItem(<Link to="/login">Logout</Link>, "7", <ArrowLeftOutlined />),
];

export const Sidebar: React.FC = () => {
  return (
    <>
      <div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </div>
    </>
  );
};
