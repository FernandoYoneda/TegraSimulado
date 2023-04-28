import { useEffect, useState } from "react";
import products from "../assets/json/products.json";
import { Product } from "../domain/product/types";

//components
import Header from "../components/Header";
import Filter from "../domain/product/Filter";
import SideBar from "../domain/product/SideBar";

//pages
import ProductsList from "../domain/product/ProductsList";
import BuyNotification from "../domain/product/Notification/Buy";
import Modal from "../domain/product/Modal";

const Products = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [productsLoaded, setProductsLoaded] = useState<Product[]>([]);
  const [priceFilter, setPriceFilter] = useState<null | {
    from: number;
    to: number;
  }>(null);

  useEffect(() => {
    function loadProducts() {
      return (
        Promise.resolve(products)
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
          //.then((p) => p.sort((x,y) => x.price - y.price))
          .then(setProductsLoaded)
      );
    }
    loadProducts();
    if (notificationOpen) {
      const timer = setTimeout(() => setNotificationOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [notificationOpen, category, priceFilter]);

  return (
    <div>
      <SideBar
        categorySelected={category}
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onCategoryChange={(c) => setCategory(c)}
      />
      <Header onMenuOpen={() => setMenuOpen((old) => !old)} />
      <Filter category={category} onFilterClick={() => setModalOpen(true)} />
      <ProductsList
        onBuy={() => setNotificationOpen(true)}
        products={productsLoaded}
      />
      <BuyNotification openBuyNotification={notificationOpen} />
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

export default Products;
