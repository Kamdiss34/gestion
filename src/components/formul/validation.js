export default function validation(){
    const errors ={}

    const email_pallern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*\d)$/;
}


import "./article.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Article = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const total = parseFloat(price) * parseFloat(quantity);
    const newItem = { name, price, quantity, total };
    setItems([...items, newItem]);
    // Réinitialiser les champs après l'ajout
    setName("");
    setPrice("");
    setQuantity("");
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.total, 0).toFixed(2);
  };

  return (
    <div className="container mt-5">
      {/* ... (Vos autres éléments) */}
      <h4>Liste des articles</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteItem(index)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="">
        <label className="mt-5 art">
          <strong>Total des articles: </strong>
        </label>
        <input
          type="text"
          className=" w-5"
          value={calculateTotal()}
          readOnly
        />
      </div>
      <div className="mt-5 me-7 but">
        <button className="btn btn-success w-10 ">Validate</button>
      </div>
    </div>
  );
};