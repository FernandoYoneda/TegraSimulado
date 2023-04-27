import { FC } from "react";
import "./index.css";

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
      <label className="buy-notification-link">ir para o carrinho</label>
    </div>
  );
};

export default BuyNotification;
