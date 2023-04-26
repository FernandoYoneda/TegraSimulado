import { FC } from "react";
import "./index.css";

type Props = {
  src: string;
  alt: string;
};

const Image: FC<Props> = ({ src, alt }) => {
  return <img className="product-image" src={src} alt={alt}></img>;
};

export default Image;
