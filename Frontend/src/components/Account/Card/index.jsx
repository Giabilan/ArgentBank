import PropTypes from "prop-types";
import Button from "../../Button";
import "./style.scss";

function formatedNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const Account = ({
  bankName,
  typeOfTrsc,
  numbersOfTrsc,
  accountAmount,
  accountDesc,
}) => {
  return (
    <div className="account">
      <div className="accountInfos">
        <div className="accountTitle">
          {bankName}
          {typeOfTrsc}
          (x{numbersOfTrsc})
        </div>
        <div className="accountAmount">${formatedNumber(accountAmount)}</div>
        <div className="accountDesc">{accountDesc}</div>
      </div>
      <div className="viewsTransactionBtn">
        <Button content="views transactions" />
      </div>
    </div>
  );
};

Account.propTypes = {
  bankName: PropTypes.string.isRequired,
  typeOfTrsc: PropTypes.string.isRequired,
  numbersOfTrsc: PropTypes.number.isRequired,
  accountAmount: PropTypes.number.isRequired,
  accountDesc: PropTypes.string.isRequired,
};

export default Account;
