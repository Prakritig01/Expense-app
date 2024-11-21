import React from "react";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import { useState } from "react";

const ExpenseListPage = () => {
  const expenseDataString = localStorage.getItem("expense_data_key") || "[]";
  const expenses = JSON.parse(expenseDataString);

  function useForceUpdate() {        //custom react hook
    const [value,setValue] = useState(0);
    return () => setValue((value) => value + 1);
  };
  const forceUpdate = useForceUpdate();

  const handleDelete = (index) => {
    expenses.splice(index, 1);
    const updatedExpenseDataString = JSON.stringify(expenses);
    localStorage.setItem("expense_data_key", updatedExpenseDataString);
    forceUpdate();
  }
  return (
    <div>
      <h1>Expense List</h1>
      <ExpenseList enteries={expenses} onDeleteExpense={handleDelete} />
    </div>
  );
};
export default ExpenseListPage;
