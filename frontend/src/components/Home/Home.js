import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <div className="home-place">
        <div className="home-container">
          <input
            type="text"
            placeholder="Name"
            className="join-input"
            maxLength="23"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room (For example: 1234)"
            className="join-input"
            maxLength="23"
            onChange={(e) => setRoom(e.target.value)}
          />
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/activeroom?name=${name}&room=${room}`}
            className="join-button"
          >
            <div className="join-button-text">Join room</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
