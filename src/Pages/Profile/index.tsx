import { Button, Card, Divider, Form, Input, Typography } from "antd";

const { Item } = Form;
const { Title } = Typography;

export const Profile: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>My Profile</Title>
        <div className="mt-10">
          <Card className="p-20">
            <Form>
              <Item label="First Name" name="firstName" required>
                <Input type="text"></Input>
              </Item>
              <Item label="Last Name" name="lastName" required>
                <Input type="text"></Input>
              </Item>
              <Item label="Email" name="email" required>
                <Input type="email"></Input>
              </Item>
              <Item className="text-end">
                <Button htmlType="submit">Update</Button>
              </Item>
            </Form>
            <Divider className="m-10"></Divider>
            <Form>
              <Item label="Old Password" name="oldPassword" required>
                <Input type="password"></Input>
              </Item>
              <Item label="New Password" name="newPassword" required>
                <Input type="password"></Input>
              </Item>
              <Item className="text-end">
                <Button htmlType="submit">Reset</Button>
              </Item>
            </Form>
          </Card>
        </div>
      </Typography>
    </>
  );
};
