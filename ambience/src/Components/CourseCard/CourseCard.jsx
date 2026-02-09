 import React from 'react'
import './CourseCard.css'
 
 function CourseCard({ course }){
    return(

    <div className="card">
      <div className="image"><img src={course.image} alt="" /> </div>
      <h6 className="badge">{course.discount}</h6>
      <div className="course-contant">
        <span className="category" >{course.category}</span>
        <a className='title' href="">{course.title}</a>
        <p className='discription' >{course.discription}</p>
        <a className='duration' href="">{course.duration}</a>
        <button className='details' >View Details</button></div>
    </div>



  );
}

export default CourseCard;