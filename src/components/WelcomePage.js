import React from 'react'
import Dodecahedron from './Dodecahedron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ScrollDown from './ScrollDown'
import { Link as ScrollLink } from 'react-scroll';

const WelcomePage = () => {
    return (
        <div className='welcome-page' id='welcome-page'>
            <div className='welcome-content'>
                <h1 className='welcome-title'>Fabricio <span className='bold'>Secondo</span></h1>
                <h2 className='welcome-subtitle'>Software Engineer</h2>
                <p className='welcome-text'>Welcome to my portfolio! Here you'll find a showcase of my work, skills, and passion for developing and software engineering. Feel free to explore and get in touch if you have any questions or opportunities to collaborate. </p>
                <div className='welcome-btn_container'>
{/*                     <button className='btn-me'>Contact me <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button> */}
                    <ScrollLink
                        to="experience"  // ID de la sección a la que quieres desplazarte
                        smooth={true}
                        duration={1000} // Duración del desplazamiento en milisegundos
                    >
                        <button className='btn-experience'>View experience<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                    </ScrollLink>
                </div>
            </div>
            <Dodecahedron left={20} top={-10} valueSize={1.5} />
            <Dodecahedron left={85} top={-5} valueSize={3} />
            <Dodecahedron left={5} top={85} valueSize={1} />
            <ScrollDown />
        </div>
    )
}

export default WelcomePage