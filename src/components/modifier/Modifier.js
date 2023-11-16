import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    if (name && price && quantity) {
      const product = {
        name,
        price: parseFloat(price),
        quantity: parseInt(quantity),
      };

      setProducts([...products, product]);
      setTotal((prevTotal) => prevTotal + product.price * product.quantity);

      // Réinitialiser les champs du formulaire
      setName("");
      setPrice("");
      setQuantity("");
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
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>{product.quantity}</td>
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
