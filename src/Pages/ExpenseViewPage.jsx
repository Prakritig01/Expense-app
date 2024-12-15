import React, { useContext, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getExpensesFromList } from "../slices/expenseSlice";
import "./ExpenseViewPage.css";
import ExpenseContext from "../Components/Context/ExpenseContext";
import ExpenseCard from "../Components/ExpenseCard/ExpenseCard";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import {
  getCategoryFromList,
  getSortParameterFromList,
  getFilteredAndSortedExpensesFromList,
  sortOptions
} from "../slices/filterSlice";
import { useDispatch } from "react-redux";
import { setCategory, setSortType } from "../slices/filterSlice";

const ExpenseViewPage = () => {
  const dispatchFromRedux = useDispatch();

  const { toggle, handleToggleView } = useContext(ExpenseContext);

  
  const selectedCategory = useSelector(getCategoryFromList);
  console.log("selectedCategory", selectedCategory);
  const selectedSortParameter = useSelector(getSortParameterFromList);
  console.log("selectedSortParameter", selectedSortParameter);

  const filteredExpenses = useSelector(
    getFilteredAndSortedExpensesFromList(
      selectedCategory,
      selectedSortParameter
    )
  );
  console.log("filteredExpenses", filteredExpenses);

  const navigate = useNavigate();
  const navigateFunc = () => navigate("/");

  const buttonText = toggle ? "List" : "Cards";
  // const sortOptions = selectSortOptions;

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
      <div className="sort-section">
        <p>Sort on the basis of :</p>
        {sortOptions.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="sort"
              className="sort-section-label"
              value={option}
              onChange={(e) => dispatchFromRedux(setSortType(e.target.value))}
            />{" "}
            {option}
          </label>
        ))}
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
