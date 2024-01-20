import React from "react";
import PropTypes from "prop-types";
import "./popup.style.css";

const Popup = ({ info, img1, img2, img3, closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup-text">
        <div className="popup-img-box">
          <img id="img1" src={img1} alt="City" />
          <img id="img2" src={img2} alt="City" />
          <img id="img3" src={img3} alt="City" />
        </div>
        <p>{info}</p>
        <button id="close-popup" onClick={closePopup}>
          X
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  info: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default Popup;
