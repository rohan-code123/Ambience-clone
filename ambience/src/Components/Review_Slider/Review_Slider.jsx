import React from 'react'
import './Review_Slider.css'



function Review_Slider ( {review}){
  return (
    <div className="slider">
        <img className="image" src={review.image} alt={review.name} />
        <h1>{review.name}</h1>
        <p>{review.review}</p>
        
    </div>
  );
}

export default Review_Slider