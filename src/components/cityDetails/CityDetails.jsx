import React from "react";
import "./cityDetails.style.css";
import { cityInfo } from "../../assets/data/cityInfo";

const CityDetails = () => {
  return (
    <div className="container">
      <div className="img-box">
        <img src={cityInfo[0].imgUrl} alt="City" />
        <img src={cityInfo[3].imgUrl} alt="City" />
        <img src={cityInfo[2].imgUrl} alt="City" />
        <img src={cityInfo[1].imgUrl} alt="City" />
      </div>
    </div>
  );
};

export default CityDetails;
