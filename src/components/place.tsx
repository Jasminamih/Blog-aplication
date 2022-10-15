import React from "react";
import { placeType } from "./place-container";

const Place = ({ place, desc, img }: placeType) => {
  return (
    <div className="place-card">
      <div className="place-text">
        <h2 className="place-title">{place}</h2>
        <p className="place-desc">{desc}</p>
      </div>
      <img className="place-img" src={img} alt="" />
    </div>
  );
};

export default Place;
