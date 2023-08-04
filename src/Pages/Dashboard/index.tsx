import { Card, Col, Row, Table, Typography, Tag, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { currencyFormatter } from "../../utils";
import { DataType } from "../../interfaces";
import { useEffect, useState } from "react";
import apiRequest from "../../services/api.service";

const { Text } = Typography;

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Reference",
    dataIndex: "reference",
    key: "reference",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        <Tag color={status === "successful" ? "green" : "red"} key={status}>
          {status.toUpperCase()}
        </Tag>
      </>
    ),
  },
];

export const Dashboard: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const getBalance = async () => {
    const response = await apiRequest({
      url: "/wallet/me",
      method: "GET",
    });

    if (response.success) {
      setBalance(response.payload[0].balance);
    }
  };

  const getAllTransactions = async () => {
    const response = await apiRequest({
      url: "/transactions/me",
      method: "GET",
    });

    if (response.success) {
      setTransactions(response.payload);
    }

    console.log(response);
  };

  useEffect(() => {
    getBalance();
    getAllTransactions();
  }, []);

  return (
    <>
      <div>
        <Typography>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Wallet Balance" bordered={false}>
                <div className="text-end">
                  <Text>{currencyFormatter("NGN", balance)}</Text>
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
            <Table size="large" columns={columns} dataSource={transactions} />
          </Card>
        </Typography>
      </div>
    </>
  );
};
