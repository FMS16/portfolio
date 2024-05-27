import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('about-me');
      if (aboutMeSection) {
        const aboutMeSectionTop = aboutMeSection.offsetTop - 75; // Restamos 150px
        const aboutMeSectionBottom = aboutMeSectionTop + aboutMeSection.offsetHeight; // Agregamos la altura de la sección "About Me"
        const currentScrollY = window.scrollY;

        // Si el scroll está en la sección "About Me" o más abajo, cambia el color del header
        setIsScrolled(currentScrollY >= aboutMeSectionTop && currentScrollY <= aboutMeSectionBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <h1 className='header-logo'>FS.</h1>
{/*       <button className='toggle-menu'>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button> */}
    </header>
  );
};

export default Header;
