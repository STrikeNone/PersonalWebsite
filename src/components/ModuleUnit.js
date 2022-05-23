import React, { useCallback } from "react";
import "../styles/ModuleUnit.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function ModuleUnit(props) {
  const { onButtonChange, module } = props;
  const handleStateChange = useCallback(
    (event) => {
      onButtonChange(module);
    },
    [onButtonChange]
  );
  return (
    <div className="square">
      <div className="imgbg">
        <img src={props.image} className="img" alt="None"></img>
      </div>
      <p className="text">{props.module}</p>
      <ExpandMoreIcon className="icon" onClick={handleStateChange} />
    </div>
  );
}

export default ModuleUnit;
