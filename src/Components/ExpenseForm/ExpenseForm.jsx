import React from "react";
import { useState,useEffect } from "react";
import './ExpenseForm.css'

const ExpenseForm = ({onAddExpense,enteries}) => {
  
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  function handleSetTitle(e) {
    setTitle(e.target.value);
  }
  function handleSetCost(e) {
    setCost(e.target.value);
  }
  function handleSetCategory(e) {
    setCategory(e.target.value);
  }
  function handleSetDate(e) {
    setDate(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    const entry = { title, cost, category, date };
    onAddExpense(entry);
    setTitle("");
    setCost("");
    setCategory("");
    setDate("");
  }

  return (
    <div className="container">
      <h2>Expense</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            placeholder="eg. Chai"
            id="title"
            onChange={handleSetTitle}
            value={title}
          />
        </label>

        <label htmlFor="expense-category">
          Category:
          <select
            name="expense-category"
            id="expense-category"
            value={category}
            onChange={handleSetCategory}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Subscription">Subscription</option>
            <option value="Movies">Movies</option>
            <option value="Clothes">Clothes</option>
            <option value="Others">Others</option>
          </select>
        </label>

        <label htmlFor="cost">
          Cost:
          <input
            type="number"
            name="cost"
            id="cost"
            placeholder="eg. 30"
            onChange={handleSetCost}
            value={cost}
          />
        </label>

        <label htmlFor="date">
          Date:
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleSetDate}
            value={date}
          />
        </label>
        <button id="submit-btn" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
