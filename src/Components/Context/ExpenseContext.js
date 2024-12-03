import React, {createContext,useEffect,useReducer,useState} from 'react';
import {setExpensesInBackend,getExpensesFromBackend} from './../../Services/localStorage';
import { reducer } from '../Reducer/reducer';


export const ExpenseContext = createContext();

export const ExpenseContextProvider = ({children}) =>{
  const [editIndex,setEditIndex] = useState(-1);
  const [expenseState,dispatch] = useReducer(reducer,[]);
  useEffect(()=>{
    getExpensesFromBackend().then((expenseVal) =>
      dispatch({
        type : 'FILL',
        payload : expenseVal,
      }));
    
  },[]);

  useEffect(()=>{
    setExpensesInBackend(expenseState).then(()=> console.log("saved expenses succesfully"));
  },[expenseState]);
  return (
    <ExpenseContext.Provider value={{editIndex,setEditIndex,expenseState,dispatch}}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
