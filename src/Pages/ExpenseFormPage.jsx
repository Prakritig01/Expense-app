import React from "react";
import ExpenseForm from "../Components/ExpenseForm/ExpenseForm";
import { useNavigate } from "react-router-dom";
import { getExpense,setExpense } from "../Services/localStorage";
import ExpenseListPage from "./ExpenseListPage";

const ExpenseFormPage = ({ editIndex,setEditIndex}) => {
  const navigate = useNavigate();
  
  const expenses = getExpense();

  const handleSaveExpense = (entry) => {
    expenses.push(entry);
    setExpense(expenses);
    navigate("/expenses");
  };

  const handleEditExpense = (entry,index) =>{
    expenses[index] = entry; 
    console.log("handleEditExpense function ",expenses[index]);
    setExpense(expenses);
    navigate("/expenses");
  }

  return (
    <div>
      <h1>Form</h1>
      <ExpenseForm onAddExpense={handleSaveExpense} editIndex={editIndex} onEditExpense = {handleEditExpense} setEditIndex = {setEditIndex}  key = {editIndex} />
      
    </div>
  );
};

export default ExpenseFormPage;
