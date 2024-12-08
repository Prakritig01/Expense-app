import React, { useContext } from "react";
import ExpenseContext from "../Context/ExpenseContext";
import "./ExpenseCard.css";

const ExpenseCard = ({ expenses, navigateFunc }) => {
  const { handleDelete, handleEdit } = useContext(ExpenseContext);
  return (
    <div className="Expense-cards-container">
      {expenses.map((expense, index) => (
        <div key={expense.id} className="expense-card">
          <p>{expense.title}</p>
          <p>{expense.category}</p>
          <p>{expense.cost}</p>
          <p>{expense.date}</p>
          <button
            className="delete-btn"
            onClick={() => {
              console.log(expense.id);
              handleDelete(expense.id);
            }}
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => {
              handleEdit(expense.id);
              navigateFunc();
            }}
          >
            {" "}
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseCard;
