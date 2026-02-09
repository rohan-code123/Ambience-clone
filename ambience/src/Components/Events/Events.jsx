import React from 'react'
import './Events.css'
import Event1 from '../Assets/Event-1.jpg'
import Event2 from '../Assets/Event-2.jpg'

const Events = () => {
  return (
    <div className="events">
     <div className="events-heading">
         <h2>Our Popular Courses</h2>
            <p>“Gain the skills that shape your success.”</p>
            </div>
            <div className="events-image">
               <div className="img-1">
                 <img src={Event1} alt="" />

                 <div className="event-details">
                 <div className="date">
                    <span>Every</span>
                    <p>Saturday</p>
                    </div>
                    <div className="time-location">
                        <span> 08:00AM to 09:00PM</span>
                        <p>Free computer Class</p>
                        </div>
                        <div className="event-para">Attend our free Saturday computer class to enhance your knowledge and improve essential digital skills.</div>
                        
                    
                 </div>
                
               </div>
               <div className="img-1">
                <img src={Event2} alt="" />
                <div className="event-details">
                <div className="date">
                    <span>Month End</span>
                    <p>Examination</p>
                    </div>
                    <div className="time-location">
                        <span> 08:00AM to 09:00PM</span>
                        <p>Free Examination</p>
                        </div>
                        <div className="event-para">Improve your learning with our free monthly exam designed to assess and strengthen your concepts.</div>
                        
                    
                </div>
                
                </div>
            </div>
            
            </div>

  )
}

export default Events