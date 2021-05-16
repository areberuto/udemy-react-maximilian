import { useState } from "react";
import "./Expenses.css";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");
  const yearChangeHandler = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.items.filter(
    (i) => i.date.getFullYear().toString() === yearFilter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearFilter}
          onYearChange={yearChangeHandler}
        ></ExpensesFilter>
        {filteredExpenses.length > 0 && (
          <ExpensesChart expenses={filteredExpenses} />
        )}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
