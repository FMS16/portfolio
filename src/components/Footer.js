import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importa el ícono de LinkedIn específico


const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> martinsecondo16@gmail.com</li>
        <li><a href=''><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> Fabricio Secondo</a></li>
      </ul>
    </footer>
  )
}

export default Footer