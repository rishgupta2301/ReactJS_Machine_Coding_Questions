import { useReducer, useState } from "react";

const Form = () => {
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [startDate, setStartDate] = useState();
  //   const [endDate, setEndDate] = useState();
  //   const [location, setLocation] = useState();
  //   const [attendees, setAttendees] = useState([]);

  const [event, updateEvent] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      // Validation: Ensure endDate is not before startDate
      if (newEvent.startDate > newEvent.endDate) {
        newEvent.startDate = newEvent.endDate;
      }

      // Validation: Limit title to 100 characters
      if (newEvent.title.length > 100) {
        newEvent.title = newEvent.title.substring(0, 100);
      }

      return newEvent;
    },
    { title: "", description: "", startDate: null, endDate: null }
  );

  return (
    <div>
      {/* <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event Description"
      />
      <input
        value={startDate}
        type="date"
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Event Description"
      />
      <input
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="Event Description"
      />
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Event Description"
      /> */}

      <input
        value={event.title}
        onChange={(e) => updateEvent({ title: e.target.value })}
        placeholder="Event Title"
      />
      <input
        value={event.description}
        onChange={(e) => updateEvent({ description: e.target.value })}
        placeholder="Event Description"
      />
      <input
        type="date"
        value={event.startDate || ""}
        onChange={(e) => updateEvent({ startDate: e.target.value })}
      />
      <input
        type="date"
        value={event.endDate || ""}
        onChange={(e) => updateEvent({ endDate: e.target.value })}
      />

        <p>Title: {event.title}</p>
        <p>Desc: {event.description}</p>
        <p>Start Date: {event.startDate}</p>

    </div>
  );
};

export default Form;
