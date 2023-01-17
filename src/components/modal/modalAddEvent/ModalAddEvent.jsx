import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import { createEventId } from "@/pages/calendar/event-utils";

const ModalAddEvent = ({ open, setIsAddOpen, newEvent }) => {
  const [value, setValue] = useState("");

  const handleOk = () => {
    setIsAddOpen(false);
  };

  const handleCancel = () => {
    setIsAddOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    let calendarApi = newEvent.view.calendar;
    calendarApi.unselect();

    if (value) {
      calendarApi.addEvent({
        id: createEventId(),
        title: value,
        start: newEvent.startStr,
        end: newEvent.endStr,
        allDay: newEvent.allDay,
      });
    }
    setIsAddOpen(false);
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
        Add event
        <Input
          value={value}
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        />
        <Button onClick={handleAdd}>Add</Button>
      </Modal>
    </>
  );
};

export default ModalAddEvent;
