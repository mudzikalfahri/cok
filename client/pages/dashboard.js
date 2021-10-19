import React from "react";
import { useForm } from "../utils/hooks/form";

function Dashboard() {
  const [field, handleChange] = useForm();

  const createRoom = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/rooms", field)
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={createRoom}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          onChange={handleChange}
          type="text"
          name="desc"
          placeholder="desc"
        />
        <input
          onChange={handleChange}
          type="text"
          name="game"
          placeholder="game"
        />
        <input
          onChange={handleChange}
          type="text"
          name="slot"
          placeholder="slot"
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Dashboard;
