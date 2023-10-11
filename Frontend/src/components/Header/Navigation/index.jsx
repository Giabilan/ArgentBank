import { Link } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const Navigation = ({ content, icon, to, action }) => {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    if (action === "logout") {
      dispatch({ type: "user/logout" });
    }
  };

  return (
    <div className="navigation">
      <i className={icon}></i>
      <Link onClick={handleClickLogout} to={to}>{content}</Link>
    </div>
  );
};

Navigation.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  action: PropTypes.string,
};

export default Navigation;
