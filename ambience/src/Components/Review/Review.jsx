import React from 'react'
import './Review.css'
import Review_Slider from '../Review_Slider/Review_Slider'
import all_review from '../Assets/all_Student_review';

function Review () {
  return (
    <>
    <div className="review">
    <div className="review-heading">
         <h2>Our students say</h2>
            <p>"I gained real skills through practical sessions
               that helped me <br /> grow quickly."</p>
            </div>
            <div className="review-container">
            {all_review.slice(0, 2).map((review) => {
                <Review_Slider 
                key={review.id}
                review={review}/>
            })}</div>

            <div className="slider dots">💠💠💠💠</div>

            </div>
    </>
  )
}

export default Review