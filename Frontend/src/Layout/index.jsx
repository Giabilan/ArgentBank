import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style.scss";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="pageContent">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
