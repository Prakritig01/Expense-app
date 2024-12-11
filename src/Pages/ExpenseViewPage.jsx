import React, { useContext, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { filterReducer } from "../Components/Reducer/filterReducer";
import { useSelector } from "react-redux";
import { getExpensesFromList } from "../slices/expenseSlice";
import "./ExpenseViewPage.css";
import ExpenseContext from "../Components/Context/ExpenseContext";
import ExpenseCard from "../Components/ExpenseCard/ExpenseCard";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import { getCategoryFromList } from "../slices/filterSlice";
import { useDispatch } from "react-redux";
import { setCategory } from "../slices/filterSlice";

const ExpenseViewPage = () => {
  const dispatchFromRedux = useDispatch();

  const { toggle, handleToggleView } = useContext(ExpenseContext);

  const expenseState = useSelector(getExpensesFromList);
  const selectedCategory = useSelector(getCategoryFromList);

  const filteredExpenses =
    selectedCategory === "All"
      ? expenseState
      : expenseState.filter((expense) => expense.category === selectedCategory);

  const navigate = useNavigate();
  const navigateFunc = () => navigate("/");

  const buttonText = toggle ? "List" : "Cards";

  return (
    <div>
      <button onClick={handleToggleView} className="toggle-btn">
        {buttonText}
      </button>

      <div className="filter-section">
        <select
          name=""
          id=""
          value={selectedCategory}
          onChange={(e) => dispatchFromRedux(setCategory(e.target.value))}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Subscription">Subscription</option>
          <option value="Movies">Movies</option>
          <option value="Clothes">Clothes</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <h1>{toggle ? "Expense List" : "Expense Card"}</h1>
      {toggle ? (
        <ExpenseList
          expenses={filteredExpenses || []}
          navigateFunc={navigateFunc}
        />
      ) : (
        <ExpenseCard
          expenses={filteredExpenses || []}
          navigateFunc={navigateFunc}
        />
      )}
    </div>
  );
};

export default ExpenseViewPage;
