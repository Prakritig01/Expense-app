import React, {createContext,useState} from 'react';


export const ExpenseContext = createContext();

export const ExpenseContextProvider = ({children}) =>{
  const [editIndex,setEditIndex] = useState(-1);
  const [expenseState,setExpenseState] = useState([]);
  return (
    <ExpenseContext.Provider value={{editIndex,setEditIndex,expenseState,setExpenseState}}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
