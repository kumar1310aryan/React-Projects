import PropTypes from "prop-types";

const onClick = (id) => {
  alert("clicked " + id);
};

const GameCircle = ({ id, children }) => {
  console.log(id);
  return (
    <>
      <div className="circle" onClick={() => onClick(id)}>
        {children}
      </div>
    </>
  );
};

GameCircle.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default GameCircle;
