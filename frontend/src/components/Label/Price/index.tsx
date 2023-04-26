import { FC } from "react";
import "./index.css";

type Props = {
  text: string;
};

const PriceLabel: FC<Props> = ({ text }) => {
  return <label className="price">{text}</label>;
};

export default PriceLabel;
