import React, {createContext,useEffect,useState} from 'react';
import {setExpensesInBackend,getExpensesFromBackend} from './../../Services/localStorage';


export const ExpenseContext = createContext();

export const ExpenseContextProvider = ({children}) =>{
  const [editIndex,setEditIndex] = useState(-1);
  const [expenseState,setExpenseState] = useState([]);
  useEffect(()=>{
    getExpensesFromBackend().then(expenseVal => setExpenseState(expenseVal));
  },[])

  useEffect(()=>{
    setExpensesInBackend(expenseState).then(()=> console.log("saved expenses succesfully"));
  },[expenseState]);
  return (
    <ExpenseContext.Provider value={{editIndex,setEditIndex,expenseState,setExpenseState}}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
