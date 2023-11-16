import React from "react";
import "./Sidebar.css";
import{Link} from 'react-router-dom';
import Form from '../form/Form';
import Tableau from '../tableau/Tableau'

import { BsHouseUpFill} from 'react-icons/bs';
import { BsFillPieChartFill} from 'react-icons/bs'



const Sidebar = () => {
    return (
    <main className='space-toggle'>
        <header className=''>
        <div className=''>
            
        <Form/>  
            </div>    
             
        </header>
    <aside className='sidebar show'>
        <nav className='nav'>
        <div>
            <Link to="/" className='nav-link'>
          
            <BsHouseUpFill/>   
                <span className='nav-link-name'></span>  
           
            </Link>
            <div className="nav-list">
            <Link to="/dashboard" className='nav-link'>
            <BsFillPieChartFill/> 
                <span className="nav-link-name"></span>  
           
            </Link>
            <Link to="/hotel" className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className="nav-link-name"></span>  
           
            </Link>
            <Link to="/gallery" className="nav-link">
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'></span>  
           
            </Link>
            <Link to="/gallery" className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'></span>  
           
            </Link>
            <Link to="/logout" className='nav-link'>
                <i className='fas fa-sign-out nav-link-icon'></i>
                <span className='nav-link-name'></span>  
           
            </Link>
            </div>
        </div>
        </nav>
    </aside >
   
   
     
    </main>
    );
}
  
        
  
  
  export default Sidebar;
 