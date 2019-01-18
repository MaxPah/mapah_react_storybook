import React from 'react';
import './PgfTitleImage.scss';

export default function PgfTitleImage({ text, image }) {
  return (
    <div className="pgf-title-image">
      <div className="pgf-title-image--title">{text}</div>
      <div className="pgf-title-image--image">
        <img src={image} />
      </div>
    </div>
  );
}
