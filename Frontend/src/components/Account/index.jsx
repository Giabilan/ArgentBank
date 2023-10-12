import Card from "./Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AccountCard = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.token) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="accountContainer">
      <Card
        bankName="Argent Bank"
        typeOfTrsc=" Checking "
        numbersOfTrsc={8349}
        accountAmount={2082790}
        accountDesc="Available Balance"
      />
      <Card
        bankName="Argent Bank"
        typeOfTrsc=" Savings "
        numbersOfTrsc={6712}
        accountAmount={10928420}
        accountDesc="Available Balance"
      />
      <Card
        bankName="Argent Bank"
        typeOfTrsc=" Credit Card "
        numbersOfTrsc={8349}
        accountAmount={184300}
        accountDesc="Current Balance"
      />
    </div>
  );
};

export default AccountCard;
