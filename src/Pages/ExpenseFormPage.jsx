import React, { useContext } from "react";
import ExpenseForm from "../Components/ExpenseForm/ExpenseForm";
import { useNavigate } from "react-router-dom";
import {ExpenseContext} from './../Components/Context/ExpenseContext';


const ExpenseFormPage = () => {
  const navigate = useNavigate();
  
  const {editIndex,expenseState,setExpenseState} = useContext(ExpenseContext)
  let expenses = [...expenseState];

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
      <ExpenseForm onAddExpense={handleSaveExpense}  onEditExpense = {handleEditExpense}  key = {editIndex} />
      
    </div>
  );
};

export default ExpenseFormPage;
