import React from 'react';
import './PgfTextImage.scss';

export default function PgfTextImage({ title, text, image, inverted = '' }) {
    return (
        <div className={[inverted, "pgf-text-image"].join(' ')}>
            <div className="pgf-text-image--left">
                <div className="pgf-text-image--title">{title}</div>
                <div className="pgf-text-image--text">{text}</div>
            </div>
            <div className="pgf-text-image--right">
                <div className="pgf-text-image--image">
                    <img src={image} />
                </div>
            </div>
        </div>
    );
}
