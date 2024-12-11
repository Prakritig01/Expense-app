import React, { useContext } from "react";
import ExpenseForm from "../Components/ExpenseForm/ExpenseForm";
import { useNavigate } from "react-router-dom";
import {ExpenseContext} from './../Components/Context/ExpenseContext';
import {setExpensesInBackend} from './../Services/localStorage';
import { useDispatch } from "react-redux";
import { addExpense,editExpense } from "../slices/expenseSlice";


const ExpenseFormPage = () => {
  const navigate = useNavigate();
  const dispatchFromRedux = useDispatch();
   
  const {editIndex} = useContext(ExpenseContext);

  const handleSaveExpense = (entry) => {
    dispatchFromRedux(addExpense(entry));
    navigate("/view");
  };

  const handleEditExpense = (expense,id) =>{
    dispatchFromRedux(editExpense({ id,expense }))
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
