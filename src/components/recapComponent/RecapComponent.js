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

              const pdf = new jsPDF({
                unit: "mm",
                format: "a4",
                orientation: "portrait",
              });
          
             
                <div className="pdf-content">
                  <h6 className="section-title">Informations du Client</h6>
                  <div className="cl1">
                    <div>
                    <p className="info-label">Nom:</p>
                    <p className="info-value">{clientInfo.nom}</p>  
                    <p className="info-label">Prenom:</p>
                    <p className="info-value">{clientInfo.prenom}</p>  
                    <p className="info-label">Adresse:</p>
                    <p className="info-value">{clientInfo.adresse}</p>  
                    <p className="info-label">Telephone:</p>
                    <p className="info-value">{clientInfo.telephone}</p>  
                   
                    </div>
                    </div>
                  
          
                  <h5 className="section-title">Informations sur les Articles</h5>
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
                  <h6 className="total-label">Total Global TH:</h6>
                  <h6 className="total-value">{totalGlobalTH}</h6>
                  <h6 className="total-label">Total Global TTC:</h6>
                  <h6 className="total-value">{totalGlobalTTC}</h6>  </div>

const scale = 4; // Adjust the scale for higher resolution
const canvas = await html2canvas(pdfRef.current, {
scale: scale,
logging: true,
margin: 10, // Set the margin value here
});

const imgData = canvas.toDataURL("image/png", 1.0); // Use PNG format for better quality
const imgWidth = pdf.internal.pageSize.width * 1.10; // Adjust the multiplier for higher resolution
const imgHeight = (canvas.height * imgWidth) / canvas.width;

pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
pdf.save("rapport.pdf");
};
          
    return (
   
      <div>
      <div ref={pdfRef}>
        <h6>Informations du Client</h6>
        <div className="cl1">
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
        <table className="table1">
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
