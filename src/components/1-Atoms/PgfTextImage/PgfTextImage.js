import React from 'react';
import './PgfTextImage.css';

export default function PgfTextImage({ text, image }) {
    return (
        <div className="pgf-text-image">
            <div>{text}</div>
            <img src={image} />
        </div>
    );
}
