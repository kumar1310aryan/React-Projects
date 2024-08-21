import GameCircle from "./GameCircle";
import "./Game.css";

const GameBoard = () => {
  const circleClicked = (id) => {
    console.log("circle Clicked: " + id);
  };

  return (
    <div className="gameBoard">
      <GameCircle key={1} id={1} onCircleClicked={circleClicked} />
      <GameCircle key={2} id={2} onCircleClicked={circleClicked} />
      <GameCircle key={3} id={3} onCircleClicked={circleClicked} />
      <GameCircle key={4} id={4} onCircleClicked={circleClicked} />

      <GameCircle key={5} id={5} onCircleClicked={circleClicked} />
      <GameCircle key={6} id={6} onCircleClicked={circleClicked} />
      <GameCircle key={7} id={7} onCircleClicked={circleClicked} />
      <GameCircle key={8} id={8} onCircleClicked={circleClicked} />

      <GameCircle key={9} id={9} onCircleClicked={circleClicked} />
      <GameCircle key={10} id={10} onCircleClicked={circleClicked} />
      <GameCircle key={11} id={11} onCircleClicked={circleClicked} />
      <GameCircle key={12} id={12} onCircleClicked={circleClicked} />

      <GameCircle key={13} id={13} onCircleClicked={circleClicked} />
      <GameCircle key={14} id={14} onCircleClicked={circleClicked} />
      <GameCircle key={15} id={15} onCircleClicked={circleClicked} />
      <GameCircle key={16} id={16} onCircleClicked={circleClicked} />
    </div>
  );
};

export default GameBoard;
