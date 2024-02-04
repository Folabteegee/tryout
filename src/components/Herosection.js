import React from "react";
import "../styles/herosection.css";
import swimmer from "../images/swimmer.png";

export default function Herosection() {
  return (
    <div className="hero">
      <div className="herosection_heading">
        <h1>Hot Topics</h1>
      </div>

      <div className="image_wrapper">
        <div
          className="hero_img"
          style={{
            // backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6G-gtzqlFDMYHBYfQdfdceuGRBupXxIscspYhU4JS3DWgtPQnnb-xsjrOE9rD6dGiHI&usqp=CAU)`,
            backgroundImage: ` linear-gradient(180deg, rgba(0, 0, 0, 0.00) 42.25%, rgba(0, 0, 0, 0.65) 100%), url(${swimmer})`,
            backgroundSize: `cover`,
            height: `fit-content`,
          }}
        >
          <h2 className="hero_content">
            Massa tortor nibh nulla
            <br /> condimentum imperdiet <br /> scelerisque...
          </h2>
          <div className="hero_content_down">
            <h4>2 Hours Ago</h4>
            <h4>CNN Indonesia</h4>
          </div>
        </div>

        <div className="hero_content_2">
          <h3>
            <span className="nisi">Nisi,</span> sagittis aliquet sit rutrum.
            Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis
            nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas
            nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla
            condimentum imperdiet scelerisque... read more
          </h3>
        </div>
      </div>
    </div>
  );
}
