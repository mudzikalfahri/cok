import React from "react";
import RoomCard from "./roomcard";

function RoomArea({ roomData, user }) {
  return (
    <div className="mt-20">
      <h1>Room available</h1>
      <div className="grid grid-cols-4 space-x-2">
        {roomData.map((room, idx) => (
          <RoomCard key={idx} user={user} room={room} />
        ))}
      </div>
    </div>
  );
}

export default RoomArea;
