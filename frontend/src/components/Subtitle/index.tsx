import { FC, PropsWithChildren } from "react";
import "./index.css";

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="subtitle">{children}</h1>;
};

export default Subtitle;
