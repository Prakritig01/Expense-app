// import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./Components/Navigation/Nav";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import ExpenseList from "./Components/ExpenseList/ExpenseList";

function App() {
  const [enteries, setEnteries] = useState([]);

  const handleSaveExpense = (entry) => {
    setEnteries([...enteries, entry]);
  };

  function handleDelete(index) {
    const updatedExpenses = [...enteries];
    updatedExpenses.splice(index, 1);
    setEnteries(updatedExpenses);
  };
  
  return(
    <>
      {/* <Nav/> */}
      <h1>Form</h1>
      <ExpenseForm onAddExpense = {handleSaveExpense} enteries= {enteries}/>
      <br />
      <h1>Expense List</h1>
      <ExpenseList enteries={enteries} onDeleteExpense = {handleDelete}/>

    </>
  );
}

export default App;
