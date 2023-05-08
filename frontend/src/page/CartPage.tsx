import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  removeProductById,
  selectProducts,
  incrementByAmount,
} from "../features/products/productsSlice";

//components
import Header from "../components/Header";
import SideBar from "../domain/product/SideBar";

//pages
import CartTitle from "../domain/cart/Title";
import BuyingCards from "../domain/cart/BuyingCard";
import DiscountCard from "../domain/cart/DiscountCard";
import PriceTable from "../domain/cart/PriceTable";
import Footer from "../domain/cart/Footer";

const CartPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notificationOpen) {
      const timer = setTimeout(() => setNotificationOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [notificationOpen]);
  return (
    <div className="cart-page-container">
      <SideBar
        categorySelected={category}
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onCategoryChange={(c) => setCategory(c)}
      />

      <div className="cart-main-content-container">
        <Header onMenuOpen={() => setMenuOpen((old) => !old)} />
        <div className="cart-products-container">
          <CartTitle />
          <BuyingCards
            products={products}
            onRemove={(id) => dispatch(removeProductById(id))}
            onAmountChange={(id, amount) =>
              dispatch(incrementByAmount({ id, amount }))
            }
          />
          <div className="discount-price-container">
            <DiscountCard />
            <PriceTable />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
