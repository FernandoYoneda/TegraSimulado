import "./index.css";
import ImageSVG from "../../../assets/image/Google.svg";

const GoogleButton = () => {
  return (
    <div className="googlebutton">
      <img src={ImageSVG} alt="imagem do google" className="google-logo" />{" "}
      <div className="googlebutton-text">Entrar com o Google</div>
    </div>
  );
};

export default GoogleButton;
