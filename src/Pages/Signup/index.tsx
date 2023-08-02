import { Button, Card, Form, Input, Typography, Row, Col } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export const Signup: React.FC = () => {
  // const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: { [key: string]: string }) => {
    console.log("Success:", values);
    setLoading(!loading);
  };

  return (
    <>
      <Typography className="flex h-screen">
        <Card className="text-center w-[600px] m-auto">
          <Title>Signup</Title>

          <Form
            size="large"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                >
                  <Input type="text" placeholder="First Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your Last Name!" },
                  ]}
                >
                  <Input type="text" placeholder="Last Name" />
                </Form.Item>
              </Col>
            </Row>

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
            Have an account?{" "}
            <Link to={"/login"} className="cursor-pointer underline">
              Login
            </Link>
          </Text>
        </Card>
      </Typography>
    </>
  );
};
