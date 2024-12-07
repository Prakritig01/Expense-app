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

export const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [expenseState, dispatch] = useReducer(reducer, []);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("Fetching data from local storage...");
    getExpensesFromBackend().then((expenseVal) => {
      console.log("Fetched Data :" , expenseVal);
      dispatch({
        type: "FILL",
        payload: expenseVal,
      });
    });
  }, []);

  useEffect(() => {
    if (!expenseState || expenseState.length === 0) {
      return; // Do not save empty state to local storage
    }
    setExpensesInBackend(expenseState).then(() =>
      console.log("saved expenses succesfully")
    );
  }, [expenseState]);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: { id },
    });
  };
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleToggleView = () => {
    setToggle((prev) => !prev);
  };
  return (
    <ExpenseContext.Provider
      value={{
        editIndex,
        setEditIndex,
        expenseState,
        dispatch,
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
