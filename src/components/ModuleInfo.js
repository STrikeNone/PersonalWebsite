import React, { useCallback } from "react";
import "../styles/Modules.css";
import ArrowBackIcon from "@material-ui/icons/KeyboardArrowDown";
import { data } from "../json/data";

function ModuleInfo(props) {
  const { onButtonChange, stateValue } = props;
  const reviewInformation = data.find((datainfo) =>
    datainfo.title.includes(stateValue)
  );
  const handleStateChange = useCallback(
    (event) => {
      onButtonChange("false");
    },
    [onButtonChange]
  );

  return (
    <div class="rectangle fadeIn">
      <div class="content content-title">
        <a href={reviewInformation ? reviewInformation.website : "#"}>
          {reviewInformation ? reviewInformation.title : "None"}
        </a>
        <ArrowBackIcon className="icon2" onClick={handleStateChange} />
      </div>
      <div class="content content-info">
        {reviewInformation ? reviewInformation.information : "None"}
      </div>
      <div class="content-review">
        {reviewInformation ? reviewInformation.review : "None"}
      </div>
    </div>
  );
}

export default ModuleInfo;
