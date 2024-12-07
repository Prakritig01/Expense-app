import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className='tab'>
        <NavLink to= "/" className= "tabLink">Expense Form</NavLink>
        <NavLink to= "/view" className= "tabLink">Expense View</NavLink>
      </nav>
    </div>
  )
}

export default Nav;
