import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to= "/">Expense Form</NavLink>
        <NavLink to= "/ExpenseList">Expense List</NavLink>
      </nav>
    </div>
  )
}

export default Nav;
