import { FC, PropsWithChildren } from "react";
import "./index.css";

const LoginContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="login-container">{children}</div>;
};

export default LoginContainer;
