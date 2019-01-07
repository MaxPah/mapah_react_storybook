import React from 'react';
import './PgfRandomPics.css';

export default class PgfRandomPics extends React.Component {

  componentDidMount() {
    
  }

  render() {
    const { pics } = this.props;

    return (
      <div  className="pgf-random-pics">
        <div className="js-random-pics">
          <div><img src={pics[0]} alt=""/></div>
          <div><img src={pics[1]} alt=""/></div>
          <div><img src={pics[2]} alt=""/></div>
          <div><img src={pics[3]} alt=""/></div>
          <div><img src={pics[4]} alt=""/></div>
          <div><img src={pics[5]} alt=""/></div>
          <div><img src={pics[6]} alt=""/></div>
          <div><img src={pics[7]} alt=""/></div>
          <div><img src={pics[8]} alt=""/></div>
        </div>
      </div>
    );
  }
}