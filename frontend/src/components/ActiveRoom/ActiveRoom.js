import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";

import RoomTitle from "../RoomTitle/RoomTitle";
import ActiveUser from "../ActiveUser/ActiveUser";
import MessageContainer from "../MessageContainer/MessageContainer";
import MessageInput from "../MessageInput/MessageInput";

import "./activeroom.css";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

let socket;

const ActiveRoom = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);

      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="room-container">
      <RoomTitle room={room} />
      <div className="content-container">
        <div className="user-container">
          <ActiveUser users={users} />
        </div>
        <div className="message-input-place">
          <div className="message-container-place">
            <MessageContainer messages={messages} name={name} />
          </div>
          <div className="input-container-place">
            <MessageInput
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveRoom;
