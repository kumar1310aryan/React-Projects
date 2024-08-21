import GameCircle from "./GameCircle";
import "./Game.css";

const GameBoard = () => {
  return (
    <div className="gameBoard">
      <GameCircle key={1} id={1} backgroundColor="red" />
      <GameCircle key={2} id={2} backgroundColor="blue" />
      <GameCircle key={3} id={3} backgroundColor="red" />
      <GameCircle key={4} id={4} backgroundColor="blue" />

      <GameCircle key={5} id={5} backgroundColor="red" />
      <GameCircle key={6} id={6} backgroundColor="blue" />
      <GameCircle key={7} id={7} backgroundColor="red" />
      <GameCircle key={8} id={8} backgroundColor="blue" />

      <GameCircle key={9} id={9} backgroundColor="red" />
      <GameCircle key={10} id={10} backgroundColor="blue" />
      <GameCircle key={11} id={11} backgroundColor="red" />
      <GameCircle key={12} id={12} backgroundColor="blue" />

      <GameCircle key={13} id={13} backgroundColor="red" />
      <GameCircle key={14} id={14} backgroundColor="blue" />
      <GameCircle key={15} id={15} backgroundColor="red" />
      <GameCircle key={16} id={16} backgroundColor="blue" />
    </div>
  );
};

export default GameBoard;
