import React from 'react';
import './PgfRandomPics.scss';

export default class PgfRandomPics extends React.Component {
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (array.length));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  componentDidMount() {}

  render() {
    const { pics } = this.props;

    const imageList = [];

    // Display image randomly.
    for (var i = 0; i < 16; i++) {
      if (i < pics.length) {
        imageList.push(<div className="random-item"><img src={pics[i]} alt="" /></div>);
      } else {
        imageList.push(<div className="random-item no-image"></div>);
      }
    }
    this.shuffleArray(imageList);

    return (
      <div className="pgf-random-pics js-random-pics">
        {imageList.map(imageItem => imageItem)}
      </div>
    );
  }
}
