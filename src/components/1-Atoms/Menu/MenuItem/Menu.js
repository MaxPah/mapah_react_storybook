import React from 'react';

export default function Menu({ menu: { id, title, state }, onArchiveMenu, onPinMenu }) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
