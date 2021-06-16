import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnBump, setBtnBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const buttonClasses = `${styles.button} ${btnBump ? styles.bump : ""}`;
  const totalItems = cartCtx.items.reduce((totalValue, current) => {
    return totalValue + current.quantity;
  }, 0);

  const { items } = cartCtx;
  useEffect(() => {
    if (!items.length) {
      return;
    }
    setBtnBump(true);
    const timer = setTimeout(() => setBtnBump(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>My cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
