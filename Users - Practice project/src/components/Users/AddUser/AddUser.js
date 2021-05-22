import { useState } from "react";
import styles from "./AddUser.module.scss";
import Button from "../../UI/Button/Button";

const AddUser = (props) => {
  const [isValidName, setIsValidName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    if (e.target.value.trim().length) {
      setIsValidName(true);
    }
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    if (e.target.value.trim().length) {
      setIsValidAge(true);
    }
    setAge(e.target.value);
  };

  const handleNewUser = (e) => {
    e.preventDefault();
    if (!name.trim().length) {
      setIsValidName(false);
      props.onError("Name missing", "Tell us a name for the new user.");
      return;
    }
    if (!age.trim().length) {
      setIsValidAge(false);
      props.onError("Age missing", "Tell us an age for the new user.");
      return;
    }
    if (Number.parseInt(age.trim()) < 0) {
      setIsValidAge(false);
      props.onError("Invalid age", "You cannot be negative years old, sorry.");
      return;
    }

    props.onAddUser(age, name);
    setName("");
    setAge("");
  };

  return (
    <form className={styles["pp-add-users"]}>
      <div className={styles["pp-add-users__input-group"]}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={handleNameChange} />
      </div>
      <div className={styles["pp-add-users__input-group"]}>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={handleAgeChange} />
      </div>
      <Button type="submit" onClick={handleNewUser}>
        Add
      </Button>
    </form>
  );
};

export default AddUser;
