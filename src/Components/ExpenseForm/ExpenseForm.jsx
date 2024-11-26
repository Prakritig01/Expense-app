import React from "react";
import { useState, useEffect } from "react";
import "./ExpenseForm.css";
import {
  TitleInput,
  CategoryInput,
  CostInput,
  DateInput,
} from "../Inputs/Inputs";
import { getExpense } from "../../Services/localStorage";

const emptyForm = () => ({
  title : '',
  cost : '',
  category : '',
  date : ''
});

const formValuesFromLocalStorage = (indx) =>{
  const expenses  = getExpense();
  return expenses[indx];
}

const ExpenseForm = ({ onAddExpense, editIndex, onEditExpense}) => {
  const prefilledForm = editIndex > -1 ? formValuesFromLocalStorage(editIndex) : emptyForm();    //Purpose: Initializes the form with either existing values or empty form
  const [formValues,setFormValues] = useState(prefilledForm);          //Purpose: Tracks the live, current data in the form as the user interacts with it.

  // const [title, setTitle] = useState("");
  // const [cost, setCost] = useState("");
  // const [category, setCategory] = useState("");
  // const [date, setDate] = useState("");


  //field value-accessors and updaters  or simply "field handlers."
  const [title,setTitle] = [formValues.title, (val)=> setFormValues({...formValues ,title: val})];           
  const [cost,setCost]  = [formValues.cost, (val) => setFormValues ({...formValues, cost : val})];
  const [category,setCategory]  = [formValues.category, (val) => setFormValues ({...formValues, category : val})];
  const [date,setDate]  = [formValues.date, (val) => setFormValues ({...formValues, date : val})];


 
  const setSingleValue = (value,key) =>{
    const replacer = (currentState) =>{
      const finalState = {...currentState , [key] : value};
      return finalState;
    }
    setFormValues(replacer);
  }

  
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
