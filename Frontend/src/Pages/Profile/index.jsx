import Button from "../../components/Form/Button";
import Account from "../../components/Account";
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
          bankName="Argent Bank"
          typeOfTrsc=" Checking "
          numbersOfTrsc={8349}
          accountAmount={2082790}
          accountDesc="Available Balance"
        />
        <Account
          bankName="Argent Bank"
          typeOfTrsc=" Savings "
          numbersOfTrsc={6712}
          accountAmount={10928420}
          accountDesc="Available Balance"
        />
        <Account
          bankName="Argent Bank"
          typeOfTrsc=" Credit Card "
          numbersOfTrsc={8349}
          accountAmount={184300}
          accountDesc="Current Balance"
        />
      </div>
    </div>
  );
};

export default Profile;
