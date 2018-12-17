import React from 'react';

export default function Menu({title, href}) {
  return (
    <div className="menu__item">
      <a href={href}>{title}</a>
    </div>
  );
}
