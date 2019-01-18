import React from "react";

import "./Header.scss";

import MenuItem from '../../1-Atoms/MenuItem/MenuItem';
import Brand from '../../1-Atoms/Brand/Brand';

export default function Header({title}) {
  return (
    <header className="header">
      <div className="header--left">
        <Brand title="Maxime PAHUD" />
      </div>
      <div className="header--right">
        <MenuItem title="TestToto1" href="#" />
        <MenuItem title="TestToto1" href="#" classAdd="blue" />
      </div>
    </header>
  );
}
