import React from "react";
import "./Banner.css";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="bannerWrapper">
        <div className="banner">
          <h2>
            Switch to solar today!
            <FaArrowRight />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
