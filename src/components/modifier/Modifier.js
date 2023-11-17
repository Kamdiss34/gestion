import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [taxe, setTaxe] = useState("");
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {   
    if (name && price && quantity && taxe) {
      const product = {
        name,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        taxe: parseInt(taxe),
      };
      
      setProducts([...products, product]);
      setTotal((prevTotal) => prevTotal + product.price * product.quantity);

      // Réinitialiser les champs du formulaire
      setName("");
      setPrice("");
      setQuantity("");
      setTaxe("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Product</h5>
              <div className="mb-3">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Price:</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Quantity:</label>
                <input
                  type="number"
                  className="form-control"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Taxe:</label>
                <input
                  type="number"
                  className="form-control"
                  value={taxe}
                  onChange={(e) => setTaxe(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleAddProduct}>
                Add Product
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product Details</h5>
              <div>
                <strong>Total: ${total.toFixed(2)}</strong>
              </div>
              <table className="table mt-3">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>THT</th>
                    <th>TTC</th>
                  </tr>
                </thead>
                <tbody>
               
                 {products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>{product.quantity}</td>
                      <td> 
                {product.price && product.quantity && product.taxe ? 
                  (parseFloat(product.price) * parseFloat(product.quantity))
                : ""}
                </td>
                      <td> 
                {product.price && product.quantity && product.taxe ? 
                  (parseFloat(product.price) * parseFloat(product.quantity)) *(1 + (parseInt(product.taxe)/100))
                : ""}
                </td>
                      
                    </tr>
                  ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
