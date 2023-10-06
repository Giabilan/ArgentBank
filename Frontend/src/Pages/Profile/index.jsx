import Button from "../../components/Form/Button";
import AccountCard from "../../components/Account/index"
import "./style.scss";

const Profile = () => {
  return (
    <div className="profileContainer">
      <h1 className="profileTitle">
        Welcome back <br></br>Captain !
      </h1>
      <Button content="Edit Name" />
      <AccountCard/>
    </div>
  );
};

export default Profile;
