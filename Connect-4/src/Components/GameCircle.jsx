import PropTypes from "prop-types";
import "./Game.css";

const GameCircle = ({ id, onCircleClicked }) => {
  return (
    <div className={`gameCircle player_0`} onClick={() => onCircleClicked(id)}>
      {/* No text inside the circle */}
    </div>
  );
};

GameCircle.propTypes = {
  id: PropTypes.number.isRequired,
  onCircleClicked: PropTypes.func.isRequired,
};

export default GameCircle;
