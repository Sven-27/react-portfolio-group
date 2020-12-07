import React from 'react'
import { SkillBars } from 'react-skills';
import './Skills.css'

function Skills() {

  const skillsData = [
    {
      name: 'ReactJS',
      level: 100,
      color: 'blue',
    },
    {
      name: 'SomeOtherTech',
      level: 85,
      color: 'red',
    }
  ]

  return (
    <div className="skills__container">
      <SkillBars skills={skillsData} />
    </div>
  )

    const skillsData= [
        {
          name: 'ReactJS',
          level: 100,
          color: 'blue',
        },
        {
          name: 'SomeOtherTech',
          level: 85,
          color: 'red',
        }
      ]
      
    return (
        <div>
            <SkillBars skills={skillsData} />
        </div>
    )

}

export default Skills
