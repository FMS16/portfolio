import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link as ScrollLink } from 'react-scroll';

const ScrollDown = () => {
  return (
    <div className='scroll-down'>
      <ScrollLink
        to="about-me"  // ID de la sección a la que quieres desplazarte
        smooth={true}
        duration={1000} // Duración del desplazamiento en milisegundos
      >
        <button className='btn-scroll_down'><FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></button>
      </ScrollLink>
    </div>
  )
}

export default ScrollDown