import GameCircle from "./GameCircle";

const GameBoard = () => {
  const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    padding: 20,
    width: "500px",
    position: "absolute",
    left: "50%",
    marginLeft: "-250px",
    top:"15%"
  };
  return (
    <>
      <div style={style}>
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
