import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");
  const yearChangeHandler = (year) => {
    setYearFilter(year);
  };

  const mapExpenses = () => {
    const filteredExpenses = props.items.filter(
      (i) => i.date.getFullYear().toString() === yearFilter
    );
    return filteredExpenses.map((i) => (
      <ExpenseItem
        key={i.id}
        title={i.title}
        amount={i.amount}
        date={i.date}
      ></ExpenseItem>
    ));
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearFilter}
          onYearChange={yearChangeHandler}
        ></ExpensesFilter>
        {mapExpenses()}
      </Card>
    </div>
  );
};

export default Expenses;
