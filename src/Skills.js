import React from 'react'
import './Skills.css'
// import SkillBar from 'react-skillbars';

function Skills() {

  return (
    <div className="skills">
    <div className="skills__imageContainer">
      <img className="skills__image" src="https://cdn2.iconfinder.com/data/icons/superglyph-os/30/html5-128.png" alt=""/>
      <img className="skills__image" src="https://cdn2.iconfinder.com/data/icons/superglyph-os/30/css3-128.png" alt=""/>
      <img className="skills__image" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-128.png" alt=""/>
      <img className="skills__image" src="https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Bootstrap-128.png" alt=""/>
      <img className="skills__image" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-128.png" alt=""/>
      <img className="skills__image" src="https://cdn4.iconfinder.com/data/icons/logos-3/455/nodejs-new-black-128.png" alt=""/>
    </div>
      <div className="skills__container">
    
        <h4>HTML5</h4>
        <div className="skills__progress">
          <div className="skills__bar" style={{"width": '95%', "background": "#01ffc5"}}><span>95%</span></div>
        </div>
        <h4>CSS3</h4>
        <div className="skills__progress">
          <div className="skills__bar" style={{"width": '90%', "background": "#00af87"}}><span>90%</span></div>
        </div>
        <h4>Javascript</h4>
        <div className="skills__progress">
          <div className="skills__bar" style={{"width": '75%', "background": "#01ffc5"}}><span>75%</span></div>
        </div>
        <h4>Bootstrap</h4>
        <div className="skills__progress">
          <div className="skills__bar" style={{"width": '80%', "background": "#00af87"}}><span>80%</span></div>
        </div>
        <h4>React</h4>
        <div className="skills__progress">
          <div className="skills__bar" style={{"width": '70%', "background": "#01ffc5"}}><span>70%</span></div>
        </div>
        <h4>Node.js</h4>
        <div className="skills__progress">
          <div className="skills__bar" style={{"width": '70%', "background": "#00af87"}}><span>70%</span></div>
        </div>
      </div>
        
    </div>
  )

}

export default Skills
