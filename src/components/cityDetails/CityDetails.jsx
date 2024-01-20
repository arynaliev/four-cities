import React, { useState } from "react";
import "./cityDetails.style.css";
import { cityInfo } from "../../assets/data/cityInfo";
import Popup from "../popup/Popup";

const CityDetails = () => {
  const [isLAOpen, setIsLAOpen] = useState(false);
  const [isTokyoOpen, setIsTokyoOpen] = useState(false);
  const [isAmsterdamOpen, setIsAmsterdamOpen] = useState(false);
  const [isDubaiOpen, setIsDubaiOpen] = useState(false);

  const onLAClick = () => {
    setIsLAOpen(!isLAOpen);
    setIsTokyoOpen(false);
    setIsAmsterdamOpen(false);
    setIsDubaiOpen(false);
  };

  const onDubaiClick = () => {
    setIsDubaiOpen(!isLAOpen);
    setIsTokyoOpen(false);
    setIsAmsterdamOpen(false);
    setIsLAOpen(false);
  };

  const onAmsterdamClick = () => {
    setIsAmsterdamOpen(!isLAOpen);
    setIsTokyoOpen(false);
    setIsLAOpen(false);
    setIsDubaiOpen(false);
  };

  const onTokyoClick = () => {
    setIsTokyoOpen(!isTokyoOpen);
    setIsLAOpen(false);
    setIsAmsterdamOpen(false);
    setIsDubaiOpen(false);
  };

  return (
    <div className="container">
      <div className="main-img-box">
        <img onClick={onLAClick} src={cityInfo[0].imgUrl.main} alt="City" />
        <img onClick={onTokyoClick} src={cityInfo[3].imgUrl.main} alt="City" />
        <img
          onClick={onAmsterdamClick}
          src={cityInfo[2].imgUrl.main}
          alt="City"
        />
        <img onClick={onDubaiClick} src={cityInfo[1].imgUrl.main} alt="City" />
      </div>
      <div>
        {isLAOpen ? (
          <Popup
            img1={cityInfo[0].imgUrl.img1}
            img2={cityInfo[0].imgUrl.img2}
            img3={cityInfo[0].imgUrl.img3}
            info={cityInfo[0].description}
            closePopup={() => {
              setIsLAOpen(false);
            }}
          />
        ) : null}
        {isTokyoOpen ? (
          <Popup
            img1={cityInfo[3].imgUrl.img1}
            img2={cityInfo[3].imgUrl.img2}
            img3={cityInfo[3].imgUrl.img3}
            info={cityInfo[3].description}
            closePopup={() => {
              setIsTokyoOpen(false);
            }}
          />
        ) : null}
        {isAmsterdamOpen ? (
          <Popup
            img1={cityInfo[2].imgUrl.img1}
            img2={cityInfo[2].imgUrl.img2}
            img3={cityInfo[2].imgUrl.img3}
            info={cityInfo[2].description}
            closePopup={() => {
              setIsAmsterdamOpen(false);
            }}
          />
        ) : null}
        {isDubaiOpen ? (
          <Popup
            img1={cityInfo[1].imgUrl.img1}
            img2={cityInfo[1].imgUrl.img2}
            img3={cityInfo[1].imgUrl.img3}
            info={cityInfo[1].description}
            closePopup={() => {
              setIsDubaiOpen(false);
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CityDetails;
