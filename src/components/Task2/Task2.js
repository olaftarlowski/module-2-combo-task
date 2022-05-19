import React from "react";
import { v4 as uuidv4 } from "uuid";

const styles = {
  padding: "30px 40px",
  border: "2px solid green",
};

const Task2 = () => {
  const uuidv4Result = uuidv4();

  return <div style={styles}>{uuidv4Result}</div>;
};

export default Task2;
