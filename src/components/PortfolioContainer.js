import React, { useState, useEffect } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About Me');

  useEffect(() => {
    document.title = 'Joe Brigantino';
  }, []);

  const renderHeader = () => {
    if (currentPage === 'About Me') {
      return <h1 style={{ width: "100%" }}><center>About Me</center></h1>;
    } else {
      return <h1 style={{ width: "100%" }}><center>{currentPage}</center></h1>;
    }
  };

  const openGitHub = () => {
    window.open("https://github.com/brigantinojoe", '_blank');
  };

  const openLinkedIn = (event) => {
    window.open("https://www.linkedin.com/in/joe-brigantino-66290684/", '_blank');
  }

  const style = {
    container: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center"
    },
    images: {
      height: "75px",
      width: "75px",
      margin: "25px",
      marginTop: "150px",
      cursor: "pointer"
    }
  }

  const renderFooter = () => {
    return <div style={style.container}>
      <img src='./github-mark-white.png' alt='github' style={style.images} onClick={openGitHub}></img>
      <img src='./LI-In-Bug.png' alt='linked-in' style={style.images} onClick={openLinkedIn}></img>
    </div>
  };

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderHeader()}
      {renderPage()}
      {renderFooter()}
    </div>
  );
}
