import React from 'react'
import './Skills.css'
import SkillBar from 'react-skillbars';

function Skills() {
const skills = [
  {type: "HTML5", level: "90"},
  {type: "CSS3", level: "85"},
  {type: "Javascript", level: "65"},
  {type: "React", level: "50"},
  {type: "Sass", level: "65"},
  {type: "Bootstrap", level: "75"},
  {type: "Node.js", level: "60"},
]
const colors = {
  bar: '#fffaaa',
  title: {
    text: {
      hue: {
        minimum: 30,
        maximum: 150
      },
      saturation: 50,
      level: {
        minimum: 30,
        maximum: 90
      }
    },
    background: {
      hue: 20,
      saturation:50,
      level:30
    }
  }
}

  return (
    <div className="skills">
      <div className="skills__container">
      <SkillBar skills={skills} colors={colors} height={20} />
      </div>
        
    </div>
  )

}

export default Skills
