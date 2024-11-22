import React from "react";
import ExpenseForm from "../Components/ExpenseForm/ExpenseForm";
import { useNavigate } from "react-router-dom";

const ExpenseFormPage = ({ editIndex }) => {
  const navigate = useNavigate();
  const expenseDataString = localStorage.getItem("expense_data_key") || "[]";
  const expenses = JSON.parse(expenseDataString);

  const handleSaveExpense = (entry) => {
    expenses.push(entry);
    const updatedExpenseDataString = JSON.stringify(expenses);
    localStorage.setItem("expense_data_key", updatedExpenseDataString);
    navigate("/expenses");
  };

  const handleEditExpense = (entry,index) =>{
    expenses[index] = entry; 
    console.log("handleEditExpense function ",expenses[index]);
    const updatedExpenseDataString = JSON.stringify(expenses);
    localStorage.setItem("expense_data_key", updatedExpenseDataString);
    navigate("/expenses");
  }

  return (
    <div>
      <h1>Form</h1>
      <ExpenseForm onAddExpense={handleSaveExpense} editIndex={editIndex} onEditExpense = {handleEditExpense} />
    </div>
  );
};

export default ExpenseFormPage;
