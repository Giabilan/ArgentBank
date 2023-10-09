import Button from "../../components/Button";
import AccountCard from "../../components/Account/index";
import "./style.scss";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="profileContainer">
      <h1 className="profileTitle">
        Welcome back <br></br>{user.firstName} {user.lastName} !
      </h1>
      <Button content="Edit Name" />
      <AccountCard />
    </div>
  );
};

export default Profile;
