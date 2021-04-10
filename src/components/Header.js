import React from 'react';
import logo from '../images/expense_logo.png';
import '../App.css'

 const Header=()=>{
     return(
         <div className='header'>
             <img src={logo} alt="logo" className='logo-image'/>
             <h1>Expense Tracker</h1>
         </div>
     );
 }

 export default Header;