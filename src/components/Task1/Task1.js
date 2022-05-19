import React from "react";
import BlogTile from "./BlogTile";

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const Task1 = () => {
  const posts = [
    {
      id: 1,
      title: "Pilne: Co to był za dzień!",
      intro: "Tego świat jeszcze nie widział",
    },
    {
      id: 2,
      title: "Wszyscy zazdroszą Polakom!",
      intro: "Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił",
    },
    {
      id: 3,
      title: "Adam Małysz Zgolił wąs",
      intro:
        "Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy",
    },
  ];

  return (
    <div style={styles}>
      {posts.map((el) => {
        return <BlogTile key={el.id} title={el.title} intro={el.intro} />;
      })}
    </div>
  );
};

export default Task1;
