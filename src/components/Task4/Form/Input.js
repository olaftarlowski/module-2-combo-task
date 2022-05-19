import React from "react";

const Input = ({ bgColor, color, borderSize, borderRadius, borderColor }) => {
  const colorPalette = {
    alizarin: "#e74c3c",
    clouds: "#ecf0f1",
  };

  const styles = {
    fontSize: "22px",
    margin: "5px",
    backgroundColor: `${colorPalette[bgColor]}`,
    color: `${colorPalette[color]}`,
    border: `${borderSize} solid ${borderColor}`,
    borderRadius: `${borderRadius}`,
  };

  return <input style={styles} type="text" />;
};

export default Input;
