import { FC } from "react";
import "./index.css";

type Props = {
  src: string;
  alt: string;
};

const ProductImage: FC<Props> = ({ src, alt }) => {
  return <img className="product-image" src={src} alt={alt}></img>;
};

export default ProductImage;
