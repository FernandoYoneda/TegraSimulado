import { FC } from "react";
import Button from "../../../components/Button";
import "./index.css";

type ModalProps = {
  openModal: boolean;
  onCloseModal: () => void;
};

const Modal: FC<ModalProps> = ({ openModal, onCloseModal }) => {
  return (
    <div
      onClick={onCloseModal}
      className={`modal-container ${openModal ? "modal-container-open" : ""}`}
    >
      <div className="modal-filter">
        <label> Filtrar por preço:</label>
        <div className="button-container">
          <Button
            text="R$5 à R$25"
            variant="small"
            onClick={onCloseModal}
          ></Button>
          <Button
            text="R$26 à R$45"
            variant="small"
            onClick={onCloseModal}
          ></Button>
          <Button
            text="R$46 ou mais"
            variant="small"
            onClick={onCloseModal}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
