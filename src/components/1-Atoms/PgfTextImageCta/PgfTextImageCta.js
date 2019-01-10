import React from 'react';
import './PgfTextImageCta.scss';

export default function PgfTextImageCta({ title, text, image, btnText, btnUrl, inverted = '' }) {
    return (
        <div className={[inverted, "pgf-text-image-cta"].join(' ')}>
            <div className="pgf-text-image--left">
                <div className="pgf-text-image-cta--title">{title}</div>
                <div className="pgf-text-image-cta--text">{text}</div>
                <div className="pgf-text-image-cta--cta">
                    <a href={btnUrl}>{btnText}</a>
                </div>
            </div>
            <div className="pgf-text-image--right">
                <div className="pgf-text-image-cta--image">
                    <img src={image} />
                </div>
            </div>
        </div>
    );
}
