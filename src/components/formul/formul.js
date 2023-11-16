
import React from "react";
import "./formul.css";
import {useState} from 'react'
import { Button } from "react-bootstrap";
import validation from "./validation";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Formul() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})

    function handleInput(event){
        const newObj = {...values, [event.target.name]: event.target.value}
        setValues(newObj)
    }

    function handleValidation(event){
        event.preventDefault();
       setErrors(validation(values));
    }


        return (
    <div className="signup_container w-100 d-flex justify-content-center">
    <div className="signup_form mt-5 w-50">
        <h4>Form validation</h4>
        <div className="form mt-3">

<form className="border p-3" onSubmit={handleValidation}>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Enter your Name" />
        </Col>
      </Form.Group>
      
       <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Enter your Email" />
        </Col>
      </Form.Group>
      
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Enter your Password" />
        </Col>
      </Form.Group>
        <div className="mt-3">
            
        <button className="btn btn-success w-50">Validate
        </button>

        </div>

            </form>

   </div>

    </div>


   </div>





);
}

      


export default Formul;
