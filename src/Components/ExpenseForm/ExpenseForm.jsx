import React from "react";
import { useState, useEffect } from "react";
import "./ExpenseForm.css";
import {
  TitleInput,
  CategoryInput,
  CostInput,
  DateInput,
} from "../Inputs/Inputs";

const ExpenseForm = ({ onAddExpense, editIndex, onEditExpense }) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const expenseDataString = localStorage.getItem("expense_data_key") || "[]";
  const expenses = JSON.parse(expenseDataString);
  const prefillIndex = expenses[editIndex];

  useEffect(() => {
    if (editIndex > -1) {
      console.log(prefillIndex);
      setTitle(prefillIndex.title);
      setCost(prefillIndex.cost);
      setCategory(prefillIndex.category);
      setDate(prefillIndex.date);
    }
  }, [editIndex]);

  function clearEnteries() {
    setTitle("");
    setCost("");
    setCategory("");
    setDate("");
  }

  function handleSubmit(e) {
    if (editIndex > -1) {
      e.preventDefault(e);
      const entry = { title, cost, category, date };
      onEditExpense(entry, editIndex);
      clearEnteries();
    } else {
      e.preventDefault();
      const entry = { title, cost, category, date };
      onAddExpense(entry);
      clearEnteries();
    }
  }

  const submitButtonText = editIndex > -1 ? "Edit Expense" : "Add Expense";

  return (
    <div className="container">
      <h2>Expense</h2>

      <form onSubmit={handleSubmit}>
        <TitleInput title={title} onChange={setTitle} />

        <CategoryInput category={category} onChange={setCategory} />

        <CostInput cost={cost} onChange={setCost} />

        <DateInput date={date} onChange={setDate} />

        <button>{submitButtonText}</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
