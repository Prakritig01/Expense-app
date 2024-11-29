import React from "react";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const ExpenseListPage = ({editIndex,setEditIndex,expenseState,setExpenseState}) => {
  const navigate = useNavigate();
  

  const expenses = [...expenseState];
  
  function useForceUpdate() {                                      
    const [value,setValue] = useState(0);
    return () => setValue((value) => value + 1);
  };


  const forceUpdate = useForceUpdate();

  const handleDelete = (index) => {
    expenses.splice(index, 1);
    setExpenseState(expenses);
  }

  const handleEdit = (index) => {
    setEditIndex(index);
    navigate('/');
    
    
  }
  return (
    <div>
      <h1>Expense List</h1>
      <ExpenseList enteries={expenses} onDeleteExpense={handleDelete} onEditExpense={handleEdit} expenseState = {expenseState} />
    </div>
  );
};
export default ExpenseListPage;
