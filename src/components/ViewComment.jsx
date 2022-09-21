import React, { useState } from "react";

export default function ViewComment({ viewComment }) {
  const [comment, setComment] = useState("");

  const handleViewClick = (e) => {
    const element = e.target;
    const InputElem = element.previousElementSibling;
    const bntHide = element.nextElementSibling;
    setComment(viewComment);
    InputElem.classList.remove("display-none");
    bntHide.classList.remove("display-none");
    element.classList.add("display-none");
  };

  const handleHideClick = (e) => {
    const element = e.target;
    const bntView = element.previousElementSibling;
    const InputElem = bntView.previousElementSibling;

    InputElem.classList.add("display-none");
    bntView.classList.remove("display-none");
    element.classList.add("display-none");
  };

  return (
    <div className="display-note">
      <p className="display-none">
        <span className="span-flex">Comments: </span>
        {comment}
      </p>
      <button onClick={handleViewClick}>View Comment</button>
      <button className="display-none" onClick={handleHideClick}>
        Hide Comment
      </button>
    </div>
  );
}
