import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Nav from "./Components/Navigation/Nav";
import ExpenseFormPage from "./Pages/ExpenseFormPage";
import ExpenseListPage from "./Pages/ExpenseListPage";

function App() {
  
  const [editIndex,setEditIndex] = useState(-1);


  return(
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
      <Route path='/' element={<ExpenseFormPage editIndex={editIndex}  />}></Route>
      <Route path='/expenses' element={<ExpenseListPage  setEditIndex = {setEditIndex}   />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
