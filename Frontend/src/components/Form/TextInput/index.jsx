import PropTypes from "prop-types";

const TextInput = ({ handleCallback }) => {
  return (
    <div className="loginLabelInput">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(event) => handleCallback({ value: event.target.value })}
      />
    </div>
  );
};

TextInput.propTypes = {
  handleCallback: PropTypes.func.isRequired,
};

export default TextInput;
