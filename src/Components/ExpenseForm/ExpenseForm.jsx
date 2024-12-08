import React, { useContext } from "react";
import { useState } from "react";
import "./ExpenseForm.css";
import {
  TitleInput,
  CategoryInput,
  CostInput,
  DateInput,
} from "../Inputs/Inputs";
import {ExpenseContext} from './../Context/ExpenseContext';

const emptyForm = () => ({
  title: "",
  cost: "",
  category: "",
  date: "",
});

const formValuesFromLocalStorage = (id,expenseState) => {
  const expenses = expenseState.find(expense => expense.id === id);
  return expenses;
};

const ExpenseForm = ({ onAddExpense, onEditExpense }) => {
  const {editID,setEditId,expenseState} = useContext(ExpenseContext);
  const prefilledForm =
    editID > -1 ? formValuesFromLocalStorage(editID,expenseState) : emptyForm(); //Purpose: Initializes the form with either existing values or empty form
  const [formValues, setFormValues] = useState(prefilledForm); //Purpose: Tracks the live, current data in the form as the user interacts with it.
  //form ki state, hosakta hai vo values change hi nai karei

  //field value-accessors and updaters  or simply "field handlers."
  const [title, setTitle] = [
    formValues.title,
    (val) => setFormValues({ ...formValues, title: val }),
  ];
  const [cost, setCost] = [
    formValues.cost,
    (val) => setFormValues({ ...formValues, cost: val }),
  ];
  const [category, setCategory] = [
    formValues.category,
    (val) => setFormValues({ ...formValues, category: val }),
  ];
  const [date, setDate] = [
    formValues.date,
    (val) => setFormValues({ ...formValues, date: val }),
  ];


  function handleSubmit(e) {
    e.preventDefault(e);
    const entry = { title, cost, category, date };
    if (editID > -1) {
      onEditExpense(entry, formValues.id);
    } else {
      onAddExpense(entry);
    }
    setEditId(-1);
  }

  const submitButtonText = editID > -1 ? "Edit Expense" : "Add Expense";

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
