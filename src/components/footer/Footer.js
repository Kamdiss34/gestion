import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Mon Application</p>
    </footer>
  );
};

const footerStyle = {
  background: 'hsl(210,100%,56%)',
  //color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;
