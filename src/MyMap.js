import React from "react";
import users from "./MyData";
import "./MyMap.css";

function MyMap() {
  return (
    <div className="MyMap">
      <h4 className="text-center text-info p-3 bg-light rounded-3">
        This is the homework 91
      </h4>
      {users.map((user, index) => {
        return (
          <h5 key={index} className="m-2">
            <span className="text-info p-2"> {user.name} </span> have a number{" "}
            <span className="text-warning p-2">{user.rollNo}</span>
            <br />
            <h6 className="fw-lighter fst-italic text-center p-2">
              He/She is {user.age} years old
            </h6>
          </h5>
        );
      })}
    </div>
  );
}

export default MyMap;
