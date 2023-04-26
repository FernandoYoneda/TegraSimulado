import { FC } from "react";
import "./index.css";

type Props = {
  text: string;
};

const ProductNameLabel: FC<Props> = ({ text }) => {
  return <label className="product-name">{text}</label>;
};

export default ProductNameLabel;
