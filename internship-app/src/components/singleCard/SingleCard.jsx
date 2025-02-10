import React from "react";
import "./SingleCard.css";

const SingleCard = ({ cardData }) => {
  return (
    <div className="card-solo">
      <div className="package">
        <h2>{cardData.packageChoice}</h2>
        <p className="description-package">{cardData.packageDescription}</p>
      </div>
      <div className="price">{cardData.price}</div>
    </div>
  );
};

export default SingleCard;
