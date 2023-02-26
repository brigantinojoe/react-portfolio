import React from 'react';

export default function Resume() {

  const style = {
    buttonColor: {
      background: "#393053"
    },
    container: {
      marginLeft: "50px",
      marginTop: "25px"
    },
  }
  return (
    <div>
      <div style={style.container}>
        <br></br>
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Sequilize</li>
          <li>Mongoose</li>
          <li>GraphQL</li>
          <li>Rest</li>
        </ul>
        <br></br>
        <a href="./Resume.pdf" download><button className="btn btn-primary" style={style.buttonColor}>Download Resume</button></a>
      </div>
    </div>
  );
}