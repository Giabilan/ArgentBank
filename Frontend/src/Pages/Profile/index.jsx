import "./style.scss";
import AccountCard from "../../components/Account";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { editUserName } from "../../API";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector((state) => state.user);
  const [userCopy, setUserCopy] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setUserCopy({ username: user.userName });
  }, [user]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const response = await editUserName(user.token, userCopy);
    if (response.status === 200) {
      dispatch({
        type: "user/updateUser",
        payload: { userDatas: response.body },
      });
      setIsEditing(false);
    }
  };

  return (
    <div className="profileContainer">
      {isEditing ? (
        <>
          <h1 className="profileTitle">Edit user info</h1>
          <form className="formContainer" onSubmit={handleEdit}>
            <div className="LabelInputContainer">
              <label htmlFor="username">User name :</label>
              <input
                type="text"
                name="username"
                id="username"
                value={userCopy.username}
                onChange={(event) =>
                  setUserCopy({ username: event.target.value })
                }
              />
            </div>
            <div className="LabelInputContainer">
              <label htmlFor="firstname">First name :</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={user.firstName}
                disabled
              />
            </div>
            <div className="LabelInputContainer">
              <label htmlFor="lastname">Last name :</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={user.lastName}
                disabled
              />
            </div>
            <div className="editButtonContainer">
              <Button type="submit" content="Save" />
              <Button content="Cancel" onClick={() => setIsEditing(false)} />
            </div>
          </form>
        </>
      ) : (
        <>
          <h1 className="profileTitle">
            Welcome back <br></br> {user.firstName} {user.lastName} !
          </h1>
          <div className="editNameButton">
            <Button content="Edit Name" onClick={() => setIsEditing(true)} />
          </div>
        </>
      )}
      <AccountCard />
    </div>
  );
};

export default Profile;
