import { FC, PropsWithChildren } from "react";
import "./index.css";

const RegisterContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="register-container">{children}</div>;
};

export default RegisterContainer;
