import { useState } from 'react'
import './App.css'
import { Routes,Route,  } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Photos from './Pages/Photos'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/>  */}
    {/* <Banner/> */}
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/Photo' element={<Photos/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    
    <Footer/>
    </>
  )
}

export default App
