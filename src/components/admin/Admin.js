import React, { useState } from "react";
import data from '../../data.json'; 
import "bootstrap/dist/css/bootstrap.min.css";
import './admin.css'; 

function Admin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handlePhoneNumberChange = (event) => {
    const number = event.target.value;
    setPhoneNumber(number);
    
    const indicatif = number.substring(0, 3);
    if (["228", "229"].includes(indicatif)) {
      setSelectedCountry(""); // Réinitialiser le pays si les trois premiers chiffres changent
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez traiter les données ici si nécessaire
  };

  return (
    <div className="signup_container w-100 d-flex justify-content-center">
      <div className="cover">
        <h4>Login</h4>
        <form onSubmit={handleSubmit} className="form">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Entrez votre prénom"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Entrez votre nom"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Numéro de téléphone</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Entrez votre numéro de téléphone"
            />

            {["228", "229"].includes(phoneNumber.substring(0, 3)) && (
              <div>
                <label>
                  Choisissez votre pays :
                  <select
                    value={selectedCountry}
                    onChange={(event) => setSelectedCountry(event.target.value)}
                    className="form-select w-15 "
                  >
                    {data.telephone[phoneNumber.substring(0, 3)]?.map(
                      (country, index) => (
                        <option key={index} value={country.pays}>
                          {country.pays}
                        </option>
                      )
                    )}
                  </select>
                </label>
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
