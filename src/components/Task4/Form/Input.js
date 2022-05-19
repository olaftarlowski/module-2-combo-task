import React from "react";

const Input = ({ bgColor, color, borderSize, borderRadius, borderColor }) => {
  const styles = {
    fontSize: "22px",
    margin: "5px",
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    border: `${borderSize} solid ${borderColor}`,
    borderRadius: `${borderRadius}`,
  };

  return <input style={styles} type="text" />;
};

export default Input;
