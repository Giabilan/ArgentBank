import "./style.scss";
import Logo from "../../assets/logoArgenBank/logo.png";
import Navigation from "./Navigation/index.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav>
        {!user.token ? (
          <Navigation to="/login" content="Sign In" icon="fa fa-user-circle" />
        ) : (
          <>
            <Navigation
              to="/profile"
              content={user.userName}
              icon="fa fa-user-circle"
            />

            <Navigation
              to="/"
              content="Sign out"
              icon="fa-solid fa-right-from-bracket"
              action="logout"
            />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
