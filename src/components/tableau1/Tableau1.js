import React from "react";
import "./tableau1.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Liste from '../../Liste';

export default function Tableau1(prop) {
 

  const filteredListe = Liste.filter((el) => el.name === "kamal");

  return (
    <div className="signup_container w-100 d-flex justify-content-center">
      <div className="signup_form mt-5 w-50">
        <h4>Form Details</h4>
        <div className="form mt-3">
          <form className="border p-3">
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextArticle">
                <Form.Label column sm="2">
                  First id
                </Form.Label>
                <Col sm="10">
                  {filteredListe.map((item) => (
                    <Form.Control key={item.id} type="article" placeholder={item.id} />
                  ))}
                </Col>
              </Form.Group>
            </Form>
          </form>
        </div>
      </div>
    </div>
  );
}
