import React from "react";
import "./GreenCard.css";

const GreenCard = () => {
  return (
    <div className="green-card-container">
      <div className="title">
        <h2>What's included in each plan</h2>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate
        sint repellendus fugit sunt quia odit accusamus vitae, obcaecati,
        praesentium cum, exercitationem incidunt.
      </div>
      <div className="benefits-list">
        <ul>
          <li> 10-year warranties</li>
          <li> Customer service line</li>
          <li>Power 270W-400W</li>
          <li>60/120 cells</li>
        </ul>
      </div>
      <div className="subscription">
        <button>Get started</button>
        <span>Learn more</span>
      </div>
    </div>
  );
};

export default GreenCard;
