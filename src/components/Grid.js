import React from "react";
import "../styles/Home.css";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

function Grid(props) {
  const { icon, title, link } = props;
  return (
    <div class="grid-object">
      <div>{icon}</div>
      <Typography variant="h5" class="grid-object-text">
        {title}
      </Typography>
      <Button
        variant="contained"
        size="large"
        style={{
          color: "#fff",
          backgroundColor: "#4f25f7",
          padding: "14px 44px",
          fontSize: "16px",
          boxShadow: "6px 6px 0 0 #c7d8ed",
        }}
        onClick={() => {
          window.location = `${link}`;
        }}
      >
        View More
      </Button>
    </div>
  );
}

export default Grid;
