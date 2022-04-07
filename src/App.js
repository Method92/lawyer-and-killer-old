import React, {useState} from 'react'
import './App.css';

function Header(){
  return(
    <header>
      <h1 id="title"><a href="home.html" id="gameTitle">Lawyers & Killers</a></h1>
    </header>
  );
}

function Nav(){
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
  </nav>
  )
}

function Main(){
  let numberOfPlayers = 4;
  const [gameState, setGameState] = useState("")
  if(gameState === ""){
    return(
      <section id="workingSection">
        <p>How many people are playing?</p>
          <select id="playerCount" name="Player Count">
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <br /> <br /> 
          <button type="button" id="playButton" onClick={() => setGameState("naming")}> Play! </button>
      </section>
    )
  } else if(gameState ==="naming"){
    return(
    <h1>Hello. Player Count is: {numberOfPlayers}</h1>
    );
  }
}

function Footer(props){
  return(
    <footer>
      <p> This is a footer</p>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function App() {
  return (
  <>
    <Header />
    <Nav />
    <Main />
    <Footer year={new Date().getFullYear()} />
  </>
  );
}

export default App;
