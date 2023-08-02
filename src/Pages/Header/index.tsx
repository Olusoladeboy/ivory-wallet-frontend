import { Breadcrumb } from "antd";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/deposit": "Deposit",
  "/transfer": "Transfer",
  "/withdraw": "Withdraw",
  "/profile": "Profile",
};

export const Header: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
      key: "home",
    },
  ].concat(extraBreadcrumbItems);

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} />
    </>
  );
};
