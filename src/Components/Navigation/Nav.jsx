import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className='tab'>
        <NavLink to= "/">Expense Form</NavLink>
        <NavLink to= "/expenses">Expense List</NavLink>
      </nav>
    </div>
  )
}

export default Nav;
