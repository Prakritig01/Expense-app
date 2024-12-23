import React, { useContext } from 'react';
import './ExpenseList.css'
import ExpenseContext from '../Context/ExpenseContext';
const ExpenseList = ({expenses,navigateFunc}) => {
  
  const {expenseState,handleDelete,handleEdit,reverse,handleReverseView} = useContext(ExpenseContext);
  console.log("expenses" ,expenses);
  const reverseText = reverse ? "Latest" : "Old";

  if(reverse === true){
    expenses = [...expenses].reverse();
    // console.log("filtered Expenses after if" ,filteredExpenses);
  }
  return (
    <div>
      <button onClick={handleReverseView} className='order-btn'>{reverseText}</button>
      { expenses.length > 0 && (
        <table border={1} className="expense-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(function(item, i) {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.cost}</td>
                  <td>{item.date}</td>
                  <td>
                    <button className = "delete-btn" onClick={() => handleDelete(item.id) }>Delete</button>
                  </td>
                  <td>
                    <button className='edit-btn' onClick={()=> {handleEdit(item.id); navigateFunc()}}> Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ExpenseList
