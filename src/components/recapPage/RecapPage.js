
import React from "react";
import RecapComponent from "../recapComponent/RecapComponent";

const RecapPage = ({ location }) => {
    const { clientInfo, items } = location.state || {};
  
    return (
      <div>
       
        <RecapComponent clientInfo={clientInfo} items={items} />
      </div>
  );
};

export default RecapPage;
