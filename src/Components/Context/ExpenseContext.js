import React, {
  createContext,
  useEffect,
  useReducer,
  useState,
  navigate,
} from "react";
import {
  setExpensesInBackend,
  getExpensesFromBackend,
} from "./../../Services/localStorage";
import { reducer } from "../Reducer/reducer";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../slices/expenseSlice";

export const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [editID, setEditId] = useState(-1);

  const [toggle, setToggle] = useState(false);


  const handleDelete = (id) => {
    dispatch(deleteExpense({id}));
  };
  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleToggleView = () => {
    setToggle((prev) => !prev);
  };
  return (
    <ExpenseContext.Provider
      value={{
        editID,
        setEditId,
        handleDelete,
        handleEdit,
        toggle,
        handleToggleView,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
