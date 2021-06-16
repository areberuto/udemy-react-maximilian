import MealForm from "./MealForm";
import styles from "./IndividualMeal.module.css";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const IndividualMeal = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const handleAddItem = (quantity) => {
    const itemToAdd = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity,
    };
    cartCtx.onAddItem(itemToAdd);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealForm onAddItem={handleAddItem} />
      </div>
    </li>
  );
};

export default IndividualMeal;
