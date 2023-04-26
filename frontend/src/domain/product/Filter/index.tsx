import "./index.css";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-option">
        <label className="product-label">Produtos</label>
        <label className="option">
          <u>Todos</u>
        </label>
      </div>
      <div className="filter-icon-buttons">
        <span className="material-symbols-outlined orange">filter_alt</span>
        <span className="material-symbols-outlined orange">sort_by_alpha</span>
      </div>
    </div>
  );
};

export default Filter;
