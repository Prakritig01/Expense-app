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

const formValuesFromLocalStorage = (indx,expenseState) => {
  // const expenses = getExpense();
  const expenses = expenseState;
  return expenses[indx];
};

const ExpenseForm = ({ onAddExpense, onEditExpense }) => {
  const {editIndex,setEditIndex,expenseState} = useContext(ExpenseContext);
  const prefilledForm =
    editIndex > -1 ? formValuesFromLocalStorage(editIndex,expenseState) : emptyForm(); //Purpose: Initializes the form with either existing values or empty form
  const [formValues, setFormValues] = useState(prefilledForm); //Purpose: Tracks the live, current data in the form as the user interacts with it.

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
    if (editIndex > -1) {
      onEditExpense(entry, editIndex);
    } else {
      onAddExpense(entry);
    }
    setEditIndex(-1);
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
