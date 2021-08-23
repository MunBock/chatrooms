import React from "react";

import "./activeuser.css";

const ActiveUser = ({ users }) => {
  return (
    <>
      {users ? (
        <div className="active-user-container">
          <div className="active-user-title">Active user(s):</div>
          <div>
            {users.map(({ name }) => (
              <div className="active-user-content">
                <div key={name} className="active-username">
                  {name}
                </div>
                <div className="active-dot">
                  <i className="fa fa-circle" style={{ fontSize: 8 }}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ActiveUser;
