import PropTypes from "prop-types";
import "./Game.css";

const onClick = (id) => {
  alert("clicked " + id);
};

const GameCircle = ({ id, children }) => {
  console.log(id);
  return (
    <>
      <div
        className="gameCircle"
        onClick={() => onClick(id)}
        style={
          id % 2 === 0
            ? { backgroundColor: "blue" }
            : { backgroundColor: "red" }
        }
      >
        {children}
      </div>
    </>
  );
};

GameCircle.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default GameCircle;
