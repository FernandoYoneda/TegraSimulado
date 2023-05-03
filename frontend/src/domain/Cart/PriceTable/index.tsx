import "./index.css";

const PriceTable = () => {
  return (
    <div className="pricetable">
      <div className="pricetable-container">
        <div className="c1">
          <span>SUBTOTAL</span>
        </div>
        <div className="c2">
          <span>R$83,00</span>
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
          <span>R$83,00</span>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
