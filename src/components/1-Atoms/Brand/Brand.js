import React from 'react';
import logoMaxPah from './LogoMaxPah.svg';
import './Brand.css';

export default function Brand({title}) {
  return (
    <div className="brand">
      <div className="brand--logo">
        <img src={logoMaxPah} alt='logo' />
      </div>
      <div className="brand--name">
        <div>{title}</div>
      </div>
    </div>
  );
}
