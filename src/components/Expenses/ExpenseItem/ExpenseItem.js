import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("bababa");
  };

  const amountHandler = () => {
    setAmount(40);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
      <button onClick={amountHandler}>Change amoutn</button>
    </Card>
  );
};

export default ExpenseItem;
