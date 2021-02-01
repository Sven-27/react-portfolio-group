import React, { useEffect, useState, useRef } from 'react'
import './Skills.css'
// import SkillBar from 'react-skillbars';

function Skills() {
  useEffect(() => {
    document.addEventListener("scroll", toggleClass)
    return () => {
      document.removeEventListener("scroll", toggleClass)
    }
  }, [])

  const [bar1, setBar1] = useState("")
  const [bar2, setBar2] = useState("")
  const [bar3, setBar3] = useState("")
  const [bar4, setBar4] = useState("")
  const [bar5, setBar5] = useState("")
  const [bar6, setBar6] = useState("")

  const toggleClass = () => {
    const home = skills.current.getBoundingClientRect().top
    const homeHeight = skills.current.getBoundingClientRect().height

    if(home <= 250 && home >= -homeHeight){
      setBar1("skills__bar bar-1")
      setBar2("skills__bar bar-2")
      setBar3("skills__bar bar-3")
      setBar4("skills__bar bar-4")
      setBar5("skills__bar bar-5")
      setBar6("skills__bar bar-6")
    }
  }

  const skills = useRef()

  return (
    <div className="skills" ref={skills}>
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
          <div className={bar1} style={{"width": '95%'}}><span>95%</span></div>
        </div>
        <h4>CSS3</h4>
        <div className="skills__progress">
          <div className={bar2} style={{"width": '95%'}}><span>95%</span></div>
        </div>
        <h4>Javascript</h4>
        <div className="skills__progress">
          <div className={bar3} style={{"width": '75%'}}><span>75%</span></div>
        </div>
        <h4>Bootstrap</h4>
        <div className="skills__progress">
          <div className={bar4} style={{"width": '80%'}}><span>80%</span></div>
        </div>
        <h4>React</h4>
        <div className="skills__progress">
          <div className={bar5} style={{"width": '70%'}}><span>70%</span></div>
        </div>
        <h4>Node.js</h4>
        <div className="skills__progress">
          <div className={bar6} style={{"width": '70%'}}><span>70%</span></div>
        </div>
      </div>
        
    </div>
  )

}

export default Skills
