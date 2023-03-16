import React from 'react'
import bg1 from "../assets/images/banner-bg.png"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg1})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col bg-black '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center ">
        <div className="btn py-3">
          <button  className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
        </div>
        <h1 className='text-white text-5xl font-bold'>Hi, im Mehrad</h1>
        <p className='text-white py-4 max-w-lg '>I'm Computer programming and Analysis graduate from george brown college, i've been programming for about 4 years, im a computer hardware enthuasist, and I love playing guitar whenever i can.</p>
        <button className='  text-white text-2xl'>Let's Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button>
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header