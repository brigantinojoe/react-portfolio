import React from 'react';

const style = {
  navbar: {
    background: '#18122B',
    color: 'white',
    height: '75px',
  },
  items: {
    paddingTop: '15px',
    fontSize: '15px',
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills nav-justified navbar-expand-lg" style={style.navbar}>
      <li className="nav-item" style={style.items}>
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item" style={style.items}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" style={style.items}>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item" style={style.items}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
