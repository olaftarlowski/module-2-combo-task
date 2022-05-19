import React, { useEffect, useState } from "react";

const Task3 = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((e) => e + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>functional approach</h3>
      <div>{timer}</div>
    </div>
  );
};

export default Task3;
