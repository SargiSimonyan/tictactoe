import { useState } from "react";

function Square () {
  const [value, setValue] = useState("-")
  let player = "x"
  function hendelClick () {
    
    player === "x" ? player = "o" : player = "x"
    setValue(player)
  }
  return (
    <button 
      className="square" 
      onClick={hendelClick}
    >
      {value}
    </button>
  );
}

export default function Board () {
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}