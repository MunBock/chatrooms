import React from "react";

import "./message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const currentUsername = name.trim().toLowerCase();

  if (user === currentUsername) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message place-start">
      <p className="sent-text padding-right">{currentUsername}</p>
      <div className="message-box background-light">
        <p className="message-text">{text}</p>
      </div>
    </div>
  ) : (
    <div className="message place-end">
      <div className="message-box background-purple">
        <p className="message-text">{text}</p>
      </div>
      <p className="sent-text padding-left">{user}</p>
    </div>
  );
};

export default Message;
