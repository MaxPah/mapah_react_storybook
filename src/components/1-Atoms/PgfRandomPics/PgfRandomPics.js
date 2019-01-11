import React from 'react';
import './PgfRandomPics.scss';

export default class PgfRandomPics extends React.Component {

  componentDidMount() {
    
  }

  render() {
    const { pics } = this.props;

    return (
      <div className="pgf-random-pics js-random-pics">
          <div className="random-item"><img src={pics[0]} alt="" /></div>
          <div className="random-item no-image"></div>
          <div className="random-item no-image"></div>
          <div className="random-item"><img src={pics[3]} alt="" /></div>
          <div className="random-item"><img src={pics[4]} alt="" /></div>
          <div className="random-item"><img src={pics[5]} alt="" /></div>
          <div className="random-item"><img src={pics[6]} alt="" /></div>
          <div className="random-item no-image"></div>
          <div className="random-item"><img src={pics[8]} alt="" /></div>
          <div className="random-item"><img src={pics[9]} alt="" /></div>
          <div className="random-item no-image"></div>
          <div className="random-item"><img src={pics[11]} alt="" /></div>
          <div className="random-item"><img src={pics[12]} alt="" /></div>
          <div className="random-item"><img src={pics[13]} alt="" /></div>
          <div className="random-item"><img src={pics[14]} alt="" /></div>
          <div className="random-item no-image"></div>
      </div>
    );
  }
}