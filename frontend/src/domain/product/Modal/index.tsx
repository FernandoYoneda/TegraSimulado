import { FC } from "react";
import Button from "../../../components/Button";
import "./index.css";

type ModalProps = {
  openModal: boolean;
  onCloseModal: (x: null | { from: number; to: number }) => void;
};

const Modal: FC<ModalProps> = ({ openModal, onCloseModal }) => {
  return (
    <div
      onClick={(e) => {
        if (openModal) {
          onCloseModal(null);
        }
        e.stopPropagation();
      }}
      className={`modal-container ${openModal ? "modal-container-open" : ""}`}
    >
      <div className="modal-filter" onClick={(e) => e.stopPropagation()}>
        <label className="modal-filter-title"> Filtrar por preço:</label>
        <div className="button-container">
          <Button
            text="R$5 à R$25"
            variant="small"
            onClick={(e) => {
              if (openModal) {
                onCloseModal({ from: 5, to: 25 });
              }
              e.stopPropagation();
            }}
          ></Button>
          <Button
            text="R$26 à R$45"
            variant="small"
            onClick={(e) => {
              if (openModal) {
                onCloseModal({ from: 26, to: 45 });
              }
              e.stopPropagation();
            }}
          ></Button>
          <Button
            text="R$46 ou mais"
            variant="small"
            onClick={(e) => {
              if (openModal) {
                onCloseModal({ from: 46, to: Infinity });
              }
              e.stopPropagation();
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
