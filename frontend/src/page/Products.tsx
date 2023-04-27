import ProductCard from "../domain/product/ProductCard";
import imageSVG from "../assets/image/mikael-stenberg-cJeGGOI8eE0-unsplash.jpg";
import "./Products.css";
import { FC } from "react";

type ProductsProps = {
  onBuy: (id: number) => void;
};

const Products: FC<ProductsProps> = ({ onBuy }) => {
  return (
    <div className="products-container">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <ProductCard
            key={i}
            image={imageSVG}
            name={"Refri Coca zero 350ml"}
            description={
              "(Pão, hamburguer, calabresa, iscas de carne, muçarela, cebola e picles)"
            }
            price={5}
            onClick={() => onBuy(i)}
          />
        ))}
    </div>
  );
};

export default Products;
