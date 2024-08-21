import GameCircle from "./GameCircle";
import "./Game.css";

const GameBoard = () => {
  return (
    <div className="gameBoard">
      <GameCircle key={1} id={1} />
      <GameCircle key={2} id={2} />
      <GameCircle key={3} id={3} />
      <GameCircle key={4} id={4} />

      <GameCircle key={5} id={5} />
      <GameCircle key={6} id={6} />
      <GameCircle key={7} id={7} />
      <GameCircle key={8} id={8} />

      <GameCircle key={9} id={9} />
      <GameCircle key={10} id={10} />
      <GameCircle key={11} id={11} />
      <GameCircle key={12} id={12} />

      <GameCircle key={13} id={13} />
      <GameCircle key={14} id={14} />
      <GameCircle key={15} id={15} />
      <GameCircle key={16} id={16} />
    </div>
  );
};

export default GameBoard;
