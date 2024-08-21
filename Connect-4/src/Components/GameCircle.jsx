import PropTypes from "prop-types";
import "./Game.css";

const onClick = (id) => {
  alert("clicked " + id);
};

const GameCircle = ({ id, children, backgroundColor }) => {
  const style = {
    backgroundColor: backgroundColor,
  };
  console.log(id);
  return (
    <>
      <div className="gameCircle" onClick={() => onClick(id)} style={style}>
        {children}
      </div>
    </>
  );
};

GameCircle.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default GameCircle;
