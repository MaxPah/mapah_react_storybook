import React from 'react';
import './PgfTitleImageCta.css';

export default function PgfTextImageCta({ text, image, btnText, btnUrl }) {
    return (
        <div className="pgf-title-image-cta">
            <div className="pgf-title-image-cta--title">{text}</div>
            <div className="pgf-title-image-cta--image">
                <img src={image} />
            </div>
            <div className="pgf-title-image-cta--cta">
                <a href={btnUrl}><span>{btnText}</span></a>
            </div>
        </div>
    );
}
