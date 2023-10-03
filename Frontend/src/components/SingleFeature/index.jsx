import "./style.scss";
import PropTypes from "prop-types";

const SingleFeature = ({ icon, title, subtitle }) => {
  return (
    <div className="feature">
      <img
        className="featureIcon"
        src={`src/assets/featuresIcon/icon-${icon}.png`}
        alt={`Image de ${icon}`}
      />
      <h3 className="featureTitle">{title}</h3>
      <p className="featureSubtitle">{subtitle}</p>
    </div>
  );
};

SingleFeature.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
};

export default SingleFeature;
