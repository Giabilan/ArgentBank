import PropTypes from "prop-types";

const PasswordInput = ({ handleCallback }) => {
  return (
    <div className="loginLabelInput">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(event) => handleCallback({ value: event.target.value })}
      />
    </div>
  );
};

PasswordInput.propTypes = {
  handleCallback: PropTypes.func.isRequired,
};

export default PasswordInput;
