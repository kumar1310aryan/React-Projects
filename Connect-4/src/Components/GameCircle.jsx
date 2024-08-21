import PropTypes from "prop-types";
import "./Game.css";

const GameCircle = ({ id, onCircleClicked, className }) => {
  return (
    <div
      className={`gameCircle ${className}`}
      onClick={() => onCircleClicked(id)}
    ></div>
  );
};

GameCircle.propTypes = {
  id: PropTypes.number.isRequired,
  onCircleClicked: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default GameCircle;
