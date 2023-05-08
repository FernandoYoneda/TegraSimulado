import { FC } from "react";
import "./index.css";

type FilterProps = {
  category: string;
  onFilterClick: () => void;
  filterOption: null | unknown;
  onSortClick: () => void;
  sortOption: null | unknown;
};

const Filter: FC<FilterProps> = ({
  category,
  onFilterClick,
  filterOption,
  onSortClick,
  sortOption,
}) => {
  return (
    <div className="filter-container">
      <div className="filter-option">
        <label className="filter-product-label">Produtos</label>
        <label className="option small underline">{category}</label>
      </div>
      <div className="filter-icon-buttons">
        <span
          className={`material-symbols-outlined orange ${
            filterOption ? "selected" : ""
          }`}
          onClick={onFilterClick}
        >
          filter_alt
        </span>
        <span
          className={`material-symbols-outlined orange ${
            sortOption ? "selected" : ""
          }`}
          onClick={onSortClick}
        >
          sort_by_alpha
        </span>
      </div>
    </div>
  );
};

export default Filter;
