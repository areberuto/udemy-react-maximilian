import styles from "./MealForm.module.css";
import { useRef } from "react";
import Input from "../UI/Input";

const MealForm = (props) => {
  const inputRef = useRef();

  const handleAdd = (e) => {
    e.preventDefault();
    const val = Number.parseInt(inputRef.current.value);
    if (!val || val < 1 || val > 5) {
      console.log("Nothing to add");
      return;
    }
    props.onAddItem(val);
    inputRef.current.value = 0;
  };

  return (
    <form className={styles.form}>
      <Input
        ref={inputRef}
        label="Quantity"
        input={{
          type: "number",
          id: Math.random(),
          min: 0,
        }}
      />
      <button type="submit" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
};

export default MealForm;
