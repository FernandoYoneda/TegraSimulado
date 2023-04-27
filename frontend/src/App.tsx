import { useEffect, useState } from "react";
import "./App.css";

//components
import Header from "./components/Header";
import Filter from "./domain/product/Filter";
import SideBar from "./domain/product/SideBar";

//pages
import Products from "./page/Products";
import BuyNotification from "./domain/product/Notification/Buy";
import Modal from "./domain/product/Modal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (notificationOpen) {
      const timer = setTimeout(() => setNotificationOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [notificationOpen]);

  return (
    <div>
      <SideBar
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onCategoryChange={(c) => setCategory(c)}
      />
      <Header onMenuOpen={() => setMenuOpen((old) => !old)} />
      <Filter category={category} onFilterClick={() => setModalOpen(true)} />
      <Products onBuy={() => setNotificationOpen(true)} />
      <BuyNotification openBuyNotification={notificationOpen} />
      <Modal openModal={modalOpen} onCloseModal={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
