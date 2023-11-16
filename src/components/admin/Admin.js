import React, { useState } from "react";
import data from '../../data.json'; 

function Admin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handlePhoneNumberChange}
            placeholder="Enter phone number"
          />

          {["228", "229"].includes(phoneNumber.substring(0, 3)) && (
            <div>
              <label>
                Choisissez votre pays :
                <select
                  value={selectedCountry}
                  onChange={(event) => setSelectedCountry(event.target.value)}
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

          <button type="submit">Submit</button>
        </form>

      </div>
    </div>
  );
}

export default Admin;


