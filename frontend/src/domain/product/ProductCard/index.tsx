import { FC } from "react";
import Button from "../../../components/Button";
import Card from "../../../components/Container/Card";
import PriceLabel from "../../../components/Label/Price";
import ProductDescriptionLabel from "../../../components/Label/Product/Description";
import Image from "../../../components/Image";
import ProductNameLabel from "../../../components/Label/Product/Name";
import "./index.css";
import { selectIsUserAdmin } from "../../../features/user/userSlice";
import { useAppSelector } from "../../../app/hooks";

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  onClick: () => void;
};
const ProductCard: FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  onClick,
}) => {
  const isUserAdmin = useAppSelector(selectIsUserAdmin);

  return (
    <Card>
      <div className="image-spacing">
        <div className="container-image">
          <Image src={image} alt={name} />
        </div>
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
        <Button
          onClick={onClick}
          text={isUserAdmin ? "Editar" : "Comprar"}
          variant="small"
        />
      </div>
    </Card>
  );
};

export default ProductCard;
