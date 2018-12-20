import React from 'react';
import './PgfSlider.css';
import Siema from 'siema';

export default class PgfSlider extends React.Component {

  componentDidMount() {
    new Siema();
  }

  render() {
    const { title, slides } = this.props;

    return (
      <div  className="pgf-slider">
        <div className="pgf-slider--title">{title}</div>
        <div className="siema">
          <div><img src={slides[0]} alt=""/></div>
          <div><img src={slides[1]} alt=""/></div>
        </div>
      </div>
    );
  }
}