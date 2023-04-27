import { FC } from "react";
import "./index.css";

type FilterProps = {
  category: string;
  onFilterClick: () => void;
};

const Filter: FC<FilterProps> = ({ category, onFilterClick }) => {
  return (
    <div className="filter-container">
      <div className="filter-option">
        <label className="product-label">Produtos</label>
        <label className="option small underline">{category}</label>
      </div>
      <div className="filter-icon-buttons">
        <span
          className="material-symbols-outlined orange"
          onClick={onFilterClick}
        >
          filter_alt
        </span>
        <span className="material-symbols-outlined orange">sort_by_alpha</span>
      </div>
    </div>
  );
};

export default Filter;
