import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import BackButton from "@/components/backButton/BackButton";

import ModalEditEvent from "@/components/modal/modalEditEvent/ModalEditEvent";
import ModalAddEvent from "@/components/modal/modalAddEvent/ModalAddEvent";

import { getItem, setItem } from "@/utils/localStorage";
import { useAuthContext } from "@/hooks/useAuthContext";

const Calendar = () => {
  const { user } = useAuthContext();
  const [events, setEvents] = useState(getItem(`user-events-${user}`) ?? []);
  const [isEditingOpen, setIsEditingOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editedEvent, setEditedEvent] = useState();
  const [newEvent, setNewEvent] = useState({});
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  const handleDateSelect = (selectInfo) => {
    setIsAddOpen(true);
    setNewEvent(selectInfo);
  };

  const handleEventClick = (clickInfo) => {
    setIsEditingOpen(true);
    setEditedEvent(clickInfo);
  };

  const handleEvents = (events) => {
    if (!firstRender) {
      setEvents(events);
      setItem(`user-events-${user}`, events);
    }
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        initialEvents={events}
        select={handleDateSelect}
        eventsSet={handleEvents}
        eventClick={handleEventClick}
      />
      <BackButton />
      <ModalEditEvent
        open={isEditingOpen}
        setIsModalOpen={setIsEditingOpen}
        editedEvent={editedEvent}
      />
      <ModalAddEvent
        open={isAddOpen}
        setIsAddOpen={setIsAddOpen}
        newEvent={newEvent}
      />
    </>
  );
};

export default Calendar;
