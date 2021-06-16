import React from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import IndividualMeal from "./IndividualMeal";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const AvailableMeals = () => {
  const cartCtx = useContext(CartContext);

  return (
    <section className={styles.meals}>
      <Card className={styles.card}>
        <ul>
          {cartCtx.availableMeals.map((m) => (
            <IndividualMeal
              key={m.id}
              id={m.id}
              name={m.name}
              price={m.price}
              description={m.description}
            ></IndividualMeal>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
