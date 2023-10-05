import Card from "./Card";

const AccountCard = () => {
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
