import React from 'react';
import './PgfTextImageCta.css';

export default function PgfTextImageCta({ text, image, btnText, btnUrl }) {
    return (
        <div className="pgf-text-image-cta">
            <div>{text}</div>
            <img src={image} />
            <a href={btnUrl}>{btnText}</a>
        </div>
    );
}
