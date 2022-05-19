import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Button = ({ bgColor, color, icon, children }) => {
  const styles = {
    width: "120px",
    height: "46px",
    cursor: "pointer",
    fontSize: "20px",
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  return (
    <button style={styles}>
      <FontAwesomeIcon icon={icon === "user" ? faUser : ""} />
      {children}
    </button>
  );
};

export default Button;
