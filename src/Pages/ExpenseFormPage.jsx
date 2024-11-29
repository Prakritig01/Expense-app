import React from "react";
import ExpenseForm from "../Components/ExpenseForm/ExpenseForm";
import { useNavigate } from "react-router-dom";
import { getExpense,setExpense } from "../Services/localStorage";
import ExpenseListPage from "./ExpenseListPage";

const ExpenseFormPage = ({ editIndex,setEditIndex,expenseState,setExpenseState}) => {
  const navigate = useNavigate();
  

  let expenses = [...expenseState];
  console.log("expenses:"  ,expenses);

  const handleSaveExpense = (entry) => {
    expenses.push(entry);

    setExpenseState(expenses);
    navigate("/expenses");
  };

  const handleEditExpense = (entry,index) =>{
    expenses[index] = entry; 
    console.log("handleEditExpense function ",expenses[index]);
    setExpenseState(expenses);
    navigate("/expenses");
  }

  return (
    <div>
      <h1>Form</h1>
      <ExpenseForm onAddExpense={handleSaveExpense} editIndex={editIndex} onEditExpense = {handleEditExpense} setEditIndex = {setEditIndex}  key = {editIndex}  expenseState= {expenseState}/>
      
    </div>
  );
};

export default ExpenseFormPage;
