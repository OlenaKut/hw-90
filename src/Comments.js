import React from "react";
import comments from "./MyComments";
import foto from "./mouse.png";
import "./Comments.css";

function Comments() {
  return (
    <div className="Comments">
      <div className="text-center">
        <h3>Homework 92</h3>
        <img src={foto} className="App-foto m-3 img-fluid" alt="foto"></img>
      </div>
      <h5 className="fst-italic text-center text-success text-muted">
        You can leave your comments here:{" "}
      </h5>

      {comments.map((comment, index) => {
        return (
          <h6 key={index} className="m-3 p-2 shadow rounded">
            <span className="p-2 text-muted">{comment.author}:</span>
            <span className="p-2">"{comment.title}"</span>
            <br />
            <h5 className="fw-lighter fst-italic p-2">{comment.comtent}</h5>
            <span className="p-2 text-muted">👍{comment.like}</span>
            <span className="p-2 text-muted">👎 {comment.dislike}</span>
          </h6>
        );
      })}
    </div>
  );
}
export default Comments;
