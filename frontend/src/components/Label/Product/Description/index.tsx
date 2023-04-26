import { FC } from "react";
import "./index.css";

type Props = {
  text: string;
};

const ProductDescriptionLabel: FC<Props> = ({ text }) => {
  return <label className="product-description">{text}</label>;
};

export default ProductDescriptionLabel;
