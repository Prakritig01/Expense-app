import React from 'react';
import ExpenseForm from '../Components/ExpenseForm/ExpenseForm';

const ExpenseFormPage = ({onAddExpense,enteries}) => {
  return (
    <div>
      <h1>Form</h1>
      <ExpenseForm onAddExpense = {onAddExpense} enteries= {enteries}/>
    </div>
  )
}

export default ExpenseFormPage
