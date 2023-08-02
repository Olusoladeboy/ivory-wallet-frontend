import {
  Button,
  Card,
  Form,
  Row,
  Input,
  Typography,
  Col,
  Table,
  Tag,
  Space,
} from "antd";
import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { DataType } from "../../interfaces";

const { Title } = Typography;
const { Item } = Form;

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export const Transfer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: Record<string, string>) => {
    console.log(values);
    setLoading(true);
  };

  return (
    <>
      <Typography>
        <Card>
          <Title>Transfer</Title>
          <div className="mt-20">
            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={8}>
                  <Item name="email" required label="Email">
                    <Input type="email"></Input>
                  </Item>
                </Col>
                <Col span={8}>
                  <Item name="amount" required label="Amount">
                    <Input type="number"></Input>
                  </Item>
                </Col>
                <Col span={4}>
                  <Item label={" "}>
                    <Button
                      htmlType="submit"
                      block
                      disabled={loading}
                      loading={loading}
                    >
                      Process
                    </Button>
                  </Item>
                </Col>
              </Row>
            </Form>
          </div>
        </Card>
        <Card title="Recent Transfer Transactions" className="mt-10">
          <Table size="large" columns={columns} dataSource={data} />
        </Card>
      </Typography>
    </>
  );
};
