import React from 'react';
import './ExpenseList.css'

const ExpenseList = ({enteries,onDeleteExpense}) => {
  return (
    <div>
      {enteries.length > 0 && (
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
            {enteries.map(function (item, i) {
              return (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.cost}</td>
                  <td>{item.date}</td>
                  <td>
                    <button className = "delete-btn" onClick={() => onDeleteExpense(i) }>Delete</button>
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
