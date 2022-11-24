import React from 'react';
import './footer.scss';

const Footer = () => {
  const actuallYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Mateusz Łuczak {actuallYear} @ All Rights Reserved</p>
    </div>
  );
};

export default Footer;
