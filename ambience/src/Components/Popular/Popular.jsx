import React from 'react'
import './Popular.css'
import all_Courses from '../Assets/all_Popular'
import CourseCard from '../CourseCard/CourseCard';

function Popular () {
  return (
    <>
<div className="popular">
    <div className="popular-heading">
         <h2>Our Popular Courses</h2>
            <p>“Gain the skills that shape your success.”</p>
            </div>

    <div className="cards-container">
      {all_Courses.map((course) => (
      <CourseCard
        key={course.id} 
        course={course} 
      />
      ))}
    </div></div>

    
    </>
  )
}

export default Popular;