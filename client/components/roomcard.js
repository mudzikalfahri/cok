import axios from "axios";
import React from "react";

function RoomCard({ room, user }) {
  const joinRoom = (id) => {
    const config = {
      headers: { token: `Bearer ${user.accessToken}` },
    };
    const bodyParameters = { userId: user._id };
    axios
      .post(
        "http://localhost:8000/api/rooms/join/" + id,
        bodyParameters,
        config
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-4 border border-black">
      <p>{room.title}</p>
      <p>description: {room.desc}</p>
      <p>game: {room.game}</p>
      <p>
        slot: {room.member.length} / {room.slot}
      </p>
      {!room.member.includes(user._id) ? (
        <button onClick={() => joinRoom(room._id)} className="p-2 bg-green-100">
          Join Room
        </button>
      ) : (
        <button onClick={() => joinRoom(room._id)} className="p-2 bg-red-100">
          Leave Room
        </button>
      )}
    </div>
  );
}

export default RoomCard;
