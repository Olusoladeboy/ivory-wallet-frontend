import { Button, Card, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiRequest from "../../services/api.service";
import { Storage, StorageKeys } from "../../utils";

const { Title, Text } = Typography;

export const Login: React.FC = () => {
  // const [form] = Form.useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: { [key: string]: string }) => {
    console.log("Success:", values);
    setLoading(!loading);
    try {
      const response: any = await apiRequest({
        url: "/user/login",
        method: "POST",
        data: values,
      });

      const { token } = response.payload;

      Storage.saveItem(StorageKeys.UserToken, token);

      toast("Login Successful", { type: "success" });

      navigate("/");
    } catch (error) {
      console.error(error);
      toast(error.message, { type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography className="flex h-screen">
        <Card className="text-center w-[600px] m-auto">
          <Title>Login</Title>
          <Form
            size="large"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button
                className="bg-blue-700 text-white hover:text-white mt-5"
                type="default"
                block
                htmlType="submit"
                loading={loading}
                size="large"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Text>
            Don't have an account yet?{" "}
            <Link to={"/signup"} className="cursor-pointer underline">
              Register Instead
            </Link>
          </Text>
        </Card>
      </Typography>
    </>
  );
};
