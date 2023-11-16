
import './article.css'
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
     
const Article = () => {
    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        };
        const calculateTotal = () => {
            return items.reduce((total, item) => total + item.total, 0).toFixed(2);
            };
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

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nom</h5>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Prix</h5>
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quantité</h5>
              <input
                type="number"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total</h5>
              <input
                type="text"
                className="form-control"
                value={price && quantity ? parseFloat(price) * parseFloat(quantity) : ""}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary ajout" onClick={handleAddItem}>
          Ajouter
        </button>
      </div>
      <div className="mt-5">
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
        <div className=''>
        
        <label  className="mt-5 art" > <strong>Total des articles: </strong></label>
       
       <input
                type="text"
                className=" w-5"
                value={calculateTotal()}
                readOnly
              /> 
        </div>
        <div className="mt-5 me-7 but">
            
        <button className="btn btn-success w-10 ">Validate
        </button>

        </div>

           
      </div>
    </div>
  );
};

export default Article;

