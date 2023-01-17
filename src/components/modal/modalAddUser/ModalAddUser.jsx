import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

const ModalAddUser = ({ addNewUser }) => {
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
    addNewUser(values);
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add new user
      </Button>
      <Modal
        title="Add new user"
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
            rules={[
              {
                required: true,
                message: "Please enter a name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
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
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalAddUser;
