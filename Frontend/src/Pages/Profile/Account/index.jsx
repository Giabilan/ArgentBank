import PropTypes from "prop-types";
import Button from "../../../components/Form/Button";
import "./index.scss";

const Account = ({ accountTitle, accountAmount, accountDesc }) => {
  return (
    <div className="account">
      <div className="accountInfos">
        <div className="accountTitle">{accountTitle}</div>
        <div className="accountAmount">${accountAmount}</div>
        <div className="accountDesc">{accountDesc}</div>
      </div>
      <div className="viewsTransactionBtn">
        <Button content="views transactions" />
      </div>
    </div>
  );
};

Account.propTypes = {
  accountTitle: PropTypes.string.isRequired,
  accountAmount: PropTypes.string.isRequired,
  accountDesc: PropTypes.string.isRequired,
};

export default Account;
