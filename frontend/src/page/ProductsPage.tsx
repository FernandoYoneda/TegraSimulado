import { useEffect, useState } from "react";
import products from "../assets/json/products.json";
import { Product } from "../domain/product/types";
import { useAppDispatch } from "../app/hooks";
import {
  addProduct,
  clearEditProduct,
  editProduct,
} from "../features/products/productsSlice";
import { useNavigate } from "react-router-dom";

//components
import Header from "../components/Header";
import Filter from "../domain/product/Filter";
import SideBar from "../domain/product/SideBar";

//pages
import ProductsList from "../domain/product/ProductsList";
import BuyNotification from "../domain/product/Notification/Buy";
import Modal from "../domain/product/Modal";
import SortNotification from "../domain/product/Notification/Sort";

const ProductsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [sortNotificationOpen, setSortNotificationOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [productsLoaded, setProductsLoaded] = useState<Product[]>([]);
  const [priceFilter, setPriceFilter] = useState<null | {
    from: number;
    to: number;
  }>(null);
  const [sortFilter, setSortFilter] = useState<null | string>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    function loadProducts() {
      return Promise.resolve(products)
        .then((p) => {
          if (category === "Todos") return p;
          else {
            return p.filter((x) => x.category === category);
          }
        })
        .then((p) => {
          if (!priceFilter) {
            return p;
          } else {
            return p.filter(
              (x) => x.price >= priceFilter.from && x.price <= priceFilter.to
            );
          }
        })
        .then((p) =>
          [...p].sort((x, y) => {
            if (!sortFilter) {
              return 0;
            } else if (sortFilter === "asc") {
              return x.name > y.name ? 1 : -1;
            } else {
              return x.name > y.name ? -1 : 1;
            }
          })
        )
        .then(setProductsLoaded);
    }
    loadProducts();
    if (notificationOpen) {
      const timer = setTimeout(() => setNotificationOpen(false), 3000);
      return () => clearTimeout(timer);
    }
    if (sortNotificationOpen) {
      const timer = setTimeout(() => setSortNotificationOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [
    notificationOpen,
    category,
    priceFilter,
    sortFilter,
    sortNotificationOpen,
  ]);

  return (
    <div className="products-page-container">
      <SideBar
        categorySelected={category}
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onCategoryChange={(c) => setCategory(c)}
      />
      <div className="products-main-content-container">
        <Header onMenuOpen={() => setMenuOpen((old) => !old)} />
        <Filter
          onCreateClick={() => {
            dispatch(clearEditProduct());
            navigate("/produtos/gerenciar");
          }}
          onSortClick={() => {
            setSortFilter((filter) => {
              if (!filter) {
                return "asc";
              }
              return filter === "asc" ? "desc" : "asc";
            });
            setSortNotificationOpen(true);
          }}
          category={category}
          onFilterClick={() => setModalOpen(true)}
          filterOption={priceFilter}
          sortOption={sortFilter}
        />
        <ProductsList
          onEdit={(product) => {
            dispatch(editProduct(product));
            navigate("/produtos/gerenciar");
          }}
          onBuy={(product) => {
            setNotificationOpen(true);
            dispatch(addProduct({ ...product, amount: 1 }));
          }}
          products={productsLoaded}
        />
      </div>
      <BuyNotification openBuyNotification={notificationOpen} />
      <SortNotification
        openSortNotification={sortNotificationOpen}
        onClose={() => {
          setSortFilter(null);
          setSortNotificationOpen(false);
        }}
      />
      <Modal
        openModal={modalOpen}
        onCloseModal={(x) => {
          setModalOpen(false);
          setPriceFilter(x && { ...x });
        }}
      />
    </div>
  );
};

export default ProductsPage;
