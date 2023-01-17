import React, { use, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";

const iconStyle = {
  cursor: "pointer",
};
const ModalEditUser = ({ user, editUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    editUser({ ...values, key: user.key });
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <EditOutlined style={iconStyle} onClick={showModal} />

      <Modal
        title="Edit user"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            initialValue={user.name}
            rules={[
              {
                required: true,
                message: "Please name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            initialValue={user.age}
            rules={[
              {
                pattern: /^-?\d*(\.\d*)?$/,
                message: "Please input only digitals!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Edit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalEditUser;
