import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navigation/Nav";
import ExpenseFormPage from "./Pages/ExpenseFormPage";
import ExpenseListPage from "./Pages/ExpenseListPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ExpenseFormPage />}></Route>
          <Route path="/expenses" element={<ExpenseListPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
