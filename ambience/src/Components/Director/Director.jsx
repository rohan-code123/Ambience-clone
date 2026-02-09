import React from "react";
import "./Director.css";
import pratik from "../Assets/pratik.png";
import rohit from "../Assets/rohit.png";
import profile from "../Assets/profile.png"

const Director = () => {
  return (
    <>
      <div className="director">
        <div className="director-heading">
          <h2>Our Directors</h2>
          <p>Leading Ambience Computer Education toward excellence <br /> through innovation and student-focused growth.</p>
        </div>
        <div className="director-detail">
          <div className="director-1">
            <img src={profile} alt="" />
            <div className="info">
              <h4>Mr.Pratik Mishra</h4>
              <p>Software Developer & MD BCA & MCA GLA University</p>
              <span>
                Mr. Pratik Mishra Sir, the Managing Director of Ambience Computer
                Education, is an expert software developer known for his
                visionary approach, strong technical mastery, and passion for
                empowering students in technology.
              </span>
            </div>
          </div>
          <div className="director-2">
            <img src={profile} alt="" />
            <div className="info">
                <h4>Mr.Rohit Pant</h4>
                <p>Software Developer & MD BCA & MCA GLA University</p>
                <span> Mr. Rohit Pant Sir, the Managing Director of Ambience Computer
                Education, is an expert software developer known for his
                visionary approach, strong technical mastery, and passion for
                empowering students in technology.</span>
            </div>
          </div>

          <div className="director-3">
            <img src={profile} alt="" />
            <div className="info">
              <h4>Mr.Rohan Chauhan</h4>
              <p>Software Developer & MD BCA & MCA GLA University</p>
              <span>
                Mr. Rohan Chauhan Sir, the Managing Director of Ambience Computer
                Education, is an expert software developer known for his
                visionary approach, strong technical mastery, and passion for
                empowering students in technology.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Director;
