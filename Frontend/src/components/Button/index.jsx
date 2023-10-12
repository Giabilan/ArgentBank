import PropTypes from "prop-types";

const Button = ({ content, onClick, type }) => (
  <button type={type} onClick={onClick}>{content}</button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
