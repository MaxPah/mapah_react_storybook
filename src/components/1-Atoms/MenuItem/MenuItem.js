import React from 'react';
import './MenuItem.css';

export default function MenuItem({title, href, classAdd}) {
  return (
    <div className={['menu-item', classAdd].join(' ')}>
      <a href={href}>{title}</a>
    </div>
  );
}
