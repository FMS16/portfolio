import React from 'react'
import "../assets/styles/style.css"
import img from "../assets/images/blog-writer.png"

const Home = () => {
  return (
    <div className='about' id='about'>
      <h1 className='section-title'>ABOUT</h1>
      <div className='container flex'>
        <div className='about-item'>
          <img src={img} />
        </div>
      </div>
    </div>
  )
}

export default Home