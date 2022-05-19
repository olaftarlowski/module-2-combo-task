import React from "react";

const styles = {
  width: "350px",
  height: "auto",
  border: "1px solid orange",
  padding: "16px",
  margin: "16px",
  backgroundColor: "#232323",
  headline: {
    fontSize: "36px",
  },
  para: {
    fontSize: "22px",
  },
};

const BlogTile = ({ title, intro }) => {
  return (
    <div style={styles}>
      <h2 style={styles.headline}>{title}</h2>
      <p style={styles.para}>
        {intro.length > 25 ? `${intro.substring(0, 25)}...` : intro}
      </p>
    </div>
  );
};

export default BlogTile;
