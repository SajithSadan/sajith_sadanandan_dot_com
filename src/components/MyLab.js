import React from "react";
import LabSvg from "./LabSvg";
import projects from "./labData";

const MyLab = () => {
  return (
    <div className="myLab">
      <div className="wrapper">
        <div className="labTitle">
          <LabSvg />
          <h2>My Experiments</h2>
        </div>
        <div className="labContent">
          {projects.map((prj, index) => (
            <div className="labRow" key={index}>
              <div className="labImg">
                {prj.url ? (
                  <a href={prj.url} target="_blank">
                    <img src={prj.image} />
                  </a>
                ) : (
                  <img src={prj.image} />
                )}
              </div>
              <div className="labText">
                <h2>{prj.name}</h2>
                <p>{prj.desc}</p>
                <div className="techStack">
                  {prj.techStack.map((tech) => (
                    <span className="chip">{tech}</span>
                  ))}
                </div>
                <p>
                  Status:{" "}
                  <span
                    style={{
                      color: prj.status === "Completed" ? "#000" : "#f45866",
                    }}
                  >
                    {prj.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLab;
