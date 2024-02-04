import React from "react";
import "../styles/end.css";
import fighter from "../images/fighter.png";
import "../images/fighter.png";

export default function End() {
  return (
    <div className="end">
      <div className="end_heading">
        <h1>Latest News</h1>
      </div>

      <div className="end_wrapper">
        <div className="end_img">
          <img src={fighter} alt="fighters" />
        </div>
        <div className="end_content">
          <h2>
            News Title Lorem Ipsum
            <br /> Dolor Sit Amet
          </h2>
        </div>

        <div className="end_content_down">
          <h4>1 Hours Ago</h4>
          <h4>CNN Indonesia</h4>
        </div>
      </div>
    </div>
  );
}
