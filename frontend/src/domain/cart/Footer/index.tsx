import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <div className="cart-footer">
      <div className="cart-footer-link-container">
        <Link to="/produtos">Escolher mais</Link>
      </div>
      <div>
        <button>Finalizar compra</button>
      </div>
    </div>
  );
};

export default Footer;
