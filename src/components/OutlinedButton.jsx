import React from "react";
import "../styles/OutlinedButton.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight as faArrowRightRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const OutlinedButton = ({ text, onClick}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`outlined-button ${isHovered ? "hovered" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}

export default OutlinedButton;

