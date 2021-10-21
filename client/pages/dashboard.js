import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/form";
import nookies from "nookies";
import axios from "axios";

function Dashboard() {
  const [token, setToken] = useState("");
  const [roomData, setRoomData] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    const accessToken = nookies.get(null, "user").token;
    setToken(accessToken);
    const session = JSON.parse(localStorage.getItem("user"));
    setUser(session);
    axios
      .get("http://localhost:8000/api/rooms")
      .then((res) => setRoomData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [field, handleChange] = useForm();

  const createRoom = (e) => {
    e.preventDefault();
    const config = {
      headers: { token: `Bearer ${token}` },
    };
    const bodyParameters = field;
    axios
      .post("http://localhost:8000/api/rooms", bodyParameters, config)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={createRoom}>
        <input
          className="border border-black px-4 py-2"
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          className="border border-black px-4 py-2"
          onChange={handleChange}
          type="text"
          name="desc"
          placeholder="desc"
        />
        <input
          className="border border-black px-4 py-2"
          onChange={handleChange}
          type="text"
          name="game"
          placeholder="game"
        />
        <input
          className="border border-black px-4 py-2"
          onChange={handleChange}
          type="text"
          name="slot"
          placeholder="slot"
        />
        <button type="submit">add room</button>
      </form>

      <div className="mt-20">
        <h1>Room available</h1>
        <div className="">
          {roomData.map((room, idx) => (
            <div key={idx} className="p-4 border border-black">
              <p>{room.title}</p>
              <p>description: {room.desc}</p>
              <p>game: {room.game}</p>
              <p>
                slot: {room.member.length} / {room.slot}
              </p>
              {!room.member.includes(user._id) ? (
                <button className="p-2 bg-green-100">Join Room</button>
              ) : (
                <button className="p-2 bg-red-100">Leave Room</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
