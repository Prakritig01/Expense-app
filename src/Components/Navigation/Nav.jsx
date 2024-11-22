import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className='tab'>
        <NavLink to= "/" className= "tabLink">Expense Form</NavLink>
        <NavLink to= "/expenses" className= "tabLink">Expense List</NavLink>
      </nav>
    </div>
  )
}

export default Nav;
