import React from 'react'
import logo from '../Assets/banner.logo.png'
import { Link } from 'react-router-dom'
import bg_banner from '../Assets/banner.jpg'
import './Banner.css'

function Banner() {
  return (
    <>
    
      <div className="banner">
        <div className="overlay">
        <div className="banner-logo">
            <img src={logo}  />
        </div>
        <div className="banner-menu">
            <ul>
                <li style={{textDecoration: 'none'}} ><Link to='/'>Home</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/About'>About</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/Courses'>Courses</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/Photo'>Photos</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/Blog'>Blog</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/Contact'>Contact</Link></li>
            </ul>


        

        
        </div></div>
       
    </div>
    </>
    
  )
}

export default Banner