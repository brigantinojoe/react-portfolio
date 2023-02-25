import React from 'react';

export default function Portfolio() {

  const openLink = (event) => {
    const arrayIndex = event.target.getAttribute("value");
    window.open("https://www.w3schools.com", '_blank');
  }

  const style = {
    layout: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    images: {
      width: "90%",
      height: "90%",
      margin: "50px",
      aspectRatio: "3/2",
      objectFit: "contain"
  },
    github: {
      height: "21px",
      width: "18x",
      position: "relative",
      marginTop: "-275px",
      paddingLeft: "100px",
      marginBottom: "0px"
    },
    title: {
      position: "relative",
      marginTop: "-125px",
      paddingLeft: "75px",
      marginBottom: "0px",
      width: "50px"
    },
    link: {
      height: "21px",
      width: "18x",
      padding: "50px"
    }
}

return (
  <div>
    <h1 style={{ width: "100%" }}><center>Portfolio</center></h1>
    <section style={style.layout}>
      <div>
        <img src='./library.jpg' alt='library' style={style.images}></img>
        <img src='./github-mark-white.png' alt='test' style={style.github} value="0" onClick={openLink}></img>
        <p style={style.title}><a href="https://www.w3schools.com"> </a>BiblioMania</p>
      </div>
      <div>
        <img src='./blog.jpg' alt='blog' style={style.images}></img>
        <img src='./github-mark.jpg' alt='test' style={style.github} onClick={openLink}></img>
        <p style={{...style.title, color: "#18122B"}}><a href="https://www.w3schools.com"> </a>BiblioMania</p>
      </div>
      <div>
        <img src='./quiz.jpg' alt='quiz' style={style.images}></img>
        <img src='./github-mark-white.png' alt='test' style={style.github} onClick={openLink}></img>
        <p style={style.title}><a href="https://www.w3schools.com"> </a>BiblioMania</p>
      </div>
      <div>
        <img src='./weather.jpg' alt='weather' style={style.images}></img>
        <img src='./github-mark-white.png' alt='test' style={style.github} onClick={openLink}></img>
        <p style={style.title}><a href="https://www.w3schools.com"> </a>BiblioMania</p>
      </div>
      <div>
        <img src='./notes.jpg' alt='notes' style={style.images}></img>
        <img src='./github-mark-white.png' alt='test' style={style.github} onClick={openLink}></img>
        <p style={style.title}><a href="https://www.w3schools.com"> </a>BiblioMania</p>
      </div>
      <div>
        <img src='./text-editor.jpg' alt='editor' style={style.images}></img>
        <img src='./github-mark-white.png' alt='test' style={style.github} onClick={openLink}></img>
        <p style={style.title}><a href="https://www.w3schools.com"> </a>BiblioMania</p>
      </div>
    </section>
  </div>
);
}
