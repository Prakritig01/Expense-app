import React, { useContext } from "react";
import ExpenseForm from "../Components/ExpenseForm/ExpenseForm";
import { useNavigate } from "react-router-dom";
import {ExpenseContext} from './../Components/Context/ExpenseContext';
import {setExpensesInBackend} from './../Services/localStorage';


const ExpenseFormPage = () => {
  const navigate = useNavigate();
  
  const {editIndex,expenseState,dispatch} = useContext(ExpenseContext)
  let expenses = [...expenseState];

  const handleSaveExpense = (entry) => {
    dispatch({
      type : 'ADD',
      payload : entry,
    });
    navigate("/expenses");
  };

  const handleEditExpense = (entry,index) =>{
    console.log("handleEditExpense function ");
    dispatch({
      type : 'EDIT',
      payload : {entry,index},
    });
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
