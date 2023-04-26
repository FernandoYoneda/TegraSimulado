import { FC, PropsWithChildren } from "react";
import "./index.css";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
