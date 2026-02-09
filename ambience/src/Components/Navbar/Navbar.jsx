import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu">
            <ul>
                <li style={{textDecoration: 'none'}} ><Link to='/'>Home</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/About'>About</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/Courses'>Courses</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/Photo'>Photos</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/Blog'>Blog</Link></li>
                <li style={{textDecoration: 'none'}} ><Link to='/Contact'>Contact</Link></li>
            </ul>

            

        
        </div>
       
    </nav>
    </>
  )
}

export default Navbar