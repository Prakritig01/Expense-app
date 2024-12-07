import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navigation/Nav";
import ExpenseFormPage from "./Pages/ExpenseFormPage";
import ExpenseViewPage from "./Pages/ExpenseViewPage";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import ExpenseCard from "./Components/ExpenseCard/ExpenseCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ExpenseFormPage />}></Route>
          <Route path="/view" element={<ExpenseViewPage />}></Route>
          <Route path="/expenses" element={<ExpenseList />}></Route>
          <Route path="/cards" element ={<ExpenseCard/>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
