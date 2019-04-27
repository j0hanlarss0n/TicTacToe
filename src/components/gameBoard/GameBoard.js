import React, { useState } from "../../../node_modules/react";
import BoardSquare from "../boardSquare/boardSquare.js";
import "./gameBoard.css";

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div>
      <BoardSquare />
      <button>Game</button>
    </div>
  );
}

export default GameBoard;
