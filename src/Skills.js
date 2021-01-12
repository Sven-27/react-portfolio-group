import React from "react";
import { SkillBars } from "react-skills";
import "./Skills.css";

function Skills() {
  const flat = false;

  const levelProgress = false;

  const duration = 5;

  const labelWidth = 250;

  const height = 100;

  const skillsData = [
    {
      name: "React JS",
      level: 100,
      color: "orange",
    },
    {
      name: "CSS 3",
      level: 55,
      color: "red",
    },
  ];

  return (
    <div className='skills' style={{ backgroundColor: "#77dde7" }}>
      <div className='skills__container d-flex flex-column align-items-center justify-content-center'>
        <div className='skillBars__container '>
          <SkillBars
            skills={skillsData}
            flat={flat}
            levelProgress={levelProgress}
            duration={duration}
            labelsWidth={labelWidth}
            barsHeight={height}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
