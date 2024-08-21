import PropTypes from "prop-types";

const onClick = (id) => {
  alert("clicked " + id);
};

const GameCircle = ({ id, children, backgroundColor }) => {
  console.log(id);
  return (
    <>
      <div
        className="circle"
        onClick={() => onClick(id)}
        style={{
          backgroundColor: backgroundColor,
          height: 100,
          width: 100,
          margin: 10,
          borderRadius: 50,
        }}
      >
        {children}
      </div>
    </>
  );
};

GameCircle.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default GameCircle;
