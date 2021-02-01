import React from 'react'
import './Skills.css'
// import SkillBar from 'react-skillbars';

function Skills() {

  return (
    <div className="skills">
    <div className="skills__imageContainer">
    <i class="fab fa-html5"></i>
    <i class="fab fa-css3-alt"></i>
    <i class="fab fa-js-square"></i>
    <i class="fab fa-bootstrap"></i>
    <i class="fab fa-react"></i>
    <i class="fab fa-node"></i>
    </div>
      <div className="skills__container">
    
        <h4>HTML5</h4>
        <div className="skills__progress">
          <div className="skills__bar bar-1" style={{"width": '95%', "animation-name": "bar-1", "animation-duration": "3s", "animation-timing-function": "ease-in-out"}}><span>95%</span></div>
        </div>
        <h4>CSS3</h4>
        <div className="skills__progress">
          <div className="skills__bar bar-2" style={{"width": '95%', "animation-name": "bar-2", "animation-duration": "3s", "animation-timing-function": "ease-in-out"}}><span>95%</span></div>
        </div>
        <h4>Javascript</h4>
        <div className="skills__progress">
          <div className="skills__bar bar-3" style={{"width": '75%', "animation-name": "bar-3", "animation-duration": "3s", "animation-timing-function": "ease-in-out"}}><span>75%</span></div>
        </div>
        <h4>Bootstrap</h4>
        <div className="skills__progress">
          <div className="skills__bar bar-4" style={{"width": '80%', "animation-name": "bar-4", "animation-duration": "3s", "animation-timing-function": "ease-in-out"}}><span>80%</span></div>
        </div>
        <h4>React</h4>
        <div className="skills__progress">
          <div className="skills__bar bar-5" style={{"width": '70%', "animation-name": "bar-5", "animation-duration": "3s", "animation-timing-function": "ease-in-out"}}><span>70%</span></div>
        </div>
        <h4>Node.js</h4>
        <div className="skills__progress">
          <div className="skills__bar b ar-6" style={{"width": '70%', "animation-name": "bar-6", "animation-duration": "3s", "animation-timing-function": "ease-in-out"}}><span>70%</span></div>
        </div>
      </div>
        
    </div>
  )

}

export default Skills
