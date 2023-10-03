import "./style.scss";
import PropTypes from "prop-types";

const Button = ({ content }) => <button>{content}</button>;

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
