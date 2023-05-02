import { FC } from "react";
import "./index.css";

type SortNotificationProps = {
  openSortNotification: boolean;
  onClose: () => void;
};

const SortNotification: FC<SortNotificationProps> = ({
  openSortNotification,
  onClose,
}) => {
  return (
    <div
      className={`sort-notification-container ${
        openSortNotification ? "sort-notification-container-open" : ""
      }`}
    >
      <label className="sort-notification-text">
        Ítens organizados de A à Z
      </label>
      <button className="sort-notification-link" onClick={onClose}>
        Cancelar
      </button>
    </div>
  );
};

export default SortNotification;
