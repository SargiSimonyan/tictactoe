import { useState } from "react";

function Square ({value, onSquearClick}) {
  return (
    <div 
      className="square" 
      onClick={onSquearClick}
    >
      {value}
    </div>
  );
}

export default function Board () {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function hendleClick (i) {
    if(squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O" ;
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  
  return (
    <div className="board">
       <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquearClick={()=>hendleClick(0)} />
        <Square value={squares[1]} onSquearClick={()=>hendleClick(1)} />
        <Square value={squares[2]} onSquearClick={()=>hendleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquearClick={()=>hendleClick(3)} />
        <Square value={squares[4]} onSquearClick={()=>hendleClick(4)} />
        <Square value={squares[5]} onSquearClick={()=>hendleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquearClick={()=>hendleClick(6)} />
        <Square value={squares[7]} onSquearClick={()=>hendleClick(7)} />
        <Square value={squares[8]} onSquearClick={()=>hendleClick(8)} />
      </div>
    </div>
  );
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}