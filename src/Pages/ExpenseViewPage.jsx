import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './ExpenseViewPage.css'
import ExpenseContext from '../Components/Context/ExpenseContext';
import ExpenseCard from '../Components/ExpenseCard/ExpenseCard';
import ExpenseList from '../Components/ExpenseList/ExpenseList';

const ExpenseViewPage = () => {
  const {toggle,handleToggleView,expenseState} = useContext(ExpenseContext);
  const [selecedCategory,setSelectedCategory] = useState("All");
  const filteredExpenses = selecedCategory === "All" ? expenseState : expenseState.filter((expense) => expense.category === selecedCategory);
  const navigate = useNavigate();
  console.log("filteredlist :" , filteredExpenses);

  const navigateFunc = () => {
    navigate('/');
  }
  
  
  const buttonText = toggle? "List" : "Cards";
  return (
    <div>
      <button onClick={handleToggleView} className='toggle-btn'>{buttonText}</button>
      <div className="filter-section">
        <select name="" id="" value = {selecedCategory} onChange={(e)=> setSelectedCategory(e.target.value)}>

          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Subscription">Subscription</option>
          <option value="Movies">Movies</option>
          <option value="Clothes">Clothes</option>
          <option value="Others">Others</option>
        </select>
        <button className='filter-btn'>Filter</button>
      </div>

      <h1>{toggle? "Expense List" : "Expense Card"}</h1>
      {toggle? <ExpenseList expenses ={filteredExpenses || []} navigateFunc = {navigateFunc}/> : <ExpenseCard expenses ={filteredExpenses || []} navigateFunc = {navigateFunc}/>}
    </div>
  )
}

export default ExpenseViewPage;
