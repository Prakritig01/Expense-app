import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Nav from "./Components/Navigation/Nav";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import ExpenseFormPage from "./Pages/ExpenseFormPage";
import ExpenseListPage from "./Pages/ExpenseListPage";

function App() {
  const [enteries, setEnteries] = useState([]);

  

  
  
  return(
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
      <Route path='/' element={<ExpenseFormPage  />}></Route>
      <Route path='/expenses' element={<ExpenseListPage  />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
