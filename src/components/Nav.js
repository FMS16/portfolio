import React, { useState, useEffect } from 'react';
import "../assets/styles/style.css";

const Nav = () => {
  const [ activeItem, setActiveItem ] = useState('HOME');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const aboutSectionTop = aboutSection.offsetTop - 100; // Resta 100 píxeles
      const aboutSectionHeight = aboutSection.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= aboutSectionTop && scrollPosition < aboutSectionTop + aboutSectionHeight) {
        setActiveItem('ABOUT');
      } else {
        setActiveItem('HOME');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='nav'>
      <h1 className='brand'>FS<span className='dot'>.</span></h1>
      <ul>
        <li className={activeItem === 'HOME' ? 'active' : ''} onClick={() => handleItemClick('HOME')}>HOME</li>
        <li className={activeItem === 'ABOUT' ? 'active' : ''} onClick={() => handleItemClick('ABOUT')}>ABOUT</li>
        <li className={activeItem === 'PORTFOLIO' ? 'active' : ''} onClick={() => handleItemClick('PORTFOLIO')}>PORTFOLIO</li>
      </ul>
    </div>
  );
};

export default Nav;
