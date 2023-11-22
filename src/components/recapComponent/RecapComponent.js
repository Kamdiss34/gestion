// RecapComponent.js
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


import "./recapComponent.css"



const RecapComponent = ({ clientInfo, items }) => {
  const pdfRef = useRef();
    const calculateTotalGlobal = () => {
        return items.reduce((total, item) => {
          // Ajoutez le produit de prix et de quantité à la somme totale
          return total + (item.price * item.quantity) ;
        }, 0); }
   
        const calculateTotalGlobalC = () => {
            return items.reduce((total, item) => {
              // Ajoutez le produit de prix et de quantité à la somme totale
              return total + ((item.price * item.quantity) * (1 + item.rate)) ;
            }, 0); }
            const generatePDF = async () => {
              const totalGlobalTH = calculateTotalGlobal();
              const totalGlobalTTC = calculateTotalGlobalC();
          
              const pdfContent = (
                <div>
                  <h6>Informations du Client</h6>
                  <div className="cli">
                    <div>
                      <p>Nom: <strong>{clientInfo.nom}</strong></p>
                      <p>Adresse: <strong>{clientInfo.adresse}</strong></p>
                    </div>
                    <div>
                      <p>Prenoms: <strong>{clientInfo.prenom}</strong></p>
                      <p>Telephone: <strong>{clientInfo.telephone}</strong></p>
                    </div>
                  </div>
          
                  <h5>Informations sur les Articles</h5>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nom Article</th>
                        <th>Prix Unitaire</th>
                        <th>Quantité</th>
                        <th>TotalHT</th>
                        <th>TotalTTC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price * item.quantity}</td>
                          <td>{(item.price * item.quantity) * (1 + item.rate)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
          
                  <h6>Total Global TH: <strong>{totalGlobalTH}</strong></h6>
                  <h6>Total Global TTC: <strong>{totalGlobalTTC}</strong></h6>
                </div>
              );
              const canvas = await html2canvas(pdfRef.current, {
                scale: 2, // Adjust the scale for higher resolution
                logging: true, // Enable logging for debugging if needed
            });
        
            const pdf = new jsPDF({
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
            });
        
            pdf.addImage(canvas.toDataURL("image/jpeg", 1.0), "JPEG", 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
            pdf.save("rapport.pdf");
            };
          
    return (
   
      <div>
      <div ref={pdfRef}>
        <h6>Informations du Client</h6>
        <div className="cli">
          <div>
            <p className="nom">Nom: <strong>{clientInfo.nom}</strong></p>
            <p className="adres">Adresse: <strong>{clientInfo.adresse}</strong></p>
          </div>
          <div>
            <p className="pren">Prenoms: <strong>{clientInfo.prenom}</strong></p>
            <p className="tel">Telephone: <strong>{clientInfo.telephone}</strong></p>
          </div>
        </div>

        <h5>Informations sur les Articles</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Nom Article</th>
              <th>Prix Unitaire</th>
              <th>Quantité</th>
              <th>TotalHT</th>
              <th>TotalTTC</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <td>{(item.price * item.quantity) * (1 + item.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h6>Total Global TH: <strong>{calculateTotalGlobal()}</strong></h6>
        <h6>Total Global TTC: <strong>{calculateTotalGlobalC()}</strong></h6>
      </div>

      <div className="button-section">
        <button className='button text-dark' onClick={generatePDF}>Télécharger en PDF</button>
      </div>
    </div>
     
  );
};

export default RecapComponent;
