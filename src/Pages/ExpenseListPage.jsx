import React, { useContext } from "react";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import {  useNavigate } from "react-router-dom";
import ExpenseContext from "../Components/Context/ExpenseContext";
import { getExpensesFromBackend, setExpensesInBackend } from "../Services/localStorage";

const ExpenseListPage = () => {
  const navigate = useNavigate();
  
  const {setEditIndex,expenseState,dispatch} = useContext(ExpenseContext);
  const expenses = [...expenseState];

  const handleDelete = (index) => {
    expenses.splice(index, 1);
    dispatch({
      type : 'DELETE',
      payload : {index},
    });
    
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
