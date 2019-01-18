import React from "react";

import "./Footer.scss";

import MenuItem from '../../1-Atoms/MenuItem/MenuItem';
import Brand from '../../1-Atoms/Brand/Brand';

export default function Header({ title }) {
  return (
    <footer className="footer">
      <div className="footer--left">
        <Brand />
      </div>
      <div className="footer--right">
        <MenuItem title="TestToto1" href="#" />
        <MenuItem title="TestToto1" href="#" />
        <MenuItem title="TestToto1" href="#" />
        <MenuItem title="TestToto1" href="#" />
        <MenuItem title="TestToto1" href="#" />
        <MenuItem title="TestToto1" href="#" />
        <MenuItem title="TestToto1" href="#" classAdd="blue" />
      </div>
      <div className="footer--bottom">
        <ul>
          <li>
            <a href="#">Mentions légales</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Copyright maximepahud.fr 2019</a>
          </li>
          <li>
            <a href="#">Other</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
