import "./index.css";
import { FC, PropsWithChildren } from "react";
import imagedesktop from "../../assets/image/loginlogo.jpg";

const DesktopImageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="desktop-login-container">
      <div className="desktop-login-image">
        <img src={imagedesktop} alt="imagem do desktop" />
      </div>
      {children}
    </div>
  );
};

export default DesktopImageContainer;
