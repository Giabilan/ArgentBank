import { Link } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";

const Navigation = ({ content, icon, to }) => {
  return (
    <div className="navigation">
      <i className={icon}></i>
      <Link to={to}>{content}</Link>
    </div>
  );
};

Navigation.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Navigation;
