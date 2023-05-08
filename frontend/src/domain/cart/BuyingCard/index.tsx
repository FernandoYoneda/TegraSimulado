import "./index.css";
import PriceLabel from "../../../components/Label/Price";
import ProductDescriptionLabel from "../../../components/Label/Product/Description";
import Image from "../../../components/Image";
import ProductNameLabel from "../../../components/Label/Product/Name";
import { FC } from "react";
import Select from "../../../components/Select";
import { CartProduct } from "../../../features/products/productsSlice";

type BuyingCardsProps = {
  products: CartProduct[];
  onRemove: (id: number) => void;
  onAmountChange: (id: number, amount: number) => void;
};

const BuyingCards: FC<BuyingCardsProps> = ({
  onRemove,
  products,
  onAmountChange,
}) => {
  return (
    <div className="buyingcard-container">
      {products.map((p) => (
        <div key={p.id} className="buyingcard">
          <div className="container-image">
            <Image src={p.image} alt={p.name} />
          </div>
          <div className="container-product-info">
            <ProductNameLabel text={p.name} />
            <ProductDescriptionLabel text={p.description} />
          </div>
          <div className="container-product-buy">
            <PriceLabel
              text={new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(p.price)}
            />
            <Select
              onChange={(value) => onAmountChange(p.id, value)}
              value={p.amount}
            />
          </div>
          <span
            className="material-symbols-outlined close"
            onClick={() => onRemove(p.id)}
          >
            close
          </span>
        </div>
      ))}
    </div>
  );
};

export default BuyingCards;
