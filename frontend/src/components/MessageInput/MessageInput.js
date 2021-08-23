import React from "react";

import "./messageinput.css";

const MessageInput = ({ setMessage, sendMessage, message }) => (
  <form className="message-form">
    <input
      className="message-input"
      type="text"
      placeholder="Type something..."
      value={message}
      maxLength="64"
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button className="send-message-button" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default MessageInput;
