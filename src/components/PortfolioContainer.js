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
    </div>
  );
}
