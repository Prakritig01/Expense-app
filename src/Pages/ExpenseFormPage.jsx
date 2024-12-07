import React, { useContext } from "react";
import ExpenseForm from "../Components/ExpenseForm/ExpenseForm";
import { useNavigate } from "react-router-dom";
import {ExpenseContext} from './../Components/Context/ExpenseContext';
import {setExpensesInBackend} from './../Services/localStorage';


const ExpenseFormPage = () => {
  const navigate = useNavigate();
  
  const {editIndex,dispatch} = useContext(ExpenseContext)

  const handleSaveExpense = (entry) => {
    dispatch({
      type : 'ADD',
      payload : entry,
    });
    navigate("/view");
  };

  const handleEditExpense = (entry,id) =>{
    dispatch({
      type : 'EDIT',
      payload : {entry,id},
    });
    navigate("/view");
  }

  return (
    <div>
      <h1>Form</h1>
      <ExpenseForm onAddExpense={handleSaveExpense}  onEditExpense = {handleEditExpense}  key = {editIndex} />
    </div>
  );
};

export default ExpenseFormPage;
