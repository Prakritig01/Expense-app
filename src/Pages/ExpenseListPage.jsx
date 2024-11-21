import React from 'react';
import ExpenseList from '../Components/ExpenseList/ExpenseList';

const ExpenseListPage = ({enteries,onDeleteExpense}) => {
  return (
    <div>
      <h1>Expense List</h1>
      <ExpenseList enteries={enteries} onDeleteExpense = {onDeleteExpense}/>
    </div>
  )
}

export default ExpenseListPage;
