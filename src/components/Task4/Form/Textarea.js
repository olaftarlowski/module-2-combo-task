import React from "react";

const Textarea = ({
  bgColor,
  color,
  borderSize,
  borderRadius,
  borderColor,
}) => {
  const styles = {
    fontSize: "18px",
    margin: "5px",
    backgroundColor: `${bgColor}`,
    color: `${color}`,
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
