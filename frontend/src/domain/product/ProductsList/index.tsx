import ProductCard from "../../../domain/product/ProductCard";
import "./index.css";
import { FC } from "react";
import { Product } from "../types";

type ProductsProps = {
  onBuy: (product: Product) => void;
  products: Product[];
};

const Products: FC<ProductsProps> = ({ onBuy, products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          onClick={() => onBuy(product)}
        />
      ))}
    </div>
  );
};

export default Products;
