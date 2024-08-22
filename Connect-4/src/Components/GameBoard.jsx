import { useState } from "react";
import GameCircle from "./GameCircle";
import "./Game.css";

const NO_PLAYER = 0;
const PLAYER_1 = 1; // Red
const PLAYER_2 = 2; // Blue

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(42).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const circleClicked = (id) => {
    if (gameBoard[id] === NO_PLAYER && !gameOver) {
      const newGameBoard = gameBoard.map((player, index) => {
        return index === id ? currentPlayer : player;
      });

      setGameBoard(newGameBoard);
      if (checkWin(newGameBoard, currentPlayer)) {
        setGameOver(true);
        setMessage(
          `Player ${currentPlayer === PLAYER_1 ? "1 (Red)" : "2 (Blue)"} wins!`
        );
      } else if (newGameBoard.every((player) => player !== NO_PLAYER)) {
        setGameOver(true);
        setMessage("It's a draw!");
      } else {
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        setMessage(
          `Player ${currentPlayer === PLAYER_1 ? "2 (Blue)" : "1 (Red)"}'s Turn`
        );
      }
    }
  };

  const checkWin = (board, player) => {
    const winPatterns = [
      // Horizontal patterns
      ...Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 4 }, (_, col) => [
          row * 7 + col,
          row * 7 + col + 1,
          row * 7 + col + 2,
          row * 7 + col + 3,
        ])
      ).flat(),

      // Vertical patterns
      ...Array.from({ length: 7 }, (_, col) =>
        Array.from({ length: 3 }, (_, row) => [
          row * 7 + col,
          (row + 1) * 7 + col,
          (row + 2) * 7 + col,
          (row + 3) * 7 + col,
        ])
      ).flat(),

      // Diagonal patterns (bottom-left to top-right)
      ...Array.from({ length: 3 }, (_, row) =>
        Array.from({ length: 4 }, (_, col) => [
          row * 7 + col,
          (row + 1) * 7 + col + 1,
          (row + 2) * 7 + col + 2,
          (row + 3) * 7 + col + 3,
        ])
      ).flat(),

      // Diagonal patterns (top-left to bottom-right)
      ...Array.from({ length: 3 }, (_, row) =>
        Array.from({ length: 4 }, (_, col) => [
          (row + 3) * 7 + col,
          (row + 2) * 7 + col + 1,
          (row + 1) * 7 + col + 2,
          row * 7 + col + 3,
        ])
      ).flat(),
    ];

    return winPatterns.some((pattern) =>
      pattern.every((index) => board[index] === player)
    );
  };

  const resetGame = () => {
    setGameBoard(Array(42).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
    setGameOver(false);
    setMessage(`Player 1 (Red)'s Turn`);
  };

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
    <div className="gameContainer">
      <div className="turnDisplay">
        {gameOver
          ? message
          : `Player ${
              currentPlayer === PLAYER_1 ? "1 (Red)" : "2 (Blue)"
            }'s Turn`}
      </div>
      <div className="gameBoard">
        {Array.from({ length: 42 }, (_, id) => renderCircle(id))}
      </div>
      <button
        className="newGameButton"
        onClick={resetGame}
        disabled={!gameOver}
      >
        New Game
      </button>
    </div>
  );
};

export default GameBoard;
