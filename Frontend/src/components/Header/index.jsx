import "./style.scss";
import Logo from "../../assets/logoArgenBank/logo.png";
import Navigation from "./Navigation/index.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav>
        <Navigation to="/login" content="Sign In" icon="fa fa-user-circle" />
        <Navigation to="/" content="Sign out" icon="fa-solid fa-right-from-bracket" />
      </nav>
    </header>
  );
};

export default Header;
