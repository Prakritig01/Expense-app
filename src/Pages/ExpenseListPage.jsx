import React, { useContext } from "react";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import {  useNavigate } from "react-router-dom";
import ExpenseContext from "../Components/Context/ExpenseContext";
import { getExpensesFromBackend, setExpensesInBackend } from "../Services/localStorage";

const ExpenseListPage = () => {
  const navigate = useNavigate();
  
  const {setEditIndex,expenseState,setExpenseState} = useContext(ExpenseContext);
  const expenses = [...expenseState];

  const handleDelete = (index) => {
    expenses.splice(index, 1);
    setExpenseState(expenses);
    setExpensesInBackend(expenses);
  }

  const handleEdit = (index) => {
    setEditIndex(index);
    navigate('/');
    
    
  }
  return (
    <div>
      <h1>Expense List</h1>
      <ExpenseList  onDeleteExpense={handleDelete} onEditExpense={handleEdit}  />
    </div>
  );
};
export default ExpenseListPage;
