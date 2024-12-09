import React, { useContext, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  filterReducer,
  initialFilterState,
} from "../Components/Reducer/filterReducer";

import "./ExpenseViewPage.css";
import ExpenseContext from "../Components/Context/ExpenseContext";
import ExpenseCard from "../Components/ExpenseCard/ExpenseCard";
import ExpenseList from "../Components/ExpenseList/ExpenseList";

const ExpenseViewPage = () => {
  const { toggle, handleToggleView, expenseState } = useContext(ExpenseContext);

  const [selectedCategory, filterDispatch] = useReducer(filterReducer, "All");


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
          onChange={(e) =>
            filterDispatch({
              type: "SET_CATEGORY",
              payload: e.target.value,
            })
          }
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
