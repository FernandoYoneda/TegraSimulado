import "./index.css";
import Image from "../Image";
import imageSVG from "../../assets/image/unsplash_mEZ3PoFGs_k.svg";
import { FC } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  onMenuOpen: () => void;
};

const Header: FC<HeaderProps> = ({ onMenuOpen }) => {
  return (
    <header className="header">
      <div className="header-container-left">
        <span onClick={onMenuOpen} className="material-symbols-outlined">
          menu
        </span>
      </div>
      <div className="header-container-right">
        <Link to="/carrinho">
          <span className="material-symbols-outlined small">shopping_cart</span>
        </Link>

        <span className="material-symbols-outlined small">notifications</span>
        <div className="profile-image">
          <Image src={imageSVG} alt={"Foto de perfil"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
