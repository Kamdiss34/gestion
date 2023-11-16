import React from 'react'

function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}


function Supprimer() {
  return (
    <div>
      <Welcome name="Votre excellence Mr KPAKPOU" />
      <Welcome name="Kamal" />
      <Welcome name="Nabil" />
    </div>
  );
}
export default Supprimer
  
    
  