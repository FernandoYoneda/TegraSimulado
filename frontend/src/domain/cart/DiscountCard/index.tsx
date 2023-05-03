import Button from "../../../components/Button";
import "./index.css";

const DiscountCard = () => {
  return (
    <div className="discountcard">
      <label>Cupom de desconto</label>
      <div className="discountcard-add">
        <input type="text" />

        <button>Adicionar</button>
      </div>
    </div>
  );
};

export default DiscountCard;
