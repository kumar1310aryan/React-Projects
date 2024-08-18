import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ label, onClick, className }) => {
  return (
    <button className={`calculator-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, 
  className: PropTypes.string, 
};

Button.defaultProps = {
  className: '', 
};

export default Button;
