import "./index.css";
import Button from "../../../components/Button";
import PriceLabel from "../../../components/Label/Price";
import ProductDescriptionLabel from "../../../components/Label/Product/Description";
import Image from "../../../components/Image";
import ProductNameLabel from "../../../components/Label/Product/Name";
import { FC } from "react";

type BuyingCardProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  onClick: () => void;
};

const BuyingCard: FC<BuyingCardProps> = ({
  image,
  name,
  description,
  price,
  onClick,
}) => {
  return (
    <div className="buyingcard-container">
      <div className="buyingcard">
        <div className="container-image">
          <Image src={image} alt={name} />
        </div>
        <div className="container-product-info">
          <ProductNameLabel text={name} />
          <ProductDescriptionLabel text={description} />
        </div>
        <div className="container-product-buy">
          <PriceLabel
            text={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          />
          <Button onClick={onClick} text="Comprar" variant="small" />
        </div>
      </div>
      <div className="buyingcard"></div>
      <div className="buyingcard"></div>
    </div>
  );
};

export default BuyingCard;
