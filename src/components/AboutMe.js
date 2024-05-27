import React from 'react'
import img from "../assets/img/developer.avif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import file from "../assets/Resume.pdf"

const AboutMe = () => {
  return (
    <div className='about-me' id='about-me'>
        <div className='container flex'>
            <div className='about-me_item'>
                <h1>Discover <span className='bold'>About me.</span></h1>
                <p>I've been in the world of programming since I was 16, diving headfirst into this amazing world. At 17, in 2021, I jumped into a tech program at Ort University, where I stayed until I graduated at the end of 2023. That's when things got real - I got to work on actual projects with real clients. It was a wild ride, but I learned so much about different tech and ways to code.</p>
                <p>After that, I joined TCS at 2022, working alongside with companies like PwC and Humana. Man, it was awesome! I was able to work with great mentors from whom I learned many things. They helped me grow as a developer and I got to work on some pretty neat projects. Overall, it's been a crazy journey, but I wouldn't trade it for anything. Here's to more coding adventures ahead!</p>
                <a href={file} download={file} className='btn-download_cv'>Download Resume <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
            </div>
            <div className='about-me_item'>
                <img src={img} />
            </div>
        </div>
    </div>
  )
}

export default AboutMe