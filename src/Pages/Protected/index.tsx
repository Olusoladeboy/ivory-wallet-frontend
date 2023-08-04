import React from "react";
import { Navigate } from "react-router";
import { Storage, StorageKeys } from "../../utils";

type ChildrenProp = {
  children: React.ReactNode;
};

export const Protected: React.FC<ChildrenProp> = ({
  children,
}: ChildrenProp) => {
  const token = Storage.getItem(StorageKeys.UserToken);

  if (token) {
    return children;
  }

  return <Navigate to={"/login"} replace />;
};
