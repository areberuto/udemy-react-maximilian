import React from "react";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const emptyMessage = "Nothing in your cart yet.";

  const onAdd = (item) => {
    const itemToAdd = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    cartCtx.onAddItem(itemToAdd);
  };

  let cartItems;

  if (cartCtx.items.length) {
    cartItems = (
      <ul className={styles["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            amount={item.quantity}
            onAdd={() => onAdd(item)}
            onRemove={() => cartCtx.onRemoveItem(item.id)}
          ></CartItem>
        ))}
      </ul>
    );
  }

  return (
    <Card className={styles.cart}>
      {cartItems ? cartItems : emptyMessage}
      {cartItems && (
        <div className={styles.total}>
          <span>Total</span>
          <span>{cartCtx.totalAmount}</span>
        </div>
      )}
      <div className={styles.actions}>
        <button onClick={props.onCancel} tabIndex="0">
          Cancel
        </button>
        {cartItems && (
          <button onClick={props.onConfirm} tabIndex="0">
            Order
          </button>
        )}
      </div>
    </Card>
  );
};

export default Cart;
