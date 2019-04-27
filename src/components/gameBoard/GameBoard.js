import React, { useState, setState} from "../../../node_modules/react";
import BoardSquare from "../BoardSquare/BoardSquare";
import WiderThanTall from "../../WiderThanTall"
import "./GameBoard.css";

function GameBoard() {
  const (height, setHeight) = setState(window.innerHeight);
  const (width, setwidth) = setState(window.innerWidth);
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  return (
    <div className="GameBoard">
      {React.Children.map(squares, i => (
        <BoardSquare />
      ))}
    </div>
  );
}

export default GameBoard;
