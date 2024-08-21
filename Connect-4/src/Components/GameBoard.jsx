import GameCircle from "./GameCircle";

const GameBoard = () => {
  return (
    <>
      <div>
        <GameCircle id={1}>
          <span style={{ color: "red" }}>red</span>
        </GameCircle>
        <GameCircle id={2}>
          <span style={{ color: "blue" }}>blue</span>
        </GameCircle>
        <GameCircle id={3}>
          <span style={{ color: "red" }}>red</span>
        </GameCircle>
        <GameCircle id={4}>
          <span style={{ color: "blue" }}>blue</span>
        </GameCircle>

        <GameCircle id={5}>
          <span style={{ color: "red" }}>red</span>
        </GameCircle>
        <GameCircle id={6}>
          <span style={{ color: "blue" }}>blue</span>
        </GameCircle>
        <GameCircle id={7}>
          <span style={{ color: "red" }}>red</span>
        </GameCircle>
        <GameCircle id={8}>
          <span style={{ color: "blue" }}>blue</span>
        </GameCircle>

        <GameCircle id={9}>
          <span style={{ color: "red" }}>red</span>
        </GameCircle>
        <GameCircle id={10}>
          <span style={{ color: "blue" }}>blue</span>
        </GameCircle>
        <GameCircle id={11}>
          <span style={{ color: "red" }}>red</span>
        </GameCircle>
        <GameCircle id={12}>
          <span style={{ color: "blue" }}>blue</span>
        </GameCircle>

        <GameCircle id={13}>
          <span style={{ color: "red" }}>red</span>
        </GameCircle>
        <GameCircle id={14}>
          <span style={{ color: "blue" }}>blue</span>
        </GameCircle>
        <GameCircle id={15}>
          <span style={{ color: "red" }}>red</span>
        </GameCircle>
        <GameCircle id={16}>
          <span style={{ color: "blue" }}>blue</span>
        </GameCircle>
      </div>
    </>
  );
};

export default GameBoard;
