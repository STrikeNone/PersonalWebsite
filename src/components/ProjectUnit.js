import React from "react";
import "../styles/project.css";

function ProjectUnit(props) {
  return (
    <div
      class="card"
      onClick={() => {
        window.open(
          props.location ? props.location : "https://google.com",
          "_blank"
        );
      }}
    >
      <div class="card-image wave-effect waves-block waves-light">
        <img
          src={require(`../img/${props.image}`)}
          class="activator"
          alt=""
        ></img>
      </div>
      <div class="card-content">
        <span class="card-title">{props.title}</span>
      </div>
    </div>
  );
}

export default ProjectUnit;
