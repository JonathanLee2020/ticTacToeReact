
import { Hello } from "./pages/Greeting";
import { Goodbye } from "./pages/Greeting";
import './app.css';

function App() {
// we first create our board, we can have a holistic wrapper called game that has a 2 divs
  // the first div can be called title, it will just contain the prompt that will say whose turn it is and if there is a winner
  // the second div can be called board, it will be 100% the length of its parent with 9 squares forming a 3x3 board

// we can use bubbling to say if we click and its a button, we either display an X or a O
// we can have a function that takes in all possible win/lose scenarios and returns true or false for the current board
// maybe use a for loop to assign an id to each square?
// how do pass in our current board to the isWInner function?
// have an id associated with every square, and get teh id from the click and pass it into our virtual board before passing in the board to the board into isWinner?
// we cont teh amount of clicks
// if the
  
  return (
    <div className="game">
      <h1 className="title">TicTacToe</h1>
      <h2 className="info">Hello</h2>
      <div className="board">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
  );
}

export default App;
