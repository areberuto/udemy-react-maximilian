import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/cart-context";

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const handleCart = () => {
    setCartDisplay(true);
  };

  const handleConfirm = () => {
    console.log("Ordering...");
    setCartDisplay(false);
  };

  const handleCancel = () => {
    setCartDisplay(false);
  };

  return (
    <CartContextProvider>
      {cartDisplay && (
        <Modal onCancel={handleCancel}>
          <Cart onConfirm={handleConfirm} onCancel={handleCancel} />
        </Modal>
      )}
      <Header onCartDisplay={handleCart} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
