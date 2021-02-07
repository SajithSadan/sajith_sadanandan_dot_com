import React from "react";
import LabSvg from "./LabSvg";

const MyLab = () => {
  return (
    <div className="myLab">
      <div className="wrapper">
        <div className="labTitle">
          <LabSvg />
          <h2>My Experiments</h2>
        </div>
        <h3 style={{ color: "black", textAlign: "center" }}>
          I'm organizing them. Please visit this section later.
        </h3>
      </div>
    </div>
  );
};

export default MyLab;
