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
        <Navigation to="/sign-in" content="Sign In" icon="fa fa-user-circle" />
        {/* nav log out à venir */}
      </nav>
    </header>
  );
};

export default Header;
