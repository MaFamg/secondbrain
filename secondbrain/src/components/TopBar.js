import React from 'react';
import logo from '../images/logo.png';

const TopBar = () => {
  return (
    <div style={topBarStyles}>
        <p style={textStyles}>SECOND BRAIN</p>
        <div style={logoContainerStyles}>
            <img src={logo} alt="Logo" style={logoStyles} />
        </div>
    </div>
  );
};

const topBarStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '120px', // Height of the top bar
  backgroundColor: '#B1302D',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'sticky', // Keeps it fixed at the top
  top: 0,
  zIndex: 1000, // Ensures it stays above other components
};

const logoContainerStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'center',
    //marginLeft: '40vw'
};

const logoStyles = {
  height: '100px',
  objectFit: 'contain',
};

const textStyles = {
    fontSize: '60px',
    color: 'white',
    marginRight: '10px',        // Small margin between text and logo
    fontWeight: 'bold',         // Make text bold
};

export default TopBar;
