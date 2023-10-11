import Button from "../../components/Button";
import AccountCard from "../../components/Account/index";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { editUserName } from "../../API";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [userCopy, setUserCopy] = useState({
    username: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setUserCopy({
      username: user.userName,
    });
  }, [user]);

  const dispatch = useDispatch();
  const handleEdit = async () => {
    const response = await editUserName(user.token, userCopy);
    if (response.status === 200) {
      dispatch({
        type: "user/updateUser",
        payload: { userDatas: response.body },
      });
    }
  };

  return (
    <div className="profileContainer">
      {isEditing ? (
        <>
          <h1 className="profileTitle">Edit user info</h1>
          <div className="inputLabelContainer">
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              value={userCopy.username}
              onChange={(event) =>
                setUserCopy({ ...userCopy, username: event.target.value })
              }
              name="username"
              id="username"
            />
          </div>
          <div className="inputLabelContainer">
            <label htmlFor="firstname">Firstname :</label>
            <input
              type="text"
              value={user.firstName}
              name="firstname"
              id="firstname"
              disabled
            />
          </div>
          <div className="inputLabelContainer">
            <label htmlFor="lastname">Lastname :</label>
            <input
              type="text"
              value={user.lastName}
              name="lastname"
              id="lastname"
              disabled
            />
          </div>
          <div className="editButtonContainer">
            <Button content="Save" onClick={handleEdit} />
            <Button content="Cancel" onClick={() => setIsEditing(false)} />
          </div>
        </>
      ) : (
        <>
          <h1 className="profileTitle">
            Welcome back <br></br>
            {user.firstName} {user.lastName} !
          </h1>
          <Button content="Edit Name" onClick={() => setIsEditing(true)} />
        </>
      )}
      <AccountCard />
    </div>
  );
};

export default Profile;
