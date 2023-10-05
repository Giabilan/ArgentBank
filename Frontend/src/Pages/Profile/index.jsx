import Button from "../../components/Form/Button";
import Account from "../Profile/Account/index";
import "./index.scss";

const Profile = () => {
  return (
    <div className="profileContainer">
      <h1 className="profileTitle">
        Welcome back <br></br>Captain !
      </h1>
      <Button content="Edit Name" />
      <div className="accountContainer">
        <Account
          accountTitle="Argent Bank Checking (x8349)"
          accountAmount="2,082.79"
          accountDesc="Available Balance"
        />
        <Account
          accountTitle="Argent Bank Savings (x6712)"
          accountAmount="10,928.42"
          accountDesc="Available Balance"
        />
        <Account
          accountTitle="Argent Bank Credit Card (x8349)"
          accountAmount="184.30"
          accountDesc="Current Balance"
        />
      </div>
    </div>
  );
};

export default Profile;
