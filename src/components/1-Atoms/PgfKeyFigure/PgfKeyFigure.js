import React from 'react';
import './PgfKeyFigure.scss';

export default class PgfKeyFigure extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <div  className="pgf-key-figure">
        <div className="pgf-key-figure__title">
          <h3>{title}</h3>
        </div>
        <div className="pgf-key-figure__desc">
          {description}
        </div>
      </div>
    );
  }
}
