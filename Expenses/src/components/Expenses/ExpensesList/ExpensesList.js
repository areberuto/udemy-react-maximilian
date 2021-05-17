import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesLists = (props) => {
  if (!props.items.length) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((i) => (
        <ExpenseItem
          key={i.id}
          title={i.title}
          amount={i.amount}
          date={i.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesLists;
