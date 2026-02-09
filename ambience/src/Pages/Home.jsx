import React from 'react'
import Hero from '../Components/Hero/Hero'
import Choose from '../Components/Choose/Choose'
import Popular from '../Components/Popular/Popular'
import Register from '../Components/Register/Register'
import Director from '../Components/Director/Director'
import Events from '../Components/Events/Events'
import Review from '../Components/Review/Review'
import Info_Slider from '../Components/Info_slider/Info_Slider'



const Home = () => {
  return (
    <>
    <Hero/>
    <Info_Slider/>
    <Choose/>
    <Popular/>
    <Register/>
    <Director/>
    <Events/>
    <Review/>

    </>
  )
}

export default Home