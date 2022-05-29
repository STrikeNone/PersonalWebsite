import React, { useState } from "react";
import Navbar from "./Navbar";
import ModuleUnit from "./ModuleUnit";
import ModuleInfo from "./ModuleInfo";
import { Grid } from "@material-ui/core";
import "../styles/Modules.css";
import cs from "../img/cscourse.png";
import mh from "../img/mhcourse.png";
import ue from "../img/ue.png";
import ger from "../img/ger.png";

function Year2() {
  const [state, setState] = useState("false");
  return (
    <div class="overall">
      <style>{"body {background-color: #f0f0f5;}"}</style>
      <Navbar />
      {state !== "false" && (
        <ModuleInfo onButtonChange={setState} stateValue={state} />
      )}
      {state === "false" && (
        <Grid container className="grid" style={{ gap: 25 }} column={1}>
          <Grid container item style={{ gap: 25 }} className="layer">
            <ModuleUnit
              module="MH2100: Calculus III"
              image={mh}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="MH2500: Introduction to Probability and Statistics"
              image={mh}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="CZ2002: Object Oriented Design and Programming"
              image={cs}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="CZ2004: Human Computer Interaction"
              image={cs}
              onButtonChange={setState}
            />
          </Grid>
          <Grid container item style={{ gap: 25 }} className="layer">
            <ModuleUnit
              module="CZ2101: Algorithm Design & Analysis"
              image={cs}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="PS8001: Defence Science"
              image={ger}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="MH3500: Statistics"
              image={mh}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="MH3511: Data Analysis with Computer"
              image={mh}
              onButtonChange={setState}
            />
          </Grid>
          <Grid container item style={{ gap: 25 }} className="layer">
            <ModuleUnit
              module="CZ2006: Software Engineering"
              image={cs}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="CZ2007: Introduction to Databases"
              image={cs}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="HW0228: Scientifc Communication II"
              image={ger}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="LL5001: Singapore Sign Language Level 1"
              image={ue}
              onButtonChange={setState}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Year2;
