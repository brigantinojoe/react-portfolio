import React from 'react';

export default function Portfolio() {

  const githubArray = ["https://github.com/DallasSybrowsky/Bibliomania",
    "https://github.com/brigantinojoe/blog",
    "https://github.com/brigantinojoe/quiz",
    "https://github.com/brigantinojoe/weather_App",
    "https://github.com/brigantinojoe/note_taker",
    "https://github.com/brigantinojoe/react-portfolio/tree/main"
  ];

  const openLink = (event) => {
    const arrayIndex = event.target.getAttribute("value");
    const link = githubArray[arrayIndex];
    window.open(link, '_blank');
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
      height: "31px",
      width: "28x",
      position: "relative",
      marginTop: "-275px",
      paddingLeft: "100px",
      marginBottom: "0px",
      cursor: "pointer"
    },
    title: {
      position: "relative",
      marginTop: "-125px",
      paddingLeft: "75px",
      marginBottom: "0px",
    },
  }

  return (
    <div>
      <section style={style.layout}>
        <div>
          <img src='./library.jpg' alt='library' style={style.images}></img>
          <img src='./github-mark-white.png' alt='test' style={style.github} value="0" onClick={openLink}></img>
          <p style={style.title}><a href="https://bibliomania.herokuapp.com/" style={{ textDecoration: "none", color: "white", }} target="_blank" rel="noreferrer">BiblioMania</a></p>
        </div>
        <div>
          <img src='./blog.jpg' alt='blog' style={style.images}></img>
          <img src='./github-mark.jpg' alt='test' style={style.github} value="1" onClick={openLink}></img>
          <p style={{ ...style.title, color: "#18122B" }}><a href="https://warm-lake-10819.herokuapp.com/signup" style={{ textDecoration: "none", color: "black", }} target="_blank" rel="noreferrer">Blog App</a></p>
        </div>
        <div>
          <img src='./quiz.jpg' alt='quiz' style={style.images}></img>
          <img src='./github-mark-white.png' alt='test' style={style.github} value="2" onClick={openLink}></img>
          <p style={style.title}><a href="https://brigantinojoe.github.io/quiz/index.html" style={{ textDecoration: "none", color: "white", }} target="_blank" rel="noreferrer">The Office Quiz</a></p>
        </div>
        <div>
          <img src='./weather.jpg' alt='weather' style={style.images}></img>
          <img src='./github-mark-white.png' alt='test' style={style.github} value="3" onClick={openLink}></img>
          <p style={style.title}><a href="https://brigantinojoe.github.io/weather_App/" style={{ textDecoration: "none", color: "white", }} target="_blank" rel="noreferrer">Weather App</a></p>
        </div>
        <div>
          <img src='./notes.jpg' alt='notes' style={style.images}></img>
          <img src='./github-mark-white.png' alt='test' style={style.github} value="4" onClick={openLink}></img>
          <p style={style.title}><a href="https://pacific-lake-49990.herokuapp.com/notes" style={{ textDecoration: "none", color: "white", }} target="_blank" rel="noreferrer">Note Taker</a></p>
        </div>
        <div>
          <img src='./codecollab.jpg' alt='editor' style={style.images}></img>
          <img src='./github-mark-white.png' alt='test' style={style.github} value="5" onClick={openLink}></img>
          <p style={style.title}><a href="https://code-collab-dallas.herokuapp.com/" style={{ textDecoration: "none", color: "white", }} target="_blank" rel="noreferrer">CodeCollab</a></p>
        </div>
      </section>
    </div>
  );
}
