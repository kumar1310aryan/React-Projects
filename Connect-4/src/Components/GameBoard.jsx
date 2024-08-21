import GameCircle from "./GameCircle";

const GameBoard = () => {
  return (
    <>
      <div>
        <GameCircle id={1}>red</GameCircle>
        <GameCircle id={2}>blue</GameCircle>
        <GameCircle id={3}>red</GameCircle>
        <GameCircle id={4}>blue</GameCircle>

        <GameCircle id={5}>red</GameCircle>
        <GameCircle id={6}>blue</GameCircle>
        <GameCircle id={7}>red</GameCircle>
        <GameCircle id={8}>blue</GameCircle>

        <GameCircle id={9}>red</GameCircle>
        <GameCircle id={10}>blue</GameCircle>
        <GameCircle id={11}>red</GameCircle>
        <GameCircle id={12}>blue</GameCircle>

        <GameCircle id={13}>red</GameCircle>
        <GameCircle id={14}>blue</GameCircle>
        <GameCircle id={15}>red</GameCircle>
        <GameCircle id={16}>blue</GameCircle>
      </div>
    </>
  );
};

export default GameBoard;
