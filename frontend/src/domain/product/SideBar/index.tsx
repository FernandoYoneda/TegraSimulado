import { FC } from "react";
import "./index.css";
import imageSVG from "../../../assets/image/Logo Tegrafood.svg";
import Image from "../../../components/Image";

type SideBarProps = {
  menuOpen: boolean;
  onClose: () => void;
  onCategoryChange: (category: string) => void;
};

const SideBar: FC<SideBarProps> = ({ menuOpen, onClose, onCategoryChange }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`products-sidebar  ${
          menuOpen ? "products-sidebar-open " : ""
        }`}
      >
        <div className="logo-tegrafood">
          <Image src={imageSVG} alt={"Logo Tegra Food"} />
        </div>
        <div className="sidebar-filter">
          <ul>
            <li>
              <button onClick={() => onCategoryChange("Todos")}>Todos</button>
            </li>
            <li>
              <button onClick={() => onCategoryChange("Pizza")}>Pizza</button>
            </li>
            <li>
              <button onClick={() => onCategoryChange("Sobremesa")}>
                Sobremesa
              </button>
            </li>
            <li>
              <button onClick={() => onCategoryChange("Pastel")}>Pastel</button>
            </li>
            <li>
              <button onClick={() => onCategoryChange("Açaí")}>Açaí</button>
            </li>
            <li>
              <button onClick={() => onCategoryChange("Bebidas")}>
                Bebidas
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={onClose}
        className={`sidebar-background ${
          menuOpen ? "sidebar-background-open" : ""
        }`}
      ></div>
    </>
  );
};

export default SideBar;
