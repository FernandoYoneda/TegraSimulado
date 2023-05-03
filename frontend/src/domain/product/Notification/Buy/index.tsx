import { FC } from "react";
import "./index.css";
import { Link } from "react-router-dom";

type BuyNotificationProps = {
  openBuyNotification: boolean;
};

const BuyNotification: FC<BuyNotificationProps> = ({ openBuyNotification }) => {
  return (
    <div
      className={`buy-notification-container ${
        openBuyNotification ? "buy-notification-container-open" : ""
      }`}
    >
      <label className="buy-notification-text">
        ítem adicionado ao carrinho
      </label>
      <Link to="/carrinho" className="buy-notification-link">
        ir para o carrinho
      </Link>
    </div>
  );
};

export default BuyNotification;
