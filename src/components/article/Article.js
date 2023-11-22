import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';
import RecapComponent from '../recapComponent/RecapComponent';
import RecapPage from '../recapPage/RecapPage';
import "bootstrap/dist/css/bootstrap.min.css";
import './article.css';

const Article = () => {
  const history = useHistory();

  const [clientInfo, setClientInfo] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    telephone: "",
    residence: "",
  });

  const [showNameModal, setShowNameModal] = useState(false);
  const [showPrenModal, setShowPrenModal] = useState(false);
  const [showAdresModal, setShowAdresModal] = useState(false);
  const [showTelModal, setShowTelModal] = useState(false);
  const [showResModal, setShowResModal] = useState(false);
  const [showQuantModal, setShowQuantModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemIndex, setDeleteItemIndex] = useState(null);

  const [emptyName, setEmptyName] = useState(false);
  const [emptyTax, setEmptyTax] = useState(false);
  const [emptyQuantity, setEmptyQuantity] = useState(false);

  const handleCloseNameModal = () => setShowNameModal(false);
  const handleClosePrenModal = () => setShowPrenModal(false);
  const handleCloseAdresModal = () => setShowAdresModal(false);
  const handleCloseTelModal = () => setShowTelModal(false);
  const handleCloseResModal = () => setShowResModal(false);
  const handleCloseQuantModal = () => setShowQuantModal(false);

  const handleValidate = () => {
  if (nom === "") {
    setShowNameModal(true);
    return;
  } 
  if (prenom === "") {
    setShowPrenModal(true);
    return;
  } 
  if (adresse === "") {
    setShowAdresModal(true);
    return;
  } 
  if (telephone === "") {
    setShowTelModal(true);
    return;
  } 
  if (residence === "") {
    setShowResModal(true);
    return;
  } 
  
  setShowNameModal(false);
  setShowPrenModal(false);
  setShowAdresModal(false);
  setShowTelModal(false);
  setShowResModal(false);
  
  setNom("");
  setPrenom("");
  setAdresse("");
  setTelephone("");
  setResidence("");   
    
  // Create an object with client information
  const newClientInfo = {
    nom,
    prenom,
    adresse,
    telephone,
    residence,
  };

  // Update clientInfo state
  setClientInfo(newClientInfo);

  // Pass clientInfo and items to RecapPage using history
  history.push("/recap", { clientInfo: newClientInfo, items });
  // Optionally, you can reset the form fields or perform any other actions
  setItems([]);
  setName("");
  setPrice("");
  setQuantity("");
  setSelectedNom(prix[0].name);
  setSelectedTax(taxes[0].name);
};

const [nom, setNom] = useState("");
const [prenom, setPrenom] = useState("");
const [adresse, setAdresse] = useState("");
const [telephone, setTelephone] = useState(""); 
const [residence, setResidence] = useState("");

const handleDeleteItem = (index) => {
  setDeleteItemIndex(index);
  setShowDeleteModal(true);
};

const confirmDelete = () => {
  // Perform deletion logic here using deleteItemIndex
  const updatedItems = [...items];
  updatedItems.splice(deleteItemIndex, 1);
  setItems(updatedItems);

  // Reset modal state
  setShowDeleteModal(false);
  setDeleteItemIndex(null);
};

const cancelDelete = () => {
  // Reset modal state
  setShowDeleteModal(false);
  setDeleteItemIndex(null);
};

            const taxes = [
              { name: "Sélectionner une taxe", rate: 0 }, // Placeholder option
              { name: "Taxe 1", rate: 0.1 },
              { name: "Taxe 2", rate: 0.15 },
            ];
            const [selectedTax, setSelectedTax] = useState(taxes[0].name);
            const selectedTaxRate = taxes.find((tax) => tax.name === selectedTax)?.rate || 0;
            const prix = [
              { name: "Sélectionner article", price: 0 }, // Placeholder option
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
              // Réinitialiser les champs
            
              setName(selectedItem.name); 
              setPrice(selectedItem.price);
              setQuantity(selectedItem.quantity);
              setSelectedNom(selectedItem.name);
             
            };

// Calculer totalHT seulement si quantity est une valeur numérique
             
            const calculateTotalHT = () => {
              return !isNaN(quantity) && parseFloat(quantity) >= 1
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
            if( parseFloat(quantity) <= 0){
              setShowQuantModal(true);
              return;
            }
            setShowQuantModal(false);
              setEmptyName(selectedNom === "Sélectionner article");
              setEmptyTax(selectedTax === "Sélectionner une taxe");
              setEmptyQuantity(!quantity);
              // Check if the required fields are not selected or empty
  if (selectedNom === "Sélectionner article") {
    setEmptyName(true);
  }

  if (selectedTax === "Sélectionner une taxe") {
    setEmptyTax(true);
  }

  if (!quantity) {
    setEmptyQuantity(true);
  }

  // If any required field is empty, return without adding the item
    if (selectedNom === "Sélectionner article" || selectedTax === "Sélectionner une taxe" || !quantity) {    
      return;
    }
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
                      setSelectedNom(prix[0].name);
                      setSelectedTax(taxes[0].name);
                      setEditableIndex(null); // Réinitialiser l'index d'édition

                    }

  
                  };
                  
  return ( 
    <div className="container mt-5 cli ">
      <h4 className="info fact" id='fact'></h4>
      <div className="row justify-content-center">

    

      <div className="container mt-5 cli5 ">
      <h4 className='let'>Facturation du Client</h4>
  <div className="row">
        <div className="col-md-2 cli2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title n1">Nom</h5>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="form-control"
                
              />
            </div>
          </div>
        </div>
        <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showNameModal ? "block" : "none" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Champ invalide</h5>
            </div>
            <div class="modal-body">
              <p>S'il vous plait, veuillez entrer votre nom.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={handleCloseNameModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

        <div className="col-md-2 cli3 ">
          <div className="">
            <div className="card-body">
              <h5 className="card-title n1">Prenoms</h5>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="form-control"
                
              
              />
            </div>
          </div>
        </div>
        <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showPrenModal ? "block" : "none" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Champ invalide</h5>
            </div>
            <div class="modal-body">
              <p>S'il vous plait, veuillez entrer votre Prenom.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={handleClosePrenModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title n1">Adresse</h5>
              <input
                type="text"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                className="form-control"
                
              />
            </div>
          </div>
        </div>
        <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showAdresModal ? "block" : "none" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Champ invalide</h5>
            </div>
            <div class="modal-body">
              <p>S'il vous plait, veuillez entrer votre adresse.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={handleCloseAdresModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title n1">Telephone</h5>
              <input
                type="number"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showTelModal ? "block" : "none" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Champ invalide</h5>
          
            </div>
            <div class="modal-body">
              <p>S'il vous plait, veuillez entrer votre telephone.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={handleCloseTelModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title n1">Residence</h5>
              <input
                type="text"
                value={residence}
                onChange={(e) => setResidence(e.target.value)}
                className="form-control"
               
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showResModal ? "block" : "none" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Champ invalide</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseResModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>S'il vous plait, veuillez entrer votre residence.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={handleCloseResModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <h4 className="infos cli1">Informations sur les articles</h4>
      <div className="row">
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
           
              <h5 className="card-title n1">Nom</h5>
              <div className={`form-group ${emptyName ? "has-danger" : ""}`}>
              <select
                className={`form-control ${emptyName ? "is-invalid" : ""}`}
                value={selectedNom}
                onChange={(e) => setSelectedNom(e.target.value)}
              >
             
                {prix.map((unit) => (
                
                  <option key={unit.name} value={unit.name}>
                    {unit.name}
                  </option>
                  
                ))}
              </select>
              {emptyName && <div className="invalid-feedback">Veuillez sélectionner un article.</div>}
          </div>
              
            </div>
          </div>
          
        </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title n1">Prix</h5>
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
              <h5 className="card-title n1">Quantité</h5>
              <div className={`form-group ${emptyQuantity ? "has-danger" : ""}`}>
              <input
                type="number"
                className={`form-control ${emptyQuantity ? "is-invalid" : ""}`}
               
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
          {emptyQuantity && <div className="invalid-feedback">Veuillez saisir une quantité.</div>}
        
          </div>
             
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="">
            <div className="card-body">
              <h5 className="card-title n1">TotalHT</h5>
            
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
              <h5 className="card-title n1">TotalTTC</h5>
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
              <h5 className="card-title n1">Taxe</h5>
              <div className={`form-group ${emptyTax ? "has-danger" : ""}`}>
              <select
                className={`form-control ${emptyTax ? "is-invalid" : ""}`}
                value={selectedTax}
                onChange={(e) => setSelectedTax(e.target.value)}
              >
                {taxes.map((tax) => (
                  <option key={tax.name} value={tax.name}>
                    {tax.name} - {tax.rate * 100}%
                  </option>
                ))}
              </select>
              {emptyTax && <div className="invalid-feedback">Veuillez saisir une taxe.</div>}
        
          </div>
             
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
        <h3 className='modif'>Liste des articles</h3>
        <table className="table ">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>TotalHT</th>
              <th>TotalTTC</th>
              <th>Actions </th>
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
                <div className="d-flex">
<button
className="btn btn-danger btn-sm me-4"
onClick={() => handleDeleteItem(index)}
>
<BsFillTrashFill/>   
</button> 


<button className="btn btn-warning btn-sm me-4"onClick={() => handleEditItem(index)}>
<BsFillPencilFill />   </button>
</div>
</td>

         </tr> 
            ))}
          </tbody>
        </table>
       {/* Bootstrap Modal for Delete Confirmation */}
       <div className="modal" tabIndex="-1" role="dialog" style={{ display: showDeleteModal ? "block" : "none" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmation de suppression</h5>
            </div>
            <div className="modal-body">
              Êtes-vous sûr de vouloir supprimer cet article ?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={cancelDelete}>
                Annuler
              </button>
              <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-between">
  <div className="d-flex flex-column align-items-start">
    
  </div>

  <div className="d-flex flex-column align-items-start">
  <label className="art">
      <strong className='tot1'>TotalHT:</strong>
    </label>
    <input
      type="text"
      className="w-5"
      value={calculateGlobalTotalHT()}
      readOnly
    />
    <label className="art1">
      <strong className='tot'>TotalTTC:</strong>
    </label>
    <input
      type="text"
      className="w-5"
      value={calculateTotalGlobalTTC()}
      readOnly
    />
    
  </div>
</div>
</div>
<div className='ttc'>
        
        <button className="btn btn-success w-10 val" onClick={handleValidate} >Validate
        </button>
      </div>




      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showQuantModal ? "block" : "none" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-danger">Champ incorrect</h5>
            </div>
            <div class="modal-body">
              <p>S'il vous plait, veuillez entrer une quantité positive.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={handleCloseQuantModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
          </div>
  );
};

export default Article;

