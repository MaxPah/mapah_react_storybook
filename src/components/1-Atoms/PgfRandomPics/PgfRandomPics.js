import React from 'react';
import './PgfRandomPics.scss';

export default class PgfRandomPics extends React.Component {
  componentDidMount() {}

  render() {
    const { pics } = this.props;

    var arr = [];
    var imageList = [];


    // Display image randomly.
    if (pics.length < 15) {
      for (var i = 0; i < 15; i++) {
        imageList.push(<div className="random-item no-image"></div>);
      }
      for (var i = 0; i < pics.length; i++) {
        arr.push(Math.floor(Math.random() * 15) + 1);
        imageList[arr[i]] = (<div className="random-item"><img src={pics[i]} alt="" /></div>)
      }
    }
    else {
      for (var i = 0; i < 16; i++) {
        imageList[i] = (<div className="random-item"><img src={pics[i]} alt="" /></div>)
      }
    }

    return (
      <div className="pgf-random-pics js-random-pics">
        {imageList.map(function (imageItem, key) {
          return imageItem;
        })}
      </div>
    );
  }
}
