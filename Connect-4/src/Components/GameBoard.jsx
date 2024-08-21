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
      [0, 1, 2, 3],
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
      [7, 8, 9, 10],
      [8, 9, 10, 11],
      [9, 10, 11, 12],
      [10, 11, 12, 13],
      [14, 15, 16, 17],
      [15, 16, 17, 18],
      [16, 17, 18, 19],
      [17, 18, 19, 20],
      [21, 22, 23, 24],
      [22, 23, 24, 25],
      [23, 24, 25, 26],
      [24, 25, 26, 27],
      [28, 29, 30, 31],
      [29, 30, 31, 32],
      [30, 31, 32, 33],
      [31, 32, 33, 34],
      [35, 36, 37, 38],
      [36, 37, 38, 39],
      [37, 38, 39, 40],
      [38, 39, 40, 41],

      [0, 7, 14, 21],
      [1, 8, 15, 22],
      [2, 9, 16, 23],
      [3, 10, 17, 24],
      [4, 11, 18, 25],
      [5, 12, 19, 26],
      [6, 13, 20, 27],
      [7, 14, 21, 28],
      [8, 15, 22, 29],
      [9, 16, 23, 30],
      [10, 17, 24, 31],
      [11, 18, 25, 32],
      [12, 19, 26, 33],
      [13, 20, 27, 34],
      [14, 21, 28, 35],
      [15, 22, 29, 36],
      [16, 23, 30, 37],
      [17, 24, 31, 38],
      [18, 25, 32, 39],
      [19, 26, 33, 40],
      [20, 27, 34, 41],

      [3, 9, 15, 21],
      [2, 8, 14, 20],
      [1, 7, 13, 19],
      [4, 10, 16, 22],
      [5, 11, 17, 23],
      [6, 12, 18, 24],
      [10, 16, 22, 28],
      [9, 15, 21, 27],
      [8, 14, 20, 26],
      [13, 19, 25, 31],
      [14, 20, 26, 32],
      [15, 21, 27, 33],
      [18, 24, 30, 36],
      [19, 25, 31, 37],
      [20, 26, 32, 38],

      [0, 8, 16, 24],
      [1, 9, 17, 25],
      [2, 10, 18, 26],
      [3, 11, 19, 27],
      [7, 15, 23, 31],
      [8, 16, 24, 32],
      [9, 17, 25, 33],
      [10, 18, 26, 34],
      [14, 22, 30, 38],
      [15, 23, 31, 39],
      [16, 24, 32, 40],
      [17, 25, 33, 41],
      [20, 26, 32, 38],
      [21, 27, 33, 39],
      [22, 28, 34, 40],
      [23, 29, 35, 41],
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
