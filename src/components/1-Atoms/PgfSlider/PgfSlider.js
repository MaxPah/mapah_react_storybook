import React from 'react';
import './PgfSlider.css';
import Siema from 'siema';

export default function PgfSlider({ title, slides}) {
    return (
        <div className="pgf-slider siema">
            <div className="pgf-slider--title">{title}</div>
            <div className="pgf-slider-slides">
                {/* {this.props.question.answers.map((slide, i) => {
                    console.log("Entered");
                    // Return the element. Also pass key     
                    return (<img src={slide} />)
                })} */}
                <img src={slides[0]} alt=""/>
                <img src={slides[1]} alt=""/>
            </div>
        </div>
    );
}

new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => { },
    onChange: () => { },
});