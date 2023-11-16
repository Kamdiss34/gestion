import React, {useState} from "react";
import "./tableau.css";
import Table from 'react-bootstrap/Table';
import { Route, Routes} from 'react-router-dom';
import{Link} from 'react-router-dom';
import Liste from '../../Liste.json'

import { BsFillPencilFill} from 'react-icons/bs';
import { BsFillTrashFill} from 'react-icons/bs';
import { BsFillEyeFill} from 'react-icons/bs';
import { InputGroup } from "react-bootstrap";
import { Form} from "react-bootstrap";



export default function Tableau(props,Personnes) {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
 
  <div className=''>

<div className="signup_container w-100 d-flex justify-content-center">
    <div className="signup_form mt-5 w-50">
        <h4></h4>
        <Form>
           <InputGroup className="my-3"/>
           <Form.Control onChange= {(e) => setSearch(e.target.value)   } placeholder='search name'/>
        </Form>
         <h4></h4>
        
<Table striped> 
      <thead>
        <tr>
         
         
          <th>LastName</th>
          <th>Username</th>
          <th>Date</th>
          <th>Actions</th>
          
        </tr>
      </thead>
      <tbody>
     
        { 
        Liste.Personnes.filter((Personne)=> {
          return search.toLowerCase()=== 'Adissa' ? 
          Personne:Personne.Lastname.toLowerCase().includes(search)
        }).map((Personne) => (   
        <tr key={Personne.id}>
        
          
          <td>{Personne.name}</td>
          <td>{Personne.Lastname}</td>
          <td>{Personne.Dates}</td> 
          <td>
          <Link to="/Tableau1" className='me-3'> 
          <BsFillEyeFill/> 
          </Link>
          <Link to="/Modifier" className='me-3'>
            <BsFillPencilFill />  
            </Link> 
          <Link to="/" className='icon'> 
          <BsFillTrashFill/>
          </Link>
          </td>
        </tr>
      ))}
       
      </tbody>
    </Table>
    </div>

</div>

        </div>

);
}
   
 

      