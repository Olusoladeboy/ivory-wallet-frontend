import { Card, Col, Row, Table, Typography, Tag, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { currencyFormatter } from "../../utils";
import { DataType } from "../../interfaces";

const { Text } = Typography;

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
];

export const Dashboard: React.FC = () => {
  return (
    <>
      <div>
        <Typography>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Wallet Balance" bordered={false}>
                <div className="text-end">
                  <Text>{currencyFormatter("NGN", 1000)}</Text>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Pending Withdrawal" bordered={false}>
                <div className="text-end">
                  <Text>{currencyFormatter("NGN", 0)}</Text>
                </div>
              </Card>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Card title="All Transactions" className="mt-10">
            <Table size="large" columns={columns} dataSource={data} />
          </Card>
        </Typography>
      </div>
    </>
  );
};
