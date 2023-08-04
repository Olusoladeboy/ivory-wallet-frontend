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
} from "antd";
import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { DataType } from "../../interfaces";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
import apiRequest from "../../services/api.service";

const { Title } = Typography;
const { Item } = Form;

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

export const Withdraw: React.FC = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [transactions, setTransactions] = useState([]);

  const onFinish = async (values: Record<string, string>) => {
    console.log(values);
    setLoading(true);
    try {
      await apiRequest({
        url: "/transactions/withdrawal",
        method: "POST",
        data: values,
      });

      toast("Successful", { type: "success" });

      form.resetFields();

      await getDepositTransactions();
    } catch (error) {
      console.error(error);
      toast(error.message, { type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const getDepositTransactions = async () => {
    const response = await apiRequest({
      url: "/transactions/me?type=withdrawal",
      method: "GET",
    });

    if (response.success) {
      setTransactions(response.payload);
    }

    console.log(response);
  };

  useEffect(() => {
    getDepositTransactions();
  }, []);

  return (
    <>
      <Typography>
        <Card>
          <Title>Withdrawal</Title>
          <div className="mt-20">
            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={8}>
                  <Item name="amount" required label="Amount">
                    <Input type="number"></Input>
                  </Item>
                </Col>
                <Col span={4}>
                  <Item name="bank" required label="Bank">
                    <Input type="text"></Input>
                  </Item>
                </Col>
                <Col span={4}>
                  <Item name="accountNumber" required label="Account Number">
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
        <Card title="Recent Withdrawal Transactions" className="mt-10">
          <Table size="large" columns={columns} dataSource={transactions} />
        </Card>
      </Typography>
    </>
  );
};
