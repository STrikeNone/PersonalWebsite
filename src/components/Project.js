import React from "react";
import Navbar from "./Navbar";
import ProjectUnit from "./ProjectUnit";
import image from "../img/projectimage1.jpg";
import image2 from "../img/projectimage2.jpg";
import image3 from "../img/projectimage3.jpg";

function Project() {
  return (
    <div>
      <style>{"body {background-color: #f0f0f5;}"}</style>
      <Navbar />
      <div class="container">
        <div class="item">
          <ProjectUnit
            title="Visualizer: Sorting Algorithms"
            image={image}
            location="https://strikenone.github.io/SortingVisualizer/"
          />
        </div>
        <div class="item">
          <ProjectUnit
            title="The Golden Recommender (Hybrid Filtering)"
            image={image2}
            location="https://github.com/STrikeNone/CZ1016-Introduction-to-Data-Science/tree/main/DS1%20Mini%20Project%20-%20The%20Golden%20Recommender%20(Movie)"
          />
        </div>
        <div class="item">
          <ProjectUnit title="No Project here: Loads Google" image={image3} />
        </div>
        <div class="item">
          <ProjectUnit title="No Project here: Loads Google" image={image3} />
        </div>
        <div class="item">
          <ProjectUnit title="No Project here: Loads Google" image={image3} />
        </div>
      </div>
    </div>
  );
}

export default Project;
