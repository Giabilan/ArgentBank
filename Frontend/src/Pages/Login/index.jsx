import "./style.scss";
import Button from "../../components/Button";
import TextInput from "../../components/Form/TextInput";
import PaswordInput from "../../components/Form/PasswordInput";
import CheckboxInput from "../../components/Form/CheckboxInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserDatas, loginAPI } from "../../API";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleButtonCallback = async () => {
    try {
      const response = await loginAPI({ email, password });
      if (response.status === 200) {
        const userDatas = await getUserDatas(response.body.token);
        if (userDatas.status === 200) {
          dispatch({type:"user/updateUser", payload: {userDatas: {...userDatas.body, token: response.body.token}}})
          navigate("/profile");
        } else {
          throw new Error(userDatas.message);
        }
      } else if (response.status === 400) {
        throw new Error(response.message);
      }
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="login">
      <div className="loginForm">
        <i className="fa fa-user-circle signInIcon"></i>
        <h1 className="loginFormTitle">Sign In</h1>
        <TextInput
          handleCallback={(eventCallback) => {
            setEmail(eventCallback.value);
            setError("");
          }}
        />
        <PaswordInput
          handleCallback={(eventCallback) => {
            setPassword(eventCallback.value);
            setError("");
          }}
        />
        <CheckboxInput />
        {error && <div className="errorLogin">{error}</div>}
        <Button content="Sign In" handleButtonCallback={handleButtonCallback} />
      </div>
    </div>
  );
};

export default Login;
