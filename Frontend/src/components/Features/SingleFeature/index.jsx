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
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SingleFeature;
