import React from "react";

import "./roomtitle.css";

const RoomTitle = ({ room }) => (
  <div className="room-title-place">
    <div className="room-title-container">
      <div>
        Room <span className="room-title">{room}</span>
      </div>
      <div className="active-room-dot">
        <i className="fa fa-circle" style={{ fontSize: 8 }}></i>
      </div>
    </div>
    <a href="/" className="room-close">
      <i className="fa fa-times fa-lg"></i>
    </a>
  </div>
);

export default RoomTitle;
