import React, {createContext,useState} from "react";
import { deleteExpense } from "../../slices/expenseSlice";
import { useDispatch } from "react-redux";
export const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [editID, setEditId] = useState(-1);
  const [toggle, setToggle] = useState(false);
  const [reverse,setReverse] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteExpense({ id }));
  };
  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleToggleView = () => {
    setToggle((prev) => !prev);
  };

  const handleReverseView = () => {
    setReverse((prev) => !prev);
  }
  return (
    <ExpenseContext.Provider
      value={{
        editID,
        setEditId,
        handleDelete,
        handleEdit,
        toggle,
        handleToggleView,
        reverse,
        handleReverseView
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
