import React from "react";
import Navbar from "./Navbar";
import ProjectUnit from "./ProjectUnit";
import { projects } from "../json/projects";

function Project() {
  return (
    <div>
      <style>{"body {background-color: #f0f0f5;}"}</style>
      <Navbar />
      <div class="container">
        {projects.map((project) => (
          <div class="item">
            <ProjectUnit
              title={project.title}
              location={project.link}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
