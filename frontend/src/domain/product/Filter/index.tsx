import { FC } from "react";
import "./index.css";
import { selectIsUserAdmin } from "../../../features/user/userSlice";
import { useAppSelector } from "../../../app/hooks";

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
  const isUserAdmin = useAppSelector(selectIsUserAdmin);

  return (
    <div className="filter-container">
      <div className="filter-option">
        <label className="filter-product-label">Produtos</label>
        <label className="option small underline">{category}</label>
      </div>
      <div className="filter-icon-buttons">
        {!isUserAdmin && (
          <span
            className={`material-symbols-outlined orange filter ${
              filterOption ? "selected" : ""
            }`}
            onClick={onFilterClick}
          >
            filter_alt
          </span>
        )}
        <span
          className={`material-symbols-outlined orange ${
            sortOption ? "selected" : ""
          }`}
          onClick={onSortClick}
        >
          sort_by_alpha
        </span>
        {isUserAdmin && <button className="add-button">Adicionar +</button>}
      </div>
    </div>
  );
};

export default Filter;
