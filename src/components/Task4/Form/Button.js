import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Button = ({ bgColor, color, icon, children }) => {
  const colorPalette = {
    alizarin: "#e74c3c",
    clouds: "#ecf0f1",
    belize: "#2980b9",
    emerald: "#2ecc71",
    amethyst: "#9b59b6",
  };

  const styles = {
    width: "120px",
    height: "46px",
    cursor: "pointer",
    fontSize: "20px",
    margin: "4px",
    backgroundColor: `${colorPalette[bgColor]}`,
    color: `${colorPalette[color]}`,
  };

  return (
    <button style={styles}>
      <FontAwesomeIcon icon={icon === "user" ? faUser : ""} />
      {children}
    </button>
  );
};

Button.defaultProps = {
  bgColor: "belize",
  color: "clouds",
};

export default Button;
