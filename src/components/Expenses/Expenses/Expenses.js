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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearFilter}
          onYearChange={yearChangeHandler}
        ></ExpensesFilter>
        {props.items.map((e) => {
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          ></ExpenseItem>;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
