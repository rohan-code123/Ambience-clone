import React from 'react'
import './Choose.css'
// import { FaGraduationCap } from "react-icons/fa";
// import { GiSpellBook } from "react-icons/gi";
// import { HiAcademicCap } from "react-icons/hi2";

const Choose = () => {
  return (
    <>
    <div className="choose-us">
        <div className="why-choose-us">
            <h2>Why Choose us?</h2>
            <p>“Your journey to innovation starts here - where passion meets <br /> technology and learning transforms in success"</p>
        </div>
        <div className="row">
        <div className="faculty">
          <div className="choose-icon"></div>
          <h4>Best Faculty</h4>
          <p>Ambience provides top faculty focused on skill development and student achievement.</p>
        </div>
        <div className="material">
          <div className="choose-icon"></div>
          <h4>Best Study Material</h4>
          <p>Well-structured study material helps students understand concepts easily and score better.</p>
        </div>
        <div className="certificate">
          <div className="choose-icon"></div>
          <h4>National Level certification</h4>
          <p>Get nationally certified and stand out with trusted, government-recognized qualifications.</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Choose