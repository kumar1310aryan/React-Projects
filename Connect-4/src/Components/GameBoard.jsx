import { useState } from "react";
import GameCircle from "./GameCircle";
import "./Game.css";

const NO_PLAYER = 0;
const PLAYER_1 = 1; // Red
const PLAYER_2 = 2; // Blue

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const initBoard = () => {
    setCurrentPlayer(PLAYER_1);
    setGameBoard(Array(16).fill(NO_PLAYER));
  };

  const circleClicked = (id) => {
    if (gameBoard[id] === NO_PLAYER) {
      const newGameBoard = gameBoard.map((player, index) => {
        return index === id ? currentPlayer : player;
      });

      setGameBoard(newGameBoard);

      setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }
  };

  console.log(gameBoard);

  const renderCircle = (id) => {
    const className = `player_${gameBoard[id]}`;
    return (
      <GameCircle
        key={id}
        id={id}
        className={className}
        onCircleClicked={circleClicked}
      />
    );
  };

  return (
    <div className="gameBoard">
      {Array.from({ length: 16 }, (_, id) => renderCircle(id))}
    </div>
  );
};

export default GameBoard;
