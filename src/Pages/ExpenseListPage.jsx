import React from "react";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const ExpenseListPage = ({setEditIndex}) => {
  const navigate = useNavigate();
  const expenseDataString = localStorage.getItem("expense_data_key") || "[]";
  const expenses = JSON.parse(expenseDataString);

  
  function useForceUpdate() {                                      
    const [value,setValue] = useState(0);
    return () => setValue((value) => value + 1);
  };

  // const [value,setValue] = useState(0);
  const forceUpdate = useForceUpdate();

  const handleDelete = (index) => {
    expenses.splice(index, 1);
    const updatedExpenseDataString = JSON.stringify(expenses);
    localStorage.setItem("expense_data_key", updatedExpenseDataString);
    forceUpdate();
    // setValue((value) => value + 1);
  }

  const handleEdit = (index) => {
    setEditIndex(index);
    navigate('/');
    
    
  }
  return (
    <div>
      <h1>Expense List</h1>
      <ExpenseList enteries={expenses} onDeleteExpense={handleDelete} onEditExpense={handleEdit} />
    </div>
  );
};
export default ExpenseListPage;
