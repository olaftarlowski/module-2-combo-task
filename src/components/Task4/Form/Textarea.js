import React from "react";

const Textarea = ({
  bgColor,
  color,
  borderSize,
  borderRadius,
  borderColor,
}) => {
  const colorPalette = {
    alizarin: "#e74c3c",
    clouds: "#ecf0f1",
  };

  const styles = {
    fontSize: "18px",
    margin: "5px",
    backgroundColor: `${colorPalette[bgColor]}`,
    color: `${colorPalette[color]}`,
    border: `${borderSize} solid ${borderColor}`,
    borderRadius: `${borderRadius}`,
  };

  return (
    <textarea
      style={styles}
      name="testArea"
      id="testArea"
      cols="30"
      rows="10"
    ></textarea>
  );
};

export default Textarea;
