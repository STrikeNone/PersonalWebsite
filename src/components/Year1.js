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

function Year1() {
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
              module="HW0128: Scientific Communication"
              image={ger}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="MH1805: Calculus"
              image={mh}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="MH1812: Discrete Mathematics"
              image={mh}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="CZ1103: Introduction to Computational Thinking"
              image={cs}
              onButtonChange={setState}
            />
          </Grid>
          <Grid container item style={{ gap: 25 }} className="layer">
            <ModuleUnit
              module="LF9001: French Level 1"
              image={ue}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="HE1003: Basic Math for Economists"
              image={ue}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="MH2802: Linear Algebra for Data Scientist"
              image={mh}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="MH8300: Its a Discreetly Discrete World"
              image={ue}
              onButtonChange={setState}
            />
          </Grid>
          <Grid container item style={{ gap: 25 }} className="layer">
            <ModuleUnit
              module="CZ1107: Data Structures and Algorithms"
              image={cs}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="CZ1016: Introduction to Data Science"
              image={cs}
              onButtonChange={setState}
            />
            <ModuleUnit
              module="BU8501: Marketing in the 21st Century"
              image={ger}
              onButtonChange={setState}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Year1;
