import PropTypes from "prop-types";

const Button = ({ content, handleButtonCallback }) => (
  <button onClick={handleButtonCallback}>{content}</button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  handleButtonCallback: PropTypes.func,
};

export default Button;
