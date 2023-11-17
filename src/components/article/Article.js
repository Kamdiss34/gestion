
import './article.css'
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
     
const Article = () => {
            const handleDeleteItem = (index) => {
            const updatedItems = [...items];
            updatedItems.splice(index, 1);
            setItems(updatedItems);
            };
            const taxes = [
              { name: "Taxe 1", rate: 0.1 },
              { name: "Taxe 2", rate: 0.15 },
            ];
            const [selectedTax, setSelectedTax] = useState(taxes[0].name);
            const selectedTaxRate = taxes.find((tax) => tax.name === selectedTax)?.rate || 0;
            const prix = [
              { name: "Cafe", price: 1000 },
              { name: "Lait", price: 2000 },
              { name: "Souris", price: 3000 },
            ];
            const [selectedNom, setSelectedNom] = useState(prix[0].name);
            const selectedPrix = prix.find((unit) => unit.name === selectedNom)?.price || 0;
            
            const [name, setName] = useState("");
            const [price, setPrice] = useState("");
            const [quantity, setQuantity] = useState("");
            const [items, setItems] = useState([]);
            const [editableIndex, setEditableIndex] = useState(null);

            const handleEditItem = (index) => {
              setEditableIndex(index);
              const selectedItem = items[index];
              setName(selectedItem.name);
              setPrice(selectedItem.price);
              setQuantity(selectedItem.quantity);
              setSelectedNom(selectedItem.name);
            };

// Calculer totalHT seulement si quantity est une valeur numérique

            const calculateTotalHT = () => {
              return !isNaN(quantity)
                ? (parseFloat(selectedPrix) * parseFloat(quantity)|| 0).toFixed(1)
                : 0;
                };
            const totalHT = calculateTotalHT();

            const calculateTotalTTC = () => {
              return !isNaN(quantity)
                ? (parseFloat(totalHT)+ (parseFloat(totalHT)*parseFloat(selectedTaxRate)|| 0)).toFixed(1)
                : 0;
            };
            const totalTTC = calculateTotalTTC();
            const calculateTotalGlobalTTC = () => {
              return items.reduce((total, item) => {
                return total + parseFloat(item.totalTTC || 0);
              }, 0).toFixed(1);
              
            };
            const calculateGlobalTotalHT = () => {
              return items.reduce((total, item) => {
                return total + parseFloat(item.totalHT || 0);
              }, 0).toFixed(1);
            };
            
          const handleAddItem = () => {
               if (editableIndex !== null) {
                      // If in edit mode, update the existing item
                      const updatedItems = [...items];
                      updatedItems[editableIndex] = {
                        name: selectedNom,
                        price: selectedPrix,
                        rate: selectedTaxRate,
                        quantity,
                        totalHT,
                        totalTTC
                      };
                    setItems(updatedItems);
                    setEditableIndex(null); // Reset edit mode
            } else {
              // If not in edit mode, add a new item
                      const newItem = { name:selectedNom, price:selectedPrix,rate:selectedTaxRate,quantity, totalHT,totalTTC };
                      setItems([...items, newItem]);
                      // Réinitialiser les champs après l'ajout
                      setName("");
                      setPrice("");
                      setQuantity("");
                      setEditableIndex(null); // Réinitialiser l'index d'édition

                    }};
  return (
    
    <div className="container mt-5 cli">
      <h2 className="info">Informations Clients</h2>
      <div className="row justify-content-center cli">
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
           
              <h5 className="card-title">Nom</h5>
              <input
                type="text"
                className="form-control"
              />
            </div>
          </div>
          
        </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Prenoms</h5>
              <input
                type="text"
                className="form-control"
                
              
              />
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Adresse</h5>
              <input
                type="text"
                className="form-control"
                
              />
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title">telephone</h5>
              <input
                type="number"
                className="form-control"
               
              />
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Residence</h5>
              <input
                type="text"
                className="form-control"
               
              />
            </div>
          </div>
        </div>
      </div>
     
      <h2 className="infos">Informations sur les articles</h2>
      <div className="row justify-content-center ">
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
           
              <h5 className="card-title">Nom</h5>
              <select
                className="form-control"
                value={selectedNom}
                onChange={(e) => setSelectedNom(e.target.value)}
              >
                {prix.map((unit) => (
                  <option key={unit.name} value={unit.name}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
        </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Prix</h5>
             <input
                type="text"
                className="form-control"
                value={selectedPrix}
                readOnly
              />
              
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="">
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
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Total HT</h5>
            
              <input
                type="text"
               
                className="form-control"
                value={calculateTotalHT()}
                readOnly
              />
             
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Total TTC</h5>
              <input
                type=""
                className="form-control"
                value={calculateTotalTTC()}
               
              />
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Taxe</h5>
             <select
                className="form-control"
                value={selectedTax}
                onChange={(e) => setSelectedTax(e.target.value)}
              >
                {taxes.map((tax) => (
                  <option key={tax.name} value={tax.name}>
                    {tax.name} - {tax.rate * 100}%
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
       
      </div>
     
        
      <div className="mt-2">
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
              <th>TotalHT</th>
              <th>TotalTTC</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.totalHT}</td>
                <td>{item.totalTTC}</td>
                <td>
<button
className="btn btn-danger btn-sm"
onClick={() => handleDeleteItem(index)}
>
Supprimer
</button>
</td>
<td>
<button className="btn btn-warning btn-sm me-2"onClick={() => handleEditItem(index)}>
                       Modifier </button>
</td>
         </tr> 
            ))}
          </tbody>
        </table>
        <div className='ttc'>
        <label  className="mt-5 art" > <strong>Total HT: </strong></label>
       <input
                type="text"
                className=" w-5"
                value={calculateGlobalTotalHT()}
                readOnly
              /> 
              <label  className="mt-5 art" > <strong>Total TTC: </strong></label>
       
       <input
                type="text"
                className=" w-5"
                value={calculateTotalGlobalTTC()}
                readOnly
              /> 
        </div>
        <div className='ttc'>
        </div>
        <div className="mt-5 me-7 but">
            
        <button className="btn btn-success w-10 val">Validate
        </button>

        </div>   
      </div>
    </div>
  );
};

export default Article;

