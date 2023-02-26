import React from 'react';

const styles = {
  profile: {
    display: "flex",
    flexDirection: "row",
    margin: "20px"
  },
  descriptionContainer: {
    margin: "auto",
    padding: "40px"
  },
}

export default function AboutMe() {
  return (
    <div style={styles.profile}>
      <img src='./Pic.jpg' alt='profile'></img>
      <div style={styles.descriptionContainer}>
        <h1>Joe Brigantino</h1>
        <p>
          As a passionate problem solver and aspiring full-stack developer, 
          I thrive on using my front-end proficiencies in HTML, CSS, JavaScript, jQuery, 
          responsive design, React, and Bootstrap to create intuitive and engaging user experiences.
           My back-end proficiencies in APIs, Node.js, Express, MySQL, MongoDB, Sequelize, Mongoose, GraphQL, 
           and REST allow me to develop robust and scalable web applications. With a focus on clean code and continuous learning, 
           I'm committed to delivering high-quality solutions that meet business objectives and exceed user expectations.
        </p>
      </div>
    </div>
  );
}
