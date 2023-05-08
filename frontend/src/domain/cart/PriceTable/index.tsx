import "./index.css";
import { selectProductsPrice } from "../../../features/products/productsSlice";
import { useAppSelector } from "../../../app/hooks";

const PriceTable = () => {
  const price = useAppSelector(selectProductsPrice);

  return (
    <div className="pricetable">
      <div className="pricetable-container">
        <div className="c1">
          <span>SUBTOTAL</span>
        </div>
        <div className="c2">
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </span>
        </div>
        <div className="c1">
          <span>ENTREGA</span>
        </div>
        <div className="c2">
          <span>
            <u>Calcular</u>
          </span>
        </div>
        <div className="c1">
          <span>TOTAL</span>
        </div>
        <div className="c2">
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
