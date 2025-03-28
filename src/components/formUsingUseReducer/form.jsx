import { useReducer, useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [location, setLocation] = useState();
  const [attendees, setAttendees] = useState([]);

  return (
    <div>
      <input
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
      />
    </div>
  );
};

export default Form;
