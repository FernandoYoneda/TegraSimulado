import { useEffect, useState } from "react";

//components
import Header from "../components/Header";
import Filter from "../domain/product/Filter";
import SideBar from "../domain/product/SideBar";

import imageSVG from "../assets/image/mikael-stenberg-cJeGGOI8eE0-unsplash.jpg";

//pages
import ProductsList from "../domain/product/ProductsList";
import BuyNotification from "../domain/product/Notification/Buy";
import Modal from "../domain/product/Modal";
import CartTitle from "../domain/cart/Title";
import BuyingCard from "../domain/cart/BuyingCard";

const Cart = () => {
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
        categorySelected={category}
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onCategoryChange={(c) => setCategory(c)}
      />
      <Header onMenuOpen={() => setMenuOpen((old) => !old)} />
      <CartTitle />
      <BuyingCard
        image={imageSVG}
        name={"Coca-cola Zero"}
        description={"(esse produto é feito com cola, e é zero açucar)"}
        price={5.0}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <BuyNotification openBuyNotification={notificationOpen} />
      <Modal openModal={modalOpen} onCloseModal={() => setModalOpen(false)} />
    </div>
  );
};

export default Cart;
