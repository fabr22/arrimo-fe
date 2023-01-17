import React, { useState, useEffect } from "react";
import { Button, Input, Modal } from "antd";

const ModalEditEvent = ({ open, setIsModalOpen, editedEvent }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (editedEvent) {
      setValue(editedEvent.event.title);
    }
  }, [editedEvent]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleDelete = () => {
    editedEvent.event.remove();
    setIsModalOpen(false);
  };
  const handleEdit = () => {
    editedEvent.event.setProp("title", value);
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Edit event"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        New title
        <Input
          value={value}
          onChange={handleChange}
          defaultValue={editedEvent ? editedEvent?.event?.title : ""}
        />
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleEdit}>Save</Button>
      </Modal>
    </>
  );
};

export default ModalEditEvent;
