import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="register-contant">
            <div className="register-heading">
          <h1>Register Now</h1>
          <p>
            Your time is valuable, your dreams are real, and your growth
            matters. Register now and take control of your path. With the right
            guidance and training, you won’t just learn—you’ll evolve. Your
            journey to success starts with this simple choice. Make it today.
          </p></div>
          <div className="register-box">
          <div className="box1">
            <h1>1500+</h1>
            <span>Students</span>
          </div>
          <div className="box2">
            <h1>15+</h1>
            <span>Courses</span>
          </div>
          <div className="box3">
            <h1>10+</h1>
            <span>Accreditations</span>
          </div>
          <div className="box4">
            <h1>900+</h1>
            <span>Certified</span>
            </div>
          </div>
        </div>
        <div className="register-form">
            <h3>Fill to get Offers</h3>
            <p>It is high time for learning</p>
            <input type="text" placeholder="Your Name" />    
            <input type="number" placeholder="Your Phone Number"/>    
            <input type="text" placeholder="Your Email Address"/>
            <button>Submit</button> 
            
            </div>
      </div>
    </>
  );
};

export default Register;
