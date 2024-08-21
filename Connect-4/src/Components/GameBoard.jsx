import GameCircle from "./GameCircle";

const GameBoard = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr",
        }}
      >
        <GameCircle id={1} backgroundColor="red"></GameCircle>
        <GameCircle id={2} backgroundColor="blue"></GameCircle>
        <GameCircle id={3} backgroundColor="red"></GameCircle>
        <GameCircle id={4} backgroundColor="blue"></GameCircle>

        <GameCircle id={5} backgroundColor="red"></GameCircle>
        <GameCircle id={6} backgroundColor="blue"></GameCircle>
        <GameCircle id={7} backgroundColor="red"></GameCircle>
        <GameCircle id={8} backgroundColor="blue"></GameCircle>

        <GameCircle id={9} backgroundColor="red"></GameCircle>
        <GameCircle id={10} backgroundColor="blue"></GameCircle>
        <GameCircle id={11} backgroundColor="red"></GameCircle>
        <GameCircle id={12} backgroundColor="blue"></GameCircle>

        <GameCircle id={13} backgroundColor="red"></GameCircle>
        <GameCircle id={14} backgroundColor="blue"></GameCircle>
        <GameCircle id={15} backgroundColor="red"></GameCircle>
        <GameCircle id={16} backgroundColor="blue"></GameCircle>
      </div>
    </>
  );
};

export default GameBoard;
