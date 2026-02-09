import React from 'react'
import './Hero.css'
import student2 from '../Assets/ambience-student-2.jpg'
import pratik from '../Assets/pratik.png'
import rohit from '../Assets/rohit.png'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    <>

    
    <div className="hero">
      <Navbar/>
        <div className="hero-banner">
        <div className="hero-heading">Best Computer Institute in Jaitpur</div>

        <h1 className='typing'>Learn <span>Graphic designing</span></h1>
        
        <button className='hero-btn1'>VERIFY CERTIFICATE</button>
        <button className='hero-btn2'>SEE COURSE</button>
        </div>
         <div className="hero-ace">
        <div className="carrier-guide">
            <h1>Build Skills That <br />
              <span>Shape Your Career</span></h1>
            <p>Learn from trusted trainers at <b>Ambience Computer Education.</b> 
                Get real guidance, practical knowledge, and career-ready skills in real time.</p>
            <button>Explore Courses</button>

            <div className="carrier-buttons">
                <div className="carrier-btn">
                  <div className="icon">👨‍🏫</div>1:1 Expert Sessions 
                  
                </div>
              <div className="carrier-btn">
                <div className="icon">📚</div>Personalized Learning</div>
              <div className="carrier-btn"><div className="icon">📚</div>Affordable Fees</div>
              <div className="carrier-btn"><div className="icon">🤝</div>Career Support</div></div>
          
        </div>
        <div className="hero-review">
            <div className="review-1">
                <img src={rohit} alt=""/>
                <p>Mujhe kya pata?</p>
            </div>

              <div className="review-2">
                <img src={pratik}alt="" />
                <p>mai to copy paste kar rahaa hu!</p>
            </div>

              <div className="review-3">
                <img src={student2} alt="" />
                <p>i am doing copy paste by chatgpt i think 
                  ambience is good maybe </p>
            </div>
            
        </div>
        </div>
            </div>
    </>
  )
}

export default Hero