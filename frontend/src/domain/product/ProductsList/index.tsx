import ProductCard from "../../../domain/product/ProductCard";
import "./index.css";
import { FC } from "react";
import { Product } from "../types";
import { selectIsUserAdmin } from "../../../features/user/userSlice";
import { useAppSelector } from "../../../app/hooks";

type ProductsProps = {
  onBuy: (product: Product) => void;
  products: Product[];
  onEdit: (product: Product) => void;
};

const Products: FC<ProductsProps> = ({ onBuy, products, onEdit }) => {
  const isUserAdmin = useAppSelector(selectIsUserAdmin);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          onClick={() => (isUserAdmin ? onEdit(product) : onBuy(product))}
        />
      ))}
    </div>
  );
};

export default Products;
