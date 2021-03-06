import React, { useState, setState } from "../../../node_modules/react";
import BoardSquare from "../BoardSquare/BoardSquare";
import WiderThanTall from "../../WiderThanTall";
import "./GameBoard.css";

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div
      className="GameBoard"
      style={{
        minHeight: WiderThanTall() ? "100vh" : "100vw",
        maxWidth: WiderThanTall() ? "100vh" : "100vw"
      }}
    >
      {React.Children.map(squares, i => (
        <BoardSquare />
      ))}
    </div>
  );
}

export default GameBoard;
