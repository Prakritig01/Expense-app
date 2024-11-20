import { useState,useEffect } from "react";
import "./App.css";

function App() {
  
  const [enteries, setEnteries] = useState(() => {
    const savedEntries = localStorage.getItem("expenseEntries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
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
    setEnteries((prevEnteries) => {
      const updatedEnteries = [...prevEnteries, entry];
      localStorage.setItem("expenseEntries", JSON.stringify(updatedEnteries));
      console.log("udatedEnteries", updatedEnteries);
      return updatedEnteries;
    });

    setTitle("");
    setCost("");
    setCategory("");
    setDate("");
  }

  useEffect(() => {
    localStorage.setItem("expenseEntries", JSON.stringify(enteries));
  }, [enteries]);

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
          Submit
        </button>
      </form>
      {enteries.length > 0 && (
        <table border={1} className = "expense-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {enteries.map(function (item, i) {
              return (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.cost}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
