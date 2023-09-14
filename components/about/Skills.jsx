import React from "react";

const skillsContent = [
  {
    name: "Bubble.io",
    skillPercent: "99",
  },
  {
    name: "React.Js",
    skillPercent: "95",
  },
  {
    name: "Vue.Js",
    skillPercent: "90",
  },
  {
    name: "OpenAI",
    skillPercent: "90",
  },
  {
    name: "Node",
    skillPercent: "95",
  },
  {
    name: "Python",
    skillPercent: "95",
  },
  {
    name: "HTML/CSS/JS",
    skillPercent: "99",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
